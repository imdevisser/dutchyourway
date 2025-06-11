export default function ShopSection() {
  const products = [
    {
      id: "textbook-basics",
      title: "Nederlands voor Afrikaans-sprekenden",
      description:
        "Comprehensive guide covering A1-A2 level Dutch with exercises, audio files, and cultural insights.",
      price: "€10.00",
      originalPrice: "€15.00",
      image: "📚",
      features: [
        "200+ pages of content",
        "Audio pronunciations",
        "Practice exercises",
        "Cultural notes",
      ],
      badge: "Bestseller",
      badgeColor: "green",
    },
    {
      id: "audio-course",
      title: "Aanlyn video kursus",
      description:
        "12-hour comprehensive audio course for learning Dutch on-the-go. Perfect for commuters and busy schedules.",
      price: "Beskikbaar op Udemy",
      originalPrice: null,
      image: "🎧",
      features: [
        "5+ hours of video",
        "Native speaker voices",
        "Downloadable MP3s",
        "Progress tracking",
      ],
      badge: "Popular",
      badgeColor: "blue",
    },
  ];

  const renderBadge = (badge, color) => {
    if (!badge) return null;

    const colorClasses = {
      green: "bg-green-100 text-green-800",
      blue: "bg-blue-100 text-blue-800",
      orange: "bg-orange-100 text-orange-800",
      purple: "bg-purple-100 text-purple-800",
    };

    return (
      <span
        className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${colorClasses[color]}`}
      >
        {badge}
      </span>
    );
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center">
            <div className="rounded-full bg-white p-4 shadow-lg">
              <span className="text-3xl">📚</span>
            </div>
          </div>

          <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            <span className="text-blue-600">Shop</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Enhance your Dutch learning journey with our carefully curated
            collection of books, audio courses, and study materials.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mx-auto mb-16 grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {renderBadge(product.badge, product.badgeColor)}

              {/* Product Image/Icon */}
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <span className="text-4xl">{product.image}</span>
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-800 transition-colors group-hover:text-blue-600">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mb-4 leading-relaxed text-gray-600">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-4 flex items-center space-x-2">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full transform rounded-full bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
