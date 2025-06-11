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
  MessageSquareHeart,
  MessageCircle,
  FileText,
  Euro,
} from "lucide-react";

export default function Intermediate() {
  const modules = [
    {
      week: "Weeks 1-3",
      title: "Advanced Grammar & Structures",
      topics: [
        "Complex verb conjugations",
        "Indirect speech",
        "Opinion expression",
        "Compound sentences",
      ],
      icon: FileText,
    },
    {
      week: "Weeks 4-6",
      title: "Conversational Fluency",
      topics: [
        "Natural conversation flow",
        "Idioms & expressions",
        "Debate & discussion",
        "Advanced prepositions",
      ],
      icon: MessageCircle,
    },
    {
      week: "Weeks 7-10",
      title: "Cultural Integration",
      topics: [
        "Dutch culture & customs",
        "Social etiquette",
        "Grammar practice tailored to your needs",
      ],
      icon: Users,
    },
    {
      week: "Weeks 11-16",
      title: "Lots of conversation",
      topics: [
        "Since this course aims to be flexible, there will be lots of space to practice",
      ],
      icon: BookOpen,
    },
  ];

  const skills = [
    "Engage in detailed conversations on complex topics",
    "Express opinions clearly with supporting arguments",
    "Understand main ideas in complex texts",
    "Write clear, detailed texts on various subjects",
    "Handle most social situations",
    "Communicate with native speakers naturally and fluently",
  ];

  const features = [
    {
      icon: MessageCircle,
      text: "Advanced conversation practice",
      color: "text-red-600",
    },
    {
      icon: MessageSquareHeart,
      text: "WhatsApp support",
      color: "text-orange-600",
    },
    { icon: Target, text: "Real-world scenarios", color: "text-pink-600" },
    {
      icon: BookOpen,
      text: "Free book",
      color: "text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-rose-700 pt-20 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-red-500/20 px-4 py-2 text-sm font-medium">
              <Star className="mr-2 h-4 w-4" />
              B1-B2 Level • Perfect for Students who are already able to have
              basic conversations
            </div>
            <h1 className="mb-12 text-5xl font-bold md:text-6xl">
              Intermediate / Conversational
            </h1>
            <p className="mb-8 text-xl leading-relaxed opacity-90">
              Take your Dutch to the next level with advanced conversations,
              cultural insights, and communication skills for real-world
              fluency.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                10-16 weeks
              </div>
              <div className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Advanced conversations
              </div>
              <div className="flex items-center">
                <Target className="mr-2 h-5 w-5" />
                B1-B2 Level
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
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-6xl">
          {/* What You'll Learn */}
          <div className="mb-24">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              What You&apos;ll <span className="text-red-600">Master*</span>
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

          {/* Course Features */}
          <section className="mb-24">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Course <span className="text-red-600">Features</span>
            </h2>
            <div className="mb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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

          {/* Learning Path */}
          <section className="mb-24">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Your Learning <span className="text-red-600">Journey</span>
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
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                        <IconComponent className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-red-600">
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
                          <div className="mr-3 h-2 w-2 rounded-full bg-red-400"></div>
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
      </div>
    </div>
  );
}
