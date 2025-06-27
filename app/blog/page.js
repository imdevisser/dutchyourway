import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "Read our latest blog posts and updates",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 py-50">
        {/* <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Insights, tutorials, and updates from our team
          </p>
        </header> */}

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl max-w-md mx-auto">
              <p className="text-gray-600 text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                {post.image && (
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <time dateTime={post.date} className="font-medium">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    {post.readTime && (
                      <>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="font-medium">
                          {post.readTime} min read
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl font-bold mb-4 text-gray-800">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {post.excerpt && (
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {post.tags && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gradient-to-r from-red-100 to-blue-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
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
        )}
      </div>
    </div>
  );
}
