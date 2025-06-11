"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "I had a fantastic experience with Irmarie's Dutch course! As a native Afrikaans speaker, I found it particularly helpful to learn Dutch from someone who is fluent in both Dutch and Afrikaans. Irmarie was able to identify the shortcuts that Afrikaans speakers can take while also understanding the areas where Afrikaans speakers may struggle with Dutch. However, I would also strongly recommend her classes to non-Afrikaans speakers because Irmarie is extremely knowledgeable, very patient and just a really nice person to engage with during classes. Now that I have completed the course, I will greatly miss my weekly one-hour session with Irmarie. Thanks to her classes, I now have a better understanding of Dutch grammar and feel more confident using Dutch in my daily conversations. Overall, I highly recommend Irmarie's Dutch course to anyone looking to improve their Dutch language skills.",
      name: "Maryna Lamprecht",
      course: "Private lessons",
    },
    {
      id: 2,
      rating: 5,
      text: "Irmarie is 'n uitstekende dosent en ons het haar klasse baie geniet. Haar studiemateriaal is gemik op Afrikaners en dit help baie om Nederlands te leer en te begin praat. Ek sal haar aan enige iemand aanbeveel.",
      name: "Cobus Smit",
      course: "Group classes",
    },
    {
      id: 3,
      rating: 5,
      text: "Irmarie is baie behulpsaam en vriendelik en het baie kennis oor Nederland self sowel as die taal. As ‘n onderwyser deel ook graag als wat sy weet en bied ook baie hulp sowel as hulpbronne aan. Haar boek wat op Amazon te koop is, is ek baie beïndruk mee en sal elkeen aanbeveel om een te koop – ek is baie bly ek het. Sy doen baie moeite vir haar Nederlands leerders om dit vir jou so lekker en leersaam moontlik te maak in elke les.",
      name: "Deidre Stal",
      course: "Group classes",
    },
    {
      id: 4,
      rating: 5,
      text: "Irmarie is an amazing teacher, making complex language rules easy to understand and fun to learn! She is extremely helpful, never making you feel silly for struggling. I would recommend her services to anyone who wants to learn Dutch!",
      name: "Annie Mare",
      course: "Group classes",
    },
    {
      id: 5,
      rating: 5,
      text: "Ik raad Irmarie ten zeerste aan! Ze is een zeer rustige en geduldige docente en zorgt ervoor dat iedereen zich uitermate op zijn gemak voelt tijdens de lessen. Ze houdt de groepen ook klein wat de interactie minder stressvol maakt.De lessen zijn leuk, maar je leert wel en het wordt serieus genomen.",
      name: "Quintus van Dyk",
      course: "Group classes",
    },
    {
      id: 6,
      rating: 5,
      text: "Irmarie se klasse was 'n uitstekende manier om Nederlands te begin leer. Die klasse was nie alleen leersaam nie, maar ook interessant, aangesien sy meer vertel het oor onder andere die kultuur, eetgewoontes en musiek van die land. Die klasse was 'n kombinasie van teorie en taaloefeninge, met genoeg tyd om ook uitspraak in lees- en spreekoefeninge te oefen. Die lesse is goed aangevul deur haar handboek, ekstra materiaal op haar webtuiste, sowel as addisionele oefeninge en video's wat sy weekliks beskikbaar gestel het. Ek het die kursus baie geniet en sal dit sterk aanbeveel vir enige Afrikaanssprekende wat Nederlands wil begin leer. ",
      name: "Rika Butler",
      course: "Group classes",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="mx-auto max-w-2xl text-center">
                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <div className="mb-4">
                    <span className="text-5xl">
                      {"⭐".repeat(testimonial.rating)}
                    </span>
                  </div>
                  <blockquote className="mb-4 text-lg leading-relaxed text-gray-700 italic">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.course}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialSection;
