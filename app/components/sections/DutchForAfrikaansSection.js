import Link from "next/link";
import CtaAfrikaans from "../reusable/CtaAfrikaans";

export default function DutchForAfrikaansSection() {
  // const advantages = [
  //   {
  //     title: "Gedeelde woordeskat",
  //     description:
  //       "Meer as 85% van Nederlandse woorde is herkenbaar vir Afrikaanssprekendes",
  //     example: "huis → huis, water → water, mooi → mooi",
  //     icon: "book-open",
  //   },
  //   {
  //     title: "Soortgelyke grammatika",
  //     description: "Basiese sinstruktuur en woordorde is byna identies",
  //     example: "Ek is gelukkig → Ik ben gelukkig",
  //     icon: "puzzle",
  //   },
  //   {
  //     title: "Spelling en uitspraak",
  //     description:
  //       "Baie woorde word soortgelyk gespel, alhoewel die Afrikaans meer foneties is",
  //     example: "moeilik → moeilijk",
  //     icon: "volume-2",
  //   },
  // ];

  // const testimonials = [
  //   {
  //     name: "Annemarie van der Merwe",
  //     location: "Cape Town",
  //     quote:
  //       "I was amazed how quickly I picked up Dutch! Within 3 months I was having full conversations.",
  //     flag: "🇿🇦",
  //   },
  //   {
  //     name: "Pieter Botha",
  //     location: "Stellenbosch",
  //     quote:
  //       "The lessons focused on the differences, not starting from scratch. So much more efficient!",
  //     flag: "🇿🇦",
  //   },
  // ];

  // const renderIcon = (iconName) => {
  //   switch (iconName) {
  //     case "book-open":
  //       return (
  //         <svg
  //           className="h-6 w-6 text-orange-600"
  //           fill="none"
  //           stroke="currentColor"
  //           viewBox="0 0 24 24"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  //           />
  //         </svg>
  //       );
  //     case "puzzle":
  //       return (
  //         <svg
  //           className="h-6 w-6 text-orange-600"
  //           fill="none"
  //           stroke="currentColor"
  //           viewBox="0 0 24 24"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
  //           />
  //         </svg>
  //       );
  //     case "volume-2":
  //       return (
  //         <svg
  //           className="h-6 w-6 text-orange-600"
  //           fill="none"
  //           stroke="currentColor"
  //           viewBox="0 0 24 24"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M15.536 8.464a5.5 5.5 0 010 7.072m2.828-9.9a9.5 9.5 0 010 13.456M6.343 6.343A8 8 0 106.343 17.657L4 20l6.343-6.343z"
  //           />
  //         </svg>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  return (
    <section className="bg-gradient-to-br from-purple-50 to-red-50 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center space-x-4">
            <div className="rounded-full bg-white p-3 shadow-lg">
              <span className="text-2xl">🇿🇦</span>
            </div>
            <div className="text-xl text-purple-400">→</div>
            <div className="rounded-full bg-white p-3 shadow-lg">
              <span className="text-2xl">🇳🇱</span>
            </div>
          </div>

          <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            <span className="text-purple-700">Dutch for Afrikaans</span>{" "}
            speakers
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Do you speak Afrikaans? Then you have a big advantage over other
            students. Build on your existing knowledge for faster results.
          </p>
        </div>

        {/* Advantages Grid */}
        {/* <div className="mx-auto mb-16 grid max-w-6xl gap-8 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-6 w-fit rounded-full bg-orange-100 p-3">
                {renderIcon(advantage.icon)}
              </div>

              <h3 className="mb-4 text-xl font-bold text-gray-800">
                {advantage.title}
              </h3>
              <p className="mb-4 leading-relaxed text-gray-600">
                {advantage.description}
              </p>

              <div className="rounded-lg border-l-4 border-orange-400 bg-orange-50 p-4">
                <p className="font-mono text-sm text-gray-700">
                  {advantage.example}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Comparison Section */}
        <div className="mx-auto mb-16 max-w-2xl rounded-2xl bg-white p-8 shadow-lg md:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
            See the similarities
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-4 flex items-center text-lg font-semibold text-purple-600">
                <span className="mr-2">🇿🇦</span> Afrikaans
              </h4>
              <div className="space-y-3">
                <div className="rounded-lg bg-purple-50 p-3">
                  Ek wil graag Nederlands leer
                </div>
                <div className="rounded-lg bg-purple-50 p-3">
                  Die huis is baie mooi
                </div>
                <div className="rounded-lg bg-purple-50 p-3">
                  Hoe gaan dit met jou?
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 flex items-center text-lg font-semibold text-blue-600">
                <span className="mr-2">🇳🇱</span> Nederlands
              </h4>
              <div className="space-y-3">
                <div className="rounded-lg bg-blue-50 p-3">
                  Ik wil graag Nederlands leren
                </div>
                <div className="rounded-lg bg-blue-50 p-3">
                  Het huis is heel mooi
                </div>
                <div className="rounded-lg bg-blue-50 p-3">
                  Hoe gaat het met jou?
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              You&apos;re already halfway there!
            </p>
          </div>
        </div>

        {/* Addressing Common Concerns */}
        <div className="mx-auto mb-16 max-w-4xl md:p-12">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <span className="text-2xl">💭</span>
            </div>
            <h3 className="mb-4 text-2xl font-medium text-gray-800">
              &quot;But the similarities actually make it <strong>more</strong>{" "}
              confusing!&quot;
            </h3>
          </div>

          <div className="mb-6 rounded-xl border-l-4 border-purple-400 bg-white p-6">
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              I hear you thinking:{" "}
              <em>
                &quot;Yes, I know it&apos;s similar, but that&apos;s exactly
                what makes it so confusing! I keep making mistakes because I
                don&apos;t know when it&apos;s the same as Afrikaans, and when
                it&apos;s not.&quot;
              </em>
            </p>
            <p className="text-gray-600">
              You&apos;re absolutely right - and that&apos;s exactly why you
              need someone who understands{" "}
              <strong>both languages thoroughly</strong>.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <span className="text-red-600">⚠️</span>
                </div>
                <h4 className="font-semibold text-gray-800">The problem</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Most Dutch courses don&apos;t understand the specific problems
                that Afrikaans speakers struggle with. They treat you like any
                other beginner and waste time on things you already know.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <span className="text-green-600">✅</span>
                </div>
                <h4 className="font-semibold text-gray-800">My solution</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                With my background in both languages, I know exactly where you
                will stumble. I can point out your specific mistakes and help
                you overcome them effectively.
              </p>
            </div>
          </div>

          {/* <div className="mt-8 text-center">
            <div className="inline-block rounded-full bg-white px-6 py-3 shadow-md">
              <p className="font-medium text-gray-700">
                <span className="text-orange-600">🎯</span> Fokus op wat saak
                maak: die ooreenkomste EN die verskille
              </p>
            </div>
          </div> */}
        </div>

        {/* Testimonials */}
        {/* <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
            Suksesverhale van mede Suid-Afrikaners
          </h3>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center">
                  <span className="mr-3 text-2xl">{testimonial.flag}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <blockquote className="leading-relaxed text-gray-700 italic">
                  {testimonial.quote}
                </blockquote>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        {/* <div className="text-center">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 p-8 text-white md:p-12">
            <h3 className="mb-4 text-3xl font-bold">
              Is jy reg om Nederlands te praat?
            </h3>
            <p className="mb-8 text-xl opacity-90">
              Begin met my gespesialiseerde program wat spesifiek vir
              Afrikaanssprekendes ontwerp is.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/dutch-for-afrikaans"
                className="transform rounded-full bg-white px-8 py-4 text-lg font-semibold text-red-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Leer meer
              </Link>
              <Link
                href="#contact"
                className="t ransition-all transform rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white duration-300 hover:scale-105 hover:bg-white hover:text-red-600"
              >
                Boek &apos;n les
              </Link>
            </div>
          </div>
        </div> */}

        <CtaAfrikaans />
      </div>
    </section>
  );
}
