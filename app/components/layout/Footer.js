"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import SmoothScrollLink from "../ui/SmoothScrollLink";
import Logo from "../reusable/Logo";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  // Handle navigation to main page sections from other pages
  const handleSectionNavigation = (href) => {
    if (pathname !== "/") {
      router.push(`/${href}`);
    }
  };

  // Custom component for section navigation
  const SectionLink = ({ href, children, className, onClick, route }) => {
    const handleClick = (e) => {
      if (pathname !== "/") {
        e.preventDefault();
        handleSectionNavigation(href, route);
      }
      if (onClick) onClick();
    };

    return (
      <SmoothScrollLink href={href} className={className} onClick={handleClick}>
        {children}
      </SmoothScrollLink>
    );
  };

  const footerLinks = {
    lessons: [
      { label: "Beginner Lessons", href: "/lessons/beginner" },
      { label: "Intermediate/Conversation", href: "/lessons/intermediate" },
    ],
    dutchForAfrikaans: [
      { label: "Downloads", href: "/dutch-for-afrikaans" },
      {
        label: "Aanlyn Video Kursus",
        href: "https://www.udemy.com/course/dutch-for-afrikaans-speakers",
        external: true,
      },
    ],
    quickLinks: [
      {
        label: "Free Resources",
        href: "#free-resources",
        route: "/free-resources",
        isSection: true,
      },
      { label: "About", href: "#about", route: "/about", isSection: true },
      {
        label: "Contact",
        href: "#contact",
        route: "/contact",
        isSection: true,
      },
    ],
  };

  // const socialLinks = [
  //   {
  //     name: "Facebook",
  //     href: "#",
  //     icon: (
  //       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Instagram",
  //     href: "#",
  //     icon: (
  //       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348z" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "YouTube",
  //     href: "#",
  //     icon: (
  //       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  //       </svg>
  //     ),
  //   },
  // ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="mb-6 leading-relaxed text-gray-300">
              Master Dutch with personalized lessons designed for your learning
              style. From beginner basics to advanced conversation, I&apos;ll
              help you achieve fluency.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-blue-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Lessons */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Lessons</h3>
            <ul className="space-y-4">
              {footerLinks.lessons.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="inline-block transform text-gray-300 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dutch for Afrikaans */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Dutch for Afrikaans
            </h3>
            <ul className="space-y-4">
              {footerLinks.dutchForAfrikaans.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transform text-gray-300 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="inline-block transform text-gray-300 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isSection ? (
                    <SectionLink
                      href={link.href}
                      className="inline-block transform text-gray-300 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </SectionLink>
                  ) : (
                    <Link
                      href={link.href}
                      className="inline-block transform text-gray-300 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-red-600/20 to-blue-600/20 p-8 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Ready to Start Your Dutch Journey?
            </h3>
            <p className="mb-6 text-gray-300">
              Get free resources, lesson updates, and exclusive content
              delivered to your inbox.
            </p>
            <div className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white placeholder-gray-300 backdrop-blur-sm focus:border-white/40 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
              />
              <button className="transform rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="text-center text-gray-400 sm:text-left">
              <p>&copy; 2025 Dutch Your Way. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/policy/privacy"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/policy/terms-and-conditions"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                Terms of Service
              </Link>
              <SectionLink
                href="#contact"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                Contact
              </SectionLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
