import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
            Privacy Policy
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
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Introduction
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                At Dutch Your Way, we respect your privacy and are committed to
                protecting your personal data. This privacy policy explains how
                we collect, use, and safeguard your information when you visit
                our website and use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Information We Collect
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Personal Information
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                We may collect the following personal information when you:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
                <li>Contact us through our contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Create an account for lessons</li>
                <li>Purchase our courses or materials</li>
              </ul>

              <p className="mb-4 leading-relaxed text-gray-700">
                This information may include your name, email address, phone
                number, and any messages you send us.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Usage Information
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                We automatically collect certain information about your device
                and how you interact with our website, including:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Device information and screen resolution</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                We use the information we collect to:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
                <li>Provide and improve our educational services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>
                  Send you newsletters and educational content (with your
                  consent)
                </li>
                <li>Analyze website usage to improve user experience</li>
                <li>Process payments for courses and materials</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Information Sharing
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  With trusted service providers who help us operate our website
                  and services
                </li>
                <li>
                  When required by law or to protect our rights and safety
                </li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Data Security
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet is 100%
                secure.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Cookies and Tracking
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Our website uses cookies and similar tracking technologies to
                enhance your browsing experience, analyze site traffic, and
                understand where our visitors are coming from. You can control
                cookie settings through your browser preferences.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Your Rights
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            {/* Third-Party Links */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Third-Party Links
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Our website may contain links to third-party websites, including
                our Udemy course. We are not responsible for the privacy
                practices of these external sites. We encourage you to review
                their privacy policies before providing any personal
                information.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Children&apos;s Privacy
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Our services are not directed to children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Changes to This Policy
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the &quot;Last updated&quot; date. We encourage you
                to review this policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Contact Us
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                If you have any questions about this privacy policy or our data
                practices, please contact us:
              </p>
              <div className="mt-4 rounded-lg bg-gray-50 p-6">
                <p className="mb-2 text-gray-700">
                  <strong>Email:</strong> irmarie@nederlandsvoorafrikaans.nl
                </p>
                <p className="text-gray-700">
                  <strong>Response Time:</strong> We aim to respond to all
                  privacy inquiries within 30 days.
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
