import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/app/components/MDXComponents";

const postsDirectory = path.join(process.cwd(), "content/posts");

export async function getAllPosts() {
  try {
    await fs.access(postsDirectory);
  } catch {
    console.warn("Posts directory does not exist:", postsDirectory);
    return [];
  }

  try {
    const fileNames = await fs.readdir(postsDirectory);

    const posts = await Promise.all(
      fileNames
        .filter((name) => name.endsWith(".mdx"))
        .map(async (fileName) => {
          const id = fileName.replace(/\.mdx$/, "");
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = await fs.readFile(fullPath, "utf8");
          const matterResult = matter(fileContents);

          return {
            id,
            slug: id,
            ...matterResult.data,
            content: matterResult.content,
          };
        })
    );

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    // Check if the file exists
    await fs.access(fullPath);

    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const compiledMDX = await compileMDX({
      source: content,
      components: MDXComponents, // Use your custom components here
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          development: process.env.NODE_ENV === "development",
        },
      },
    });

    return {
      slug,
      ...data,
      content: compiledMDX.content,
    };
  } catch (error) {
    console.error("Failed to load post:", slug, error);
    return null;
  }
}

// Fixed: Made async and await getAllPosts()
export async function getAllPostSlugs() {
  try {
    const posts = await getAllPosts();

    return posts.map((post) => ({
      params: { slug: post.slug },
    }));
  } catch (error) {
    console.error("Error getting post slugs:", error);
    return [];
  }
}

// Additional helper function to get posts with excerpts
export async function getAllPostsWithExcerpts() {
  try {
    const posts = await getAllPosts();

    return posts.map((post) => ({
      ...post,
      excerpt: post.excerpt || generateExcerpt(post.content),
      readTime: post.readTime || calculateReadTime(post.content),
    }));
  } catch (error) {
    console.error("Error getting posts with excerpts:", error);
    return [];
  }
}

// Helper function to generate excerpt from content
function generateExcerpt(content, maxLength = 160) {
  if (!content) return "";

  // Remove markdown syntax and get plain text
  const plainText = content
    .replace(/#{1,6}\s+/g, "") // Remove headers
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold
    .replace(/\*(.*?)\*/g, "$1") // Remove italic
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove links
    .replace(/`(.*?)`/g, "$1") // Remove inline code
    .replace(/\n/g, " ") // Replace newlines with spaces
    .trim();

  if (plainText.length <= maxLength) return plainText;

  return plainText.slice(0, maxLength).trim() + "...";
}

// Helper function to calculate read time
function calculateReadTime(content) {
  if (!content) return 0;

  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);

  return readTime;
}

// Helper function to get recent posts
export async function getRecentPosts(limit = 3) {
  try {
    const posts = await getAllPostsWithExcerpts();
    return posts.slice(0, limit);
  } catch (error) {
    console.error("Error getting recent posts:", error);
    return [];
  }
}

// Helper function to get posts by tag
export async function getPostsByTag(tag) {
  try {
    const posts = await getAllPosts();
    return posts.filter((post) => post.tags && post.tags.includes(tag));
  } catch (error) {
    console.error("Error getting posts by tag:", error);
    return [];
  }
}

// Helper function to get all unique tags
export async function getAllTags() {
  try {
    const posts = await getAllPosts();
    const allTags = posts.reduce((tags, post) => {
      if (post.tags && Array.isArray(post.tags)) {
        tags.push(...post.tags);
      }
      return tags;
    }, []);

    // Return unique tags with count
    const tagCounts = allTags.reduce((counts, tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
      return counts;
    }, {});

    return Object.entries(tagCounts)
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error("Error getting all tags:", error);
    return [];
  }
}
