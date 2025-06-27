// app/sitemap.js
import { getAllPosts } from "./lib/blog";

export default async function sitemap() {
  const posts = await getAllPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://yourdomain.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://yourdomain.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://yourdomain.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogPosts,
  ];
}
