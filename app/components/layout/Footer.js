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
      // Navigate to home page with the section hash
      router.push(`/${href}`);
    }
  };

  // Custom component for section navigation
  const SectionLink = ({ href, children, className, onClick }) => {
    const handleClick = (e) => {
      if (pathname !== "/") {
        e.preventDefault(); // Prevent default when navigating from other pages
        handleSectionNavigation(href);
      }
      // If we're on the home page, let SmoothScrollLink handle it normally
      if (onClick) onClick();
    };

    // If we're not on the home page, use a regular Link to navigate with hash
    if (pathname !== "/") {
      return (
        <Link href={`/${href}`} className={className} onClick={handleClick}>
          {children}
        </Link>
      );
    }

    // If we're on the home page, use SmoothScrollLink for smooth scrolling
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
        isSection: true,
      },
      { label: "About", href: "#about", isSection: true },
      {
        label: "Contact",
        href: "#contact",
        isSection: true,
      },
    ],
  };

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
              style. From beginner basics to fluent conversations, I&apos;ll
              help you achieve your goals.
            </p>
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
