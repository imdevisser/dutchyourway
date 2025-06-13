import Image from "next/image";

import hero from "@/public/hero.png";
import Philosophy from "../reusable/Philosophy";

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center">
            <div className="rounded-full bg-gradient-to-r from-blue-100 to-purple-100 p-4 shadow-lg">
              <span className="text-3xl">👋</span>
            </div>
          </div>

          <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Meet Your <span className="text-blue-600">Dutch Tutor</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
            Passionate about helping students master Dutch through personalized,
            effective teaching methods.
          </p>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-1">
            {/* Left Column - Photo */}
            <div className="flex flex-col items-center justify-center lg:items-start">
              {/* Teacher Photo */}
              <div className="relative mb-8">
                <div className="h-80 w-80 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-200 to-purple-200 shadow-2xl">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="text-center">
                      <Image
                        src={hero}
                        height="1000"
                        width="1000"
                        quality={100}
                        alt="Irmarie"
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-orange-400 opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-blue-400 opacity-30"></div>
              </div>
            </div>

            {/* Right Column - About Text */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="mb-6 text-2xl font-bold text-gray-800">
                  Hallo! I&apos;m Irmarie 👋
                </h3>

                <div className="space-y-5 leading-relaxed text-gray-700">
                  <p>
                    Born in Pretoria (South Africa) and raised in Amersfoort
                    (The Netherlands). I&apos;ve been passionate about languages
                    and different cultures my entire life. I speak English,
                    Dutch and Afrikaans fluently. I am currently learning
                    Spanish and Zulu.
                  </p>

                  <p>
                    For almost 5 years, I&apos;ve had the privilege of teaching
                    Dutch to students from around the world. What started as
                    part-time online tutoring has grown into a thriving practice
                    where I&apos;ve helped many learners achieve their Dutch
                    language goals.
                  </p>

                  <p>
                    My specialty? Working with Afrikaans speakers who want to
                    master Dutch. When growing up in The Netherlands, my parents
                    continued speaking Afrikaans at home. This means that I
                    never lost touch with the language. Now I understand the
                    unique challenges and incredible advantages that Afrikaans
                    speakers have when learning Dutch. This experience has
                    shaped my teaching approach to be both efficient and
                    culturally sensitive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Philosophy */}
        <Philosophy />
      </div>
    </section>
  );
}
