"use client";

import { useState } from "react";
import { X, Play, Book, Headphones, Music, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const resources = [
  //LEARNING PATH
  {
    key: "learning-path",
    title: "Create Your Own Learning Path",
    image: "/learning-path.jpg",
    content: (
      <div className="space-y-4">
        <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
          <Image
            src="/learning-path.jpg"
            alt="Custom learning path"
            width={600}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-gray-700">
          Tips and tools to build your custom path.
        </p>
        <div className="rounded-lg bg-blue-50 p-4">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span>Make your own study planner with my tips!</span>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 p-1">
          <a
            href="https://drive.google.com/file/d/182cBmx9z8up2qBuoA6RTwvBRVRgKFlP7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            7 keys to success
          </a>
          <a
            href="https://www.notion.so/Beginner-Dutch-20808561c019801aac36c54197735618?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Create your own planner
          </a>
        </div>
      </div>
    ),
  },
  //AFRIKAANS
  {
    key: "afrikaans",
    title: "Downloads Nederlands voor Afrikaans-sprekenden",
    image: "/book.png",
    content: (
      <div className="space-y-4">
        <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
          <Image
            src="/book.png"
            alt="Dutch learning materials"
            width={600}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-gray-700">Laai jou dokumente hier gratis af!</p>
        <div className="rounded-lg bg-blue-50 p-4">
          <h4 className="mb-2 font-semibold text-blue-800">Key Resources:</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Book className="h-4 w-4 text-blue-600" />
              <span>Valse Vrienden dokument</span>
            </li>
            <li className="flex items-center gap-2">
              <Play className="h-4 w-4 text-blue-600" />
              <span>Oudiofragmente van al die hoofstukke</span>
            </li>
          </ul>
        </div>
        <Link
          href="/dutch-for-afrikaans"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Toegang tot materiaal
        </Link>
      </div>
    ),
  },
  //YOUTUBE
  {
    key: "youtube",
    title: "YouTube Channels",
    image: "/youtube-learning.jpg",
    content: (
      <div className="space-y-4">
        <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
          <Image
            src="/youtube-learning.jpg"
            alt="YouTube Dutch learning"
            width={600}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-gray-700">
          Learn Dutch through engaging video content from top creators.
        </p>
        <div className="grid gap-3">
          {[
            {
              name: "DutchPod101",
              level: "beginners/intermediate",
              link: "https://www.youtube.com/@DutchPod101",
            },
            {
              name: "Learn Dutch with Kim",
              level: "beginners/intermediate",
              link: "https://www.youtube.com/@learndutchwithkim",
            },
            {
              name: "Easy Dutch street interviews",
              level: "intermediate",
              link: "https://youtube.com/playlist?list=PL2WfhxZhUN9-ZOvfvSE0SkR6hoTKNYJNA&si=k6TiBZSAigRYbaua",
            },
          ].map((channel) => (
            <div
              key={channel.name}
              className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
            >
              <div>
                <h4 className="font-semibold text-gray-800">{channel.name}</h4>
                <p className="text-sm text-gray-600">{channel.level}</p>
              </div>
              <a href={channel.link} target="_blank" rel="noopener noreferrer">
                <Play className="h-5 w-5 text-red-600" />
              </a>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  //MUSIC
  {
    key: "music",
    title: "Music",
    image: "/dutch-music.jpg",
    content: (
      <div className="space-y-4">
        <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
          <Image
            src="/dutch-music.jpg"
            alt="Dutch music for learning"
            width={600}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-gray-700">
          Improve your Dutch through music and popular songs.
        </p>
        <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-4">
          <div className="mb-3 flex items-center gap-3">
            <Music className="h-6 w-6 text-purple-600" />
            <h4 className="font-semibold text-purple-800">Featured Playlist</h4>
          </div>
          <p className="mb-3 text-sm text-purple-700">
            Top Dutch songs for language learners
          </p>
          <div className="flex gap-2">
            <a
              href="https://open.spotify.com/playlist/4SPtjVFeXBrVod8kCK2CgB?si=aa74056b736046c7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-purple-600 px-3 py-1 text-sm text-white hover:bg-purple-700"
            >
              Spotify
            </a>
            <a
              href="https://leernederlandsmetmuziek.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
            >
              Practice verb tenses with music
            </a>
          </div>
        </div>
      </div>
    ),
  },
  //PODCAST
  {
    key: "podcasts",
    title: "Podcasts",
    image: "/dutch-podcasts.jpg",
    content: (
      <div className="space-y-4">
        <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
          <Image
            src="/dutch-podcasts.jpg"
            alt="Dutch podcasts for learning"
            width={600}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mb-3 flex items-center gap-2">
          <Headphones className="h-6 w-6 text-indigo-600" />
          <h4 className="text-lg font-semibold text-indigo-800">
            Top Dutch Podcasts
          </h4>
        </div>
        <div className="space-y-3">
          {[
            {
              title: "Slow Dutch with JeDutchy",
              level: "Beginner",
              duration: "15 min",
              link: "https://open.spotify.com/show/4fuf3NGQBbKa43ndc4LRCN?si=f772f72b77274598",
            },
            {
              title: "Going Dutch",
              level: "Intermediate",
              duration: "5 min",
              link: "https://open.spotify.com/show/1Vat8UsjK3Hea8tMF6tgJf?si=97a3c399073d40d4",
            },
            {
              title: "Een Beetje Nederlands",
              level: "Intermediate",
              duration: "15 min",
              link: "https://open.spotify.com/show/1oLBjGwX7TcLRuFI4Gyjbe?si=01537ebdd0234a76",
            },
            {
              title: "NRC Vandaag",
              level: "Advanced",
              duration: "20 min",
              link: "https://open.spotify.com/show/73vZPMVjxTqC02OYZdcCr7?si=3b0786b93f5a42aa",
            },
            {
              title: "Different podcasts",
              level: "intermediate to advanced",
              duration: "depends",
              link: "https://www.nporadio1.nl/podcasts",
            },
          ].map((podcast) => (
            <a
              key={podcast.title}
              href={podcast.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer rounded-lg border border-gray-200 p-3 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-md"
            >
              <h5 className="font-semibold text-gray-800 hover:text-indigo-700">
                {podcast.title}
              </h5>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Level: {podcast.level}
                </span>
                <span className="text-sm text-gray-500">
                  {podcast.duration}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    ),
  },
  //READING
  {
    key: "reading",
    title: "Reading",
    image: "/dutch-reading.jpg",
    content: (
      <div className="space-y-4">
        <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
          <Image
            src="/dutch-reading.jpg"
            alt="Dutch books and reading materials"
            width={600}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-gray-700">
          Dutch books, stories, and articles for learners.
        </p>

        {/* New reading resources with links */}
        <div className="rounded-lg bg-green-50 p-4">
          <h4 className="mb-2 font-semibold text-green-800">
            Reading Resources:
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Book className="h-4 w-4 text-green-600" />
              <span>Free Dutch e-books and stories</span>
            </li>
            <li className="flex items-center gap-2">
              <Book className="h-4 w-4 text-green-600" />
              <span>News articles for Dutch learners</span>
            </li>
          </ul>
        </div>

        {/* Links section */}
        <div className="flex flex-col gap-2">
          <a
            href="https://lingua.com/dutch/reading/"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-max rounded-lg bg-green-600 px-4 py-2 text-center text-white transition-colors hover:bg-green-700"
          >
            Free Dutch Stories
          </a>
          <a
            href="https://jeugdjournaal.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-max rounded-lg bg-purple-600 px-4 py-2 text-center text-white transition-colors hover:bg-purple-700"
          >
            Youth News (Beginner-friendly)
          </a>
          <a
            href="https://www.nrc.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-max rounded-lg bg-blue-600 px-4 py-2 text-center text-white transition-colors hover:bg-blue-700"
          >
            NRC News (Advanced)
          </a>
        </div>
      </div>
    ),
  },
];

export default function FreeResourcesSection() {
  const [activeResource, setActiveResource] = useState(null);

  const current = resources.find((r) => r.key === activeResource);

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-6 flex items-center justify-center">
            <div className="rounded-full bg-white p-4 shadow-lg">
              <span className="text-3xl">🎁</span>
            </div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            <span className="text-orange-600">Free Material</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Get started with our collection of free Dutch learning resources.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.key}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              onClick={() => setActiveResource(resource.key)}
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-800 transition-colors group-hover:text-blue-600">
                  {resource.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeResource && current && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-600/50 px-4">
          <div className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
            <button
              onClick={() => setActiveResource(null)}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="mb-4 pr-8 text-2xl font-bold text-blue-800">
              {current.title}
            </h3>
            <div>{current.content}</div>
          </div>
        </div>
      )}
    </section>
  );
}
