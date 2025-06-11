import SmoothScrollLink from "../ui/SmoothScrollLink";

export default function CTA() {
  return (
    <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <SmoothScrollLink
        href="#lessons"
        className="transform rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
      >
        Start Learning
      </SmoothScrollLink>
      <SmoothScrollLink
        href="#free-resources"
        className="transform rounded-full border-2 border-blue-600 bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-xl"
      >
        Free Resources
      </SmoothScrollLink>
    </div>
  );
}
