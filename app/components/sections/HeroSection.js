import CTA from "../reusable/CTA";
import SmoothScrollLink from "../ui/SmoothScrollLink";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Dutch flag icon */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 mt-10 md:mt-0 flex items-center justify-center">
            <div className="rounded-full bg-white p-4 shadow-lg">
              <span className="text-3xl">🇳🇱</span>
            </div>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-800 md:text-7xl">
          Learn <span className="text-red-500">Dutch</span>
          <br />
          <span>Your Way</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
          Personalized lessons, practical exercises, and expert guidance.
        </p>

        {/* CTA buttons */}
        <CTA />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <SmoothScrollLink href="#lessons">
            <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </SmoothScrollLink>
        </div>
      </div>
    </section>
  );
}
