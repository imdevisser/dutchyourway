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
      text: "Irmarie is an amazing teacher, making complex language rules easy to understand and fun to learn! She is extremely helpful, never making you feel silly for struggling. I would recommend her services to anyone who wants to learn Dutch!",
      name: "Annie Mare",
      course: "Group classes",
    },

    {
      id: 2,
      rating: 5,
      text: "Irmarie is an excellent lecturer and we really enjoyed her classes. Her study material is aimed at Afrikaners and it helps a lot to learn and start speaking Dutch. I would recommend her to anyone. (translated from Afrikaans)",
      name: "Cobus Smit",
      course: "Group classes",
    },
    {
      id: 3,
      rating: 5,
      text: "Irmarie is very helpful and friendly and has a lot of knowledge about the Netherlands itself as well as the language. As a teacher she also likes to share everything she knows and also offers a lot of help as well as resources. I am very impressed with her book which is available on Amazon and would recommend everyone to buy one – I am very glad I did. She puts a lot of effort into her Dutch learners to make it as enjoyable and educational as possible for you in every lesson. (translated from Afrikaans)",
      name: "Deidre Stal",
      course: "Group classes",
    },
    {
      id: 4,
      rating: 5,
      text: "I had a fantastic experience with Irmarie's Dutch course! As a native Afrikaans speaker, I found it particularly helpful to learn Dutch from someone who is fluent in both Dutch and Afrikaans. Irmarie was able to identify the shortcuts that Afrikaans speakers can take while also understanding the areas where Afrikaans speakers may struggle with Dutch. However, I would also strongly recommend her classes to non-Afrikaans speakers because Irmarie is extremely knowledgeable, very patient and just a really nice person to engage with during classes. Now that I have completed the course, I will greatly miss my weekly one-hour session with Irmarie. Thanks to her classes, I now have a better understanding of Dutch grammar and feel more confident using Dutch in my daily conversations. Overall, I highly recommend Irmarie's Dutch course to anyone looking to improve their Dutch language skills.",
      name: "Maryna Lamprecht",
      course: "Private lessons",
    },
    {
      id: 5,
      rating: 5,
      text: "I highly recommend Irmarie! She is a very calm and patient teacher and makes sure that everyone feels very comfortable during the lessons. She also keeps the groups small which makes the interaction less stressful. The lessons are fun, but you do learn and it is taken seriously. (translated from Dutch)",
      name: "Quintus van Dyk",
      course: "Group classes",
    },
    {
      id: 6,
      rating: 5,
      text: "Irmarie's classes were an excellent way to start learning Dutch. The classes were not only informative, but also interesting, as she told me more about the culture, eating habits and music of the country, among other things. The classes were a combination of theory and language exercises, with enough time to also practice pronunciation in reading and speaking exercises. The lessons were well complemented by her textbook, extra material on her website, as well as additional exercises and videos that she made available weekly. I really enjoyed the course and would highly recommend it to any Afrikaans speaker who wants to start learning Dutch. (translated from Afrikaans)",
      name: "Rika Butler",
      course: "Group classes",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
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
          centeredSlides={true}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="flex items-center justify-center min-h-[500px]"
            >
              <div className="w-full max-w-3xl mx-auto flex items-center justify-center">
                <div className="rounded-2xl bg-white p-8 md:p-12 shadow-lg text-center max-h-[450px] overflow-y-auto">
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl">
                      {"⭐".repeat(testimonial.rating)}
                    </span>
                  </div>
                  <blockquote className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700 italic">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div>
                      <p className="font-semibold text-gray-800 text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
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
