"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSubmitted(true);
  //     // Reset form after 3 seconds
  //     setTimeout(() => {
  //       setIsSubmitted(false);
  //       setFormData({
  //         name: "",
  //         email: "",
  //         subject: "general",
  //         message: "",
  //       });
  //     }, 3000);
  //   }, 1000);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mkgbjyjr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `${subjectOptions.find((opt) => opt.value === formData.subject)?.label} - Contact Form`,
          message: formData.message,
          _replyto: formData.email, // This sets the reply-to address
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            subject: "general",
            message: "",
          });
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Failed to send message. Please try again or contact directly via email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      detail: "irmarie@dutch-your-way.com",
      description: "Send me an email anytime",
    },
    {
      icon: "📱",
      title: "WhatsApp",
      detail: "+31 6 82016599",
      description: "Quick questions",
    },
  ];

  const subjectOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "lessons", label: "Book a Lesson" },
    { value: "afrikaans", label: "Dutch for Afrikaans Speakers" },
    { value: "materials", label: "Learning Materials" },
    { value: "other", label: "Other" },
  ];

  if (isSubmitted) {
    return (
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center">
              <div className="rounded-full bg-green-100 p-6 shadow-lg">
                <span className="text-4xl">✅</span>
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Bedankt! Message Sent Successfully
            </h2>
            <p className="text-xl text-gray-600">
              I&apos;ll get back to you within 24 hours. Looking forward to
              helping you with your Dutch journey!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center">
            <div className="rounded-full bg-white p-4 shadow-lg">
              <span className="text-3xl">💬</span>
            </div>
          </div>

          <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Let&apos;s <span className="text-blue-600">Start Learning</span>{" "}
            Together
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Ready to begin your Dutch journey? Have questions about lessons or
            materials? I&apos;m here to help! Send me a message and let&apos;s
            discuss your goals.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Contact Methods */}
            <div>
              <h3 className="mb-8 text-2xl font-bold text-gray-800">
                Get in Touch
              </h3>

              <div className="mb-8 space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-start rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  >
                    <div className="mr-4 rounded-full bg-blue-100 p-3">
                      <span className="text-2xl">{method.icon}</span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-gray-800">
                        {method.title}
                      </h4>
                      <p className="mb-1 font-medium text-blue-600">
                        {method.detail}
                      </p>
                      <p className="text-sm text-gray-600">
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <h3 className="mb-6 text-2xl font-bold text-gray-800">
                  Send a Message
                </h3>

                <form
                  action="https://formspree.io/f/mkgbjyjr"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input
                    type="hidden"
                    name="_to"
                    value="irmarie@dutch-your-way.com"
                  />
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border-2 border-gray-200 p-3 transition-colors duration-300 focus:border-blue-500 focus:outline-none"
                      placeholder="What should I call you?"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border-2 border-gray-200 p-3 transition-colors duration-300 focus:border-blue-500 focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      What&apos;s this about?
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-gray-200 p-3 transition-colors duration-300 focus:border-blue-500 focus:outline-none"
                    >
                      {subjectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full resize-none rounded-lg border-2 border-gray-200 p-3 transition-colors duration-300 focus:border-blue-500 focus:outline-none"
                      placeholder="Tell me about your Dutch learning goals, current level, or any questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full transform rounded-full bg-blue-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="mr-2 h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message 📨"
                    )}
                  </button>
                </form>

                {/* Privacy Note */}
                <p className="mt-4 text-xs text-gray-500">
                  Your information is safe with me. I&apos;ll only use it to
                  respond to your message.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="mx-auto mt-16 max-w-4xl rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white md:p-12">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold">
              🚀 Ready to Start Your Dutch Adventure?
            </h3>
            <p className="mb-6 text-lg opacity-90">
              Join hundreds of successful students who&apos;ve transformed their
              Dutch skills. Your journey to fluency starts with a single
              message!
            </p>
            <div className="flex justify-center">
              <div className="rounded-full bg-white p-3 shadow-lg">
                <span className="text-2xl">🇳🇱</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
