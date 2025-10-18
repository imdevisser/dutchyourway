"use client";

import { useEffect } from "react";
import LessonCard from "../reusable/LessonCard";

export default function LessonsSection() {
  const lessons = [
    {
      id: "beginner",
      title: "Beginner Lessons",
      description:
        "Start your Dutch journey with fundamentals. Learn basic vocabulary, pronunciation, and essential grammar to build a strong foundation.",
      features: [
        "Basic vocabulary",
        "Pronunciation guide",
        "Essential grammar",
        "Interactive exercises",
      ],
      duration: "10-15 weeks",
      level: "A0-A2",
      // price: "€27",
      color: "blue",
      icon: "seedling",
    },
    {
      id: "intermediate",
      title: "Intermediate / Conversational",
      description:
        "Expand your Dutch skills with complex conversations, advanced grammar, and cultural context for real-world communication.",
      features: [
        "Complex conversations",
        "Advanced grammar",
        "Cultural context",
        "Free material",
      ],
      duration: "10-15 weeks",
      level: "B1-B2",
      // price: "€27",
      color: "red",
      icon: "trending-up",
    },
  ];

  // useEffect(() => {
  //   // Load SuperSaaS widget script
  //   const script1 = document.createElement("script");
  //   script1.src = "https://cdn.supersaas.net/widget.js";
  //   script1.async = true;
  //   document.head.appendChild(script1);

  //   script1.onload = () => {
  //     // Wait a bit for DOM to be ready, then initialize widget
  //     setTimeout(() => {
  //       if (window.SuperSaaS) {
  //         try {
  //           // Initialize SuperSaaS widget
  //           new window.SuperSaaS("564645:NvA", "751119:priveles", {
  //             widget_type: "frame",
  //             view: "week",
  //           });
  //         } catch (error) {
  //           console.error("SuperSaaS widget initialization failed:", error);
  //         }
  //       }
  //     }, 100);
  //   };

  //   // Cleanup function
  //   return () => {
  //     // Remove scripts when component unmounts
  //     const scripts = document.querySelectorAll(
  //       'script[src="https://cdn.supersaas.net/widget.js"], script.supersaas-widget',
  //     );
  //     scripts.forEach((script) => script.remove());

  //     // Clear any SuperSaaS containers
  //     const containers = document.querySelectorAll('[id^="supersaas"]');
  //     containers.forEach((container) => container.remove());
  //   };
  // }, []);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Online <span className="text-blue-600">1-on-1</span> lessons
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Whether you&apos;re just starting out or looking to perfect your
            Dutch, I am here to help you! <br /> I am flexible to match your
            level and goals.
          </p>
        </div>

        {/* Lesson Cards Grid */}
        <div className="mx-auto mb-4 grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-2">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>

        {/* Booking Section */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-lg">
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-3xl font-bold text-gray-800">
                Check My Availability
              </h3>

              <div className="mb-6 rounded-lg border-2 border-red-500 bg-red-50 p-4">
                <p className="text-lg font-bold text-red-700">
                  ⚠️ Limited Time: I will only be available for lessons until
                  January 31st, 2026
                </p>
                <p className="mt-2 text-sm text-red-600">
                  Secure your spot now before it&apos;s too late!
                </p>
              </div>

              <p className="mb-4 leading-relaxed text-gray-600">
                View my available time slots below and reach out to schedule
                your first lesson.
              </p>
              <div>
                <a
                  href="https://www.supersaas.com/schedule/Your_Dutch_lesson/private?m=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-7 py-2.5 font-sans text-lg font-bold text-white no-underline"
                >
                  See my availability
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
