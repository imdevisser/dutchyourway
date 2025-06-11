"use client";

import SmoothScrollLink from "../ui/SmoothScrollLink";
import { useState, useEffect } from "react";
import Logo from "../reusable/Logo";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside (not needed for hover, but keeping for mobile)
  useEffect(() => {
    const handleClickOutside = () => {
      // Only close mobile dropdowns on click outside
      if (activeDropdown && activeDropdown.startsWith("mobile-")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeDropdown]);

  // Handle navigation to main page sections from other pages
  const handleSectionNavigation = (href, route) => {
    if (pathname === "/" && href.startsWith("#")) {
      // We're on homepage, scroll to section
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      // We're on another page, navigate to the route or homepage with hash
      if (route) {
        router.push(route);
      } else {
        router.push(`/${href}`); // This will go to homepage and scroll to section
      }
    }
  };

  const handleDropdownHover = (dropdownName) => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    // Add a delay before closing the dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay
    setHoverTimeout(timeout);
  };

  const handleDropdownClick = (dropdownName, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const navigationItems = [
    {
      href: "#lessons",
      label: "Lessons",
      hasDropdown: true,
      dropdownItems: [
        { label: "Beginner", href: "/lessons/beginner" },
        {
          label: "Intermediate/Conversation",
          href: "/lessons/intermediate",
        },
      ],
    },
    {
      href: "#dutch-for-afrikaans",
      label: "Dutch for Afrikaans",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Downloads",
          href: "/dutch-for-afrikaans",
        },
        {
          label: "Aanlyn video kursus",
          href: "https://www.udemy.com/course/dutch-for-afrikaans-speakers",
          external: true,
        },
      ],
    },
    { href: "#about", label: "About", route: "/about" },
    {
      href: "#free-resources",
      label: "Free Resources",
      route: "/free-resources",
    },
    { href: "#contact", label: "Contact", route: "/contact" },
  ];

  // Custom component for section navigation
  const SectionLink = ({ href, route, children, className, onClick }) => {
    const handleClick = (e) => {
      e.preventDefault(); // Always prevent default
      handleSectionNavigation(href, route);
      if (onClick) onClick();
    };

    return (
      <button onClick={handleClick} className={className}>
        {children}
      </button>
    );
  };

  const DropdownItem = ({ item, onClick }) => {
    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className="block px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        href={item.href}
        onClick={onClick}
        className="block px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 py-4 shadow-lg backdrop-blur-md"
          : "bg-white/90 py-6 shadow-md backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden items-center space-x-8 lg:flex">
            {navigationItems.map((item, index) => (
              <li key={index} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => handleDropdownHover(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <SectionLink
                      href={item.href}
                      route={item.route}
                      className="group relative flex cursor-pointer items-center border-none bg-transparent px-3 py-2 font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
                    >
                      {item.label}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-red-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </SectionLink>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 transform transition-all duration-200 ${
                        activeDropdown === item.label
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="rounded-lg bg-white py-2 shadow-xl ring-1 ring-gray-200">
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => (
                            <DropdownItem
                              key={dropdownIndex}
                              item={dropdownItem}
                              onClick={() => setActiveDropdown(null)}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <SectionLink
                    href={item.href}
                    route={item.route}
                    className="group relative cursor-pointer border-none bg-transparent px-3 py-2 font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-red-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </SectionLink>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <div className="hidden items-center space-x-4 lg:flex">
            <SectionLink
              href="#lessons"
              className="transform cursor-pointer rounded-full border-none bg-gradient-to-r from-red-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start Learning
            </SectionLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 focus:outline-none lg:hidden"
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMobileMenuOpen ? "mt-6 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-gray-100 bg-white/95 p-6 shadow-xl backdrop-blur-md">
            <ul className="space-y-4">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={(e) =>
                          handleDropdownClick(`mobile-${item.label}`, e)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-red-600"
                      >
                        {item.label}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === `mobile-${item.label}`
                              ? "rotate-180"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Mobile Dropdown Items */}
                      <div
                        className={`mt-2 ml-4 space-y-2 overflow-hidden transition-all duration-300 ${
                          activeDropdown === `mobile-${item.label}`
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => (
                            <DropdownItem
                              key={dropdownIndex}
                              item={dropdownItem}
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            />
                          )
                        )}
                      </div>

                      {/* Mobile: Also allow scrolling to section */}
                      <div className="mt-2">
                        <SectionLink
                          href={item.href}
                          route={item.route}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block w-full cursor-pointer rounded-lg border-none bg-transparent px-4 py-2 text-left text-sm font-medium text-blue-600 transition-all duration-300 hover:bg-blue-50"
                        >
                          Go to {item.label} section
                        </SectionLink>
                      </div>
                    </div>
                  ) : (
                    <SectionLink
                      href={item.href}
                      route={item.route}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full cursor-pointer rounded-lg border-none bg-transparent px-4 py-3 text-left font-medium text-gray-700 transition-all duration-300 hover:translate-x-2 hover:transform hover:bg-blue-50 hover:text-red-600"
                    >
                      {item.label}
                    </SectionLink>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <SectionLink
                href="#lessons"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full transform cursor-pointer rounded-full border-none bg-gradient-to-r from-red-600 to-blue-600 px-6 py-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Learning Today
              </SectionLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
