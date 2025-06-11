import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Content */}
        <div className="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <p className="mb-6 leading-relaxed text-gray-700">
                Please read these terms and conditions carefully before using
                our services. By accessing and using Dutch Language Learning
                services, you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>

              <div className="mb-6 border-l-4 border-blue-500 bg-blue-50 p-4">
                <p className="font-medium text-blue-800">
                  <strong>Important:</strong> For refund and privacy policies
                  related to external courses (such as our Udemy course), please
                  refer to their respective platform policies.
                </p>
              </div>
            </section>

            {/* Materials */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                1. Materials and Intellectual Property
              </h2>
              <div className="rounded-lg bg-gray-50 p-6">
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Do not share the lesson material with anyone else</li>
                  <li>
                    <strong>
                      Do not make screenshots, download, or duplicate
                    </strong>{" "}
                    the lesson material in any way
                  </li>
                  <li>
                    All course materials remain the intellectual property of
                    Dutch Your Way
                  </li>
                  <li>
                    Materials are for personal use only and may not be
                    redistributed
                  </li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Payment Terms
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Full Payment
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                Payment must be completed in full before the first lesson
                begins.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Payment Plan Option
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                A two-installment payment plan can be arranged upon request.
                Please contact us via our contact form or email to discuss this
                option.
              </p>

              <div className="mb-6 border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="text-yellow-800">
                  <strong>Note:</strong> Payments can be made to my Dutch or
                  South African bank account after you&apos;ve received an
                  invoice from me.
                </p>
              </div>
            </section>

            {/* Lesson Packages */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. Lesson Packages
              </h2>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  You will manage your own lessons through the online booking
                  calendar
                </li>
                <li>
                  Your email address will be used to create your student account
                </li>
                <li>
                  <strong>10-lesson packages</strong> are valid for 4 months
                  from purchase date
                </li>
                <li>
                  <strong>20-lesson packages</strong> are valid for 8 months
                  from purchase date
                </li>
                <li>
                  <strong>Important:</strong> If lesson credits are not used
                  within the specified timeframe, the remaining lessons will be
                  forfeited without refund
                </li>
              </ul>
            </section>

            {/* No-Show Policy */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. No-Show Policy
              </h2>
              <div className="border-l-4 border-red-500 bg-red-50 p-4">
                <p className="leading-relaxed text-red-800">
                  If you are late for your scheduled lesson, the teacher will
                  wait for a maximum of
                  <strong> 15 minutes</strong>. After this time, the lesson will
                  be considered canceled and marked as a no-show{" "}
                  <strong>without refund</strong>. The lesson credit will be
                  deducted from your package.
                </p>
              </div>
            </section>

            {/* Rescheduling Policy */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. Rescheduling Policy
              </h2>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  Rescheduling is possible if requested{" "}
                  <strong>at least 24 hours in advance</strong>
                </li>
                <li>
                  Rescheduling requests made less than 24 hours before the
                  lesson will be treated as a cancellation
                </li>
                <li>
                  You can reschedule your lessons through the online calendar
                  system provided
                </li>
                <li>
                  There is no limit to the number of times you can reschedule,
                  as long as the 24-hour notice is given
                </li>
              </ul>
            </section>

            {/* Cancellation Policy */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. Cancellation and Refund Policy
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Private Lesson Packages
              </h3>
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <h4 className="mb-2 font-semibold text-green-800">
                    100% Full Refund
                  </h4>
                  <p className="text-sm text-green-700">
                    Cancellations made more than 24 hours before the start of
                    the first lesson
                  </p>
                </div>
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <h4 className="mb-2 font-semibold text-red-800">No Refund</h4>
                  <p className="text-sm text-red-700">
                    Cancellations made less than 24 hours before the start of
                    the first lesson
                  </p>
                </div>
              </div>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Group Lessons
              </h3>
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <h4 className="mb-2 font-semibold text-green-800">
                    100% Refund
                  </h4>
                  <p className="text-sm text-green-700">
                    Canceled within 24 hours of booking AND at least 1 week
                    before course starts
                  </p>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <h4 className="mb-2 font-semibold text-blue-800">
                    50% Refund
                  </h4>
                  <p className="text-sm text-blue-700">
                    Canceled 1 week or more before the course starts
                  </p>
                </div>
                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                  <h4 className="mb-2 font-semibold text-yellow-800">
                    30% Refund
                  </h4>
                  <p className="text-sm text-yellow-700">
                    Canceled 3–6 days before the course starts
                  </p>
                </div>
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <h4 className="mb-2 font-semibold text-red-800">No Refund</h4>
                  <p className="text-sm text-red-700">
                    Canceled less than 3 days before the course starts
                  </p>
                </div>
              </div>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Online Courses
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                For online courses hosted on external platforms (such as Udemy),
                please refer to the respective platform's refund policy. Links
                to specific refund policies can be found on the course pages.
              </p>
            </section>

            {/* Technical Requirements */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. Technical Requirements
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                For online lessons, you are responsible for ensuring:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
                <li>Stable internet connection</li>
                <li>Working camera and microphone</li>
                <li>Quiet learning environment</li>
                <li>Compatible device (computer, tablet, or smartphone)</li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                Technical issues on the student's end that prevent lesson
                attendance will be handled on a case-by-case basis.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. Limitation of Liability
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Dutch Your Way provides educational services to the best of our
                ability. However, we cannot guarantee specific learning
                outcomes, as language acquisition depends on many factors
                including student effort, practice, and individual aptitude.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                9. Changes to Terms
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                We reserve the right to modify these terms and conditions at any
                time. Changes will be posted on this page with an updated
                revision date. Continued use of our services after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Contact Us
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                If you have any questions about these Terms and Conditions, you
                can contact us:
              </p>
              <div className="rounded-lg bg-gray-50 p-6">
                <p className="mb-2 text-gray-700">
                  <strong>Email:</strong> irmarie@nederlandsvoorafrikaans.nl
                </p>
                <p className="mb-2 text-gray-700">
                  <strong>Contact Form:</strong> Use our website contact form
                  for detailed inquiries
                </p>
                <p className="text-gray-700">
                  <strong>Response Time:</strong> We aim to respond to all
                  inquiries within 48 hours
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
