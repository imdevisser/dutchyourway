import Link from "next/link";
import Image from "next/image";
import BlogShareButtons from "./BlogShareButtons";
import MDXContent from "./MDXContent";

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl max-w-md mx-auto text-center">
          <p className="text-red-500 text-lg font-medium">Post not found.</p>
          <Link
            href="/blog"
            className="inline-block mt-4 text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text hover:from-red-700 hover:to-blue-700 font-semibold transition-all duration-300"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      <article className="container mx-auto px-4 py-20">
        {/* Header */}
        <header className="mb-12">
          <Link
            href="/blog"
            className="group inline-flex items-center mb-8 text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium"
          >
            <svg
              className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 mb-8">
            {/* Featured Image */}
            {post.image && (
              <div className="mb-8 mt-3">
                <div className="relative aspect-video w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>
              </div>
            )}

            <h1 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              {post.title}
            </h1>
            {post.subtitle && (
              <h2 className="text-md lg:text-xl font-semibold mb-8 text-gray-600">
                {post.subtitle}
              </h2>
            )}

            <div className="flex flex-wrap items-center text-gray-600 text-sm gap-4 mb-6">
              <time
                dateTime={post.date}
                className="flex items-center font-medium"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              {post.author && (
                <span className="flex items-center font-medium">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  By {post.author}
                </span>
              )}

              {post.readTime && (
                <span className="flex items-center font-medium">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {post.readTime} min read
                </span>
              )}
            </div>

            {post.tags && (
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-red-100 to-blue-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <MDXContent source={post.content} />
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Posts
          </Link>

          <BlogShareButtons title={post.title} />
        </div>
      </article>
    </div>
  );
}
