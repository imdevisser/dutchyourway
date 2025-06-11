import Link from "next/link";

export default function LessonCard({ lesson }) {
  const {
    id,
    title,
    description,
    features,
    duration,
    level,
    // price,
    color,
    icon,
  } = lesson;

  // Color variants for different card types
  const colorVariants = {
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      button: "bg-red-600 hover:bg-red-700",
      accent: "text-red-600",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700",
      accent: "text-blue-600",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      button: "bg-purple-600 hover:bg-purple-700",
      accent: "text-purple-600",
    },
  };

  const colors = colorVariants[color] || colorVariants.blue;

  // Icon components
  const renderIcon = () => {
    switch (icon) {
      case "seedling":
        return (
          <svg
            className={`h-6 w-6 ${colors.iconColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
      case "trending-up":
        return (
          <svg
            className={`h-6 w-6 ${colors.iconColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        );
      case "award":
        return (
          <svg
            className={`h-6 w-6 ${colors.iconColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className={`h-6 w-6 ${colors.iconColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={`${colors.bg} ${colors.border} group transform rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
    >
      {/* Header */}
      <div className="mb-6 flex items-center">
        <div className={`${colors.iconBg} mr-4 rounded-full p-3`}>
          {renderIcon()}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <div className="mt-1 flex items-center space-x-3">
            <span className={`${colors.accent} text-sm font-semibold`}>
              {level}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">{duration} (online)</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mb-6 leading-relaxed text-gray-600">{description}</p>

      {/* Features */}
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg
              className={`h-4 w-4 ${colors.iconColor} mr-3 flex-shrink-0`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto">
        <Link
          href={`/lessons/${id}`}
          className={`${colors.button} block w-full transform rounded-full px-6 py-3 text-center font-semibold text-white transition-all duration-300 group-hover:scale-105`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
