"use client";

import React from "react";
import { Download, FileText, Book } from "lucide-react";
import CtaAfrikaans from "@/app/components/reusable/CtaAfrikaans";

const DownloadsPage = () => {
  const chapters = [
    {
      number: 1,
      chapter: "Hoofstuk 1",
      title: "Emma",
      link: "https://drive.google.com/file/d/1RsLgcF5GT-WwrB6_xbLAhaVSRllZ9Gkd/view?usp=drive_link",
    },
    {
      number: 2,
      chapter: "Hoofstuk 2",
      title: "Een idee",
      link: "https://drive.google.com/file/d/1NHd9PWcczRNHicMtlZoVLoINAih601Ja/view?usp=drive_links",
    },
    {
      number: 3,
      chapter: "Hoofstuk 3",
      title: "Alberto",
      link: "https://drive.google.com/file/d/1gi9e7nTwMc2T54yGV_uNUkOmnI2uH1ET/view?usp=drive_link",
    },
    {
      number: 4,
      chapter: "Hoofstuk 4",
      title: "2 jaar later",
      link: "https://drive.google.com/file/d/1KvjqmwbD28n0V1UslGqZGNNQn9vGI8bx/view?usp=drive_link",
    },
    {
      number: 5,
      chapter: "Hoofstuk 5",
      title: "De reis gaat bijna beginnen",
      link: "https://drive.google.com/file/d/1PBx6CbFMPvx_PAGaKCWkA5FrXJBDK5Iw/view?usp=drive_link",
    },
    {
      number: 6,
      chapter: "Hoofstuk 6",
      title: "Afscheidsfeestje",
      link: "https://drive.google.com/file/d/1y8rgjp5wneVlNNhzuXvIB1SV9DFZrOO5/view?usp=drive_link",
    },
    {
      number: 7,
      chapter: "Hoofstuk 7",
      title: "De reis begint",
      link: "https://drive.google.com/file/d/1EM-_CLq0Mj8UNjsTX3bACKY7dX98Gk9O/view?usp=drive_link",
    },
    {
      number: 8,
      chapter: "Hoofstuk 8",
      title: "Amsterdam, dag 1",
      link: "https://drive.google.com/file/d/1EK9UGXo5K1M0U18f5lHU6XV6dxK_6e3a/view?usp=drive_link",
    },
    {
      number: 9,
      chapter: "Hoofstuk 9",
      title: "Amsterdam verkennen",
      link: "https://drive.google.com/file/d/1QFZiSZbadehvVPP8OW0N6imF-W3mJnit/view?usp=drive_link",
    },
    {
      number: 10,
      chapter: "Hoofstuk 10",
      title: "Verdwaald in Utrecht",
      link: "https://drive.google.com/file/d/1HwpwSNJHJXgIMpCODjc0cOFwjH5TYrdo/view?usp=drive_link",
    },
    {
      number: 11,
      chapter: "Hoofstuk 11",
      title: "#hostelleven",
      link: "https://drive.google.com/file/d/1zrMxaWOINF48TRLQwwxtGt_7sN61OqDG/view?usp=drive_link",
    },
    {
      number: 12,
      chapter: "Hoofstuk 12",
      title: "De trein naar Maastricht",
      link: "https://drive.google.com/file/d/1W081ODXQWg8zFtsrJfCZfEopVKbJr1YO/view?usp=drive_link",
    },
    {
      number: 13,
      chapter: "Hoofstuk 13",
      title: "Maastricht en omgeving",
      link: "https://drive.google.com/file/d/1TfPW1DJf5km3r3wq5LWvCbuo2XFT66Sa/view?usp=drive_link",
    },
    {
      number: 14,
      chapter: "Hoofstuk 14",
      title: "Alles loopt in de soep",
      link: "https://drive.google.com/file/d/1x0C-fQDeZl3G84-ihbNXQlrMG_FI-bAo/view?usp=drive_link",
    },
    {
      number: 15,
      chapter: "Hoofstuk 15",
      title: "Thuis",
      link: "https://drive.google.com/file/d/13l34fJi-yskU0pOpI8clu02YmdM-lZg2/view?usp=drive_link",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <main className="mx-auto max-w-7xl px-4 py-60 sm:px-6 lg:px-8">
        <div className="mt-4 mb-24 grid gap-8 md:grid-cols-3">
          {/* icons */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <Book className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-900">
              Nederlands voor
              <br /> Afrikaans-sprekenden
            </h4>
            <p className="text-gray-600">
              Koop die boek{" "}
              <a
                href="https://www.amazon.nl/dp/B0CSN63MC4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 underline hover:text-purple-800"
              >
                hier
              </a>{" "}
              as jy nog nie het nie
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <FileText className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-900">
              15 Hoofstukke
            </h4>
            <p className="text-gray-600">
              Volledige kursusmateriaal vir Nederlands vir Afrikaanssprekendes
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Download className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-900">
              Gratis Aflaai
            </h4>
            <p className="text-gray-600">
              Alle{" "}
              <a
                href="https://drive.google.com/drive/folders/1L4AHfwpZ31tXvdxm3rFzrx9mE6rU5oZG?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                dokumente
              </a>{" "}
              is beskikbaar vir gratis aflaai
            </p>
          </div>
        </div>

        <div className="mb-24 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Oudiofragmente
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Luister hier na die oudio van die werkboek Nederlands voor
            Afrikaans-sprekenden
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="mb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {chapters.map((chapter) => (
            <div key={chapter.number} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {chapter.chapter}
                      </h3>
                      <p className="text-sm text-gray-600">{chapter.title}</p>
                    </div>
                    <button
                      onClick={() => window.open(chapter.link, "_blank")}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CtaAfrikaans />
      </main>
    </div>
  );
};

export default DownloadsPage;
