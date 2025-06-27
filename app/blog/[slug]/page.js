import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "../../../lib/blog";
import BlogPost from "@/app/components/BlogPost";

export async function generateStaticParams() {
  try {
    const posts = await getAllPostSlugs();
    return posts;
  } catch (error) {
    console.error("Error generating static params:", error);
    return []; // Return empty array if there's an error
  }
}

// Fix: Await params before accessing properties
export async function generateMetadata({ params }) {
  try {
    const resolvedParams = await params; // Await params first
    const post = await getPostBySlug(resolvedParams.slug);

    if (!post) {
      return { title: "Post Not Found" };
    }

    return {
      title: post.title,
      subtitle: post.subtitle,
      description: post.excerpt || post.title,
      keywords: post.tags?.join(", "),
      authors: post.author ? [{ name: post.author }] : undefined,
      openGraph: {
        title: post.title,
        subtitle: post.subtitle,
        description: post.excerpt || post.title,
        images: post.image ? [{ url: post.image, alt: post.title }] : [],
        type: "article",
        publishedTime: post.date,
        tags: post.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt || post.title,
        images: post.image ? [post.image] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: "Post Not Found" };
  }
}

// Fix: Await params before accessing properties
export default async function BlogPostPage({ params }) {
  try {
    const resolvedParams = await params; // Await params first
    const post = await getPostBySlug(resolvedParams.slug);

    if (!post) {
      notFound();
    }

    return <BlogPost post={post} />;
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
