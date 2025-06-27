// app/components/BlogShareButtons.js
"use client";

export default function BlogShareButtons({ title }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: window.location.href,
        })
        .catch((err) => console.error("Share failed:", err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-white hover:shadow-md transition-all duration-300"
    >
      Share
    </button>
  );
}
