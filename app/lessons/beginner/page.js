import Header from "@/app/components/layout/Header";
import Philosophy from "@/app/components/reusable/Philosophy";
import ContactSection from "@/app/components/sections/ContactSection";
import { Info } from "lucide-react";

import {
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  Star,
  Target,
  Volume2,
  MessageSquareHeart,
  FileText,
  Euro,
} from "lucide-react";

export default function Beginner() {
  const modules = [
    {
      week: "Weeks 1-2",
      title: "Dutch Basics & Pronunciation",
      topics: [
        "Dutch alphabet & sounds",
        "Introducing yourself",
        "Personal pronouns",
        "Present tense verbs",
      ],
      icon: Volume2,
    },
    {
      week: "Weeks 3-4",
      title: "Essential Vocabulary",
      topics: [
        "Family & relationships",
        "Giving your opinion",
        "Making appointments",
        "Ordering in a restaurant",
        "Lots of conversation practice",
      ],
      icon: BookOpen,
    },
    {
      week: "Weeks 5-6",
      title: "Grammar Foundations",
      topics: [
        "Irregular present tense verbs",
        "Articles (de/het)",
        "Object pronouns",
        "Comparisons",
        "Lots of conversation practice",
      ],
      icon: FileText,
    },
    {
      week: "Weeks 7-8",
      title: "Practical Conversations",
      topics: [
        "Past tense verbs",
        "Future tense verbs",
        "Introduction to separable verbs",
        "Introduction to 'er'",
        "Lots of conversation practice",
      ],
      icon: Users,
    },
  ];

  const skills = [
    "Understand and use familiar everyday expressions",
    "Introduce yourself and others confidently",
    "Ask and answer simple personal questions",
    "Interact in basic conversations about familiar topics",
    "Read simple texts and signs",
    "Write short, simple messages and notes",
  ];

  const features = [
    {
      icon: CheckCircle,
      text: "Essential Dutch vocabulary",
      color: "text-green-600",
    },
    {
      icon: MessageSquareHeart,
      text: "WhatsApp support",
      color: "text-blue-600",
    },
    {
      icon: Target,
      text: "Interactive exercises & quizzes",
      color: "text-purple-600",
    },
    {
      icon: BookOpen,
      text: "Free books",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section - Added pt-20 to account for fixed header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 pt-20 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium">
              <Star className="mr-2 h-4 w-4" />
              A1-A2 Level • Perfect for Complete Beginners
            </div>
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              Beginner Dutch Lessons
            </h1>
            <p className="mb-8 text-xl leading-relaxed opacity-90">
              Start your Dutch journey with confidence. Master the fundamentals
              through structured lessons, interactive exercises, and
              personalized guidance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                8-12 weeks
              </div>
              <div className="flex items-center">
                <Target className="mr-2 h-5 w-5" />
                A1-A2 Level
              </div>
              <div className="flex items-center">
                <Euro className="mr-2 h-5 w-5" />
                27 per hour
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-6xl">
          {/* What You'll Learn  */}
          <div className="mb-24">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              What You&apos;ll <span className="text-blue-600">Achieve*</span>
            </h2>
            <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start rounded-lg bg-white p-6 shadow-md"
                >
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-600" />
                  <p className="text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
            <Philosophy />
            <div className="mx-auto mt-6 w-full max-w-xl">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full rounded-lg border-0 shadow-lg"
                  src="https://www.youtube.com/embed/3vrNtU8feek"
                  title="Comprehensible Input Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Course Features - Increased bottom margin */}
          <section className="mb-24">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Course <span className="text-blue-600">Features</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <p className="font-medium text-gray-800">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Learning Path - Increased bottom margin */}
          <section className="mb-24">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Your Learning <span className="text-blue-600">Journey</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {modules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <div
                    key={index}
                    className="rounded-xl bg-white p-8 shadow-lg"
                  >
                    <div className="mb-4 flex items-center">
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-600">
                          {module.week}
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-center text-gray-600"
                        >
                          <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Call to Action */}
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
