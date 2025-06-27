import Link from "next/link";
import { getAllPosts } from "../../lib/blog";
import Image from "next/image";

export default async function BlogPreviewSection() {
  try {
    const posts = await getRecentPosts(3);

    if (posts.length === 0) {
      return null; // Don't show section if no posts
    }

    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Stay updated with our latest insights, tutorials, and
              announcements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                {post.image && (
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="text-sm text-gray-600 mb-3 font-medium">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  {post.excerpt && (
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {post.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gradient-to-r from-red-100 to-blue-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="group inline-flex items-center font-semibold text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text hover:from-red-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Read more
                    <svg
                      className="ml-2 h-4 w-4 text-red-600 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              View All Posts
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error loading blog posts for preview:", error);
    return null;
  }
}
