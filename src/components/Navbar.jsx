"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiBriefcase } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Industries } from "../data/Industries";
import { useLocation, Link } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "For Employers",
    href: "/employees",
  },
  {
    name: "Partner with Us",
    href: "/partnership",
  },
  {
    name: "Industries",
    href: "/industries",
    sublinks: Industries.map((item) => ({
      name: item.title,
      href: item.href, // This uses the full href from your data
    })),
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Careers",
    href: "/careers",
  },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showCareerEffect, setShowCareerEffect] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hasSeenCareerEffect = sessionStorage.getItem("careerEffectShown");
    if (!hasSeenCareerEffect) {
      setShowCareerEffect(true);
    }
  }, []);

  const handleCareerClick = () => {
    setShowCareerEffect(false);
    sessionStorage.setItem("careerEffectShown", "true");
  };

  // Helper function to check if a link is active
  const isActiveLink = (href) => {
    return location.pathname === href;
  };

  // Helper function to check if an industry sublink is active
  const isIndustryActive = () => {
    return Industries.some((industry) => location.pathname === industry.href);
  };

  return (
    <header className="relative z-50 overflow-hidden">
      <nav
        className={`fixed top-0 left-0 w-full py-2 z-50 transition-all duration-300 ${
          scrolled ? "bg-[rgba(255,255,255,0.8)] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex container justify-between items-center mx-auto py-4 px-6">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={50}
              className="w-[130px] h-[50px]"
            />
          </Link>

          <ul className="hidden md:flex gap-6 items-center relative">
            {navLinks.map((link) => (
              <li
                key={link.name}
                onMouseEnter={() =>
                  setHoveredMenu(link.sublinks ? link.name : null)
                }
                onMouseLeave={() => setHoveredMenu(null)}
                className="relative group"
              >
                <div className="flex items-center gap-1 relative">
                  {link.name === "Careers" && showCareerEffect && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute -top-3 -right-3"
                    >
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.1, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-8 h-8 bg-blue-500 rounded-full absolute"
                        />

                        <motion.div
                          animate={{
                            rotate: [0, -10, 10, -5, 5, 0],
                            y: [0, -2, 2, -1, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.3, 0.5, 0.7, 1],
                          }}
                          className="relative z-10"
                        >
                          <FiBriefcase size={16} className="text-white" />
                        </motion.div>

                        <motion.div
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                          className="absolute -top-1 -right-1 w-2 h-2"
                        >
                          <div className="w-full h-full bg-yellow-400 rounded-full" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  <Link
                    to={link.href || "#"}
                    className={`font-medium font-Inter text-[20px] hover:text-primary transition ${
                      scrolled ? "text-gray-800" : "text-white"
                    } ${
                      (link.name === "Industries" && isIndustryActive()) ||
                      isActiveLink(link.href)
                        ? "text-primary"
                        : ""
                    }`}
                    onClick={
                      link.name === "Careers" ? handleCareerClick : undefined
                    }
                  >
                    {link.name}
                  </Link>
                  {link.sublinks && <FiChevronDown size={16} />}
                </div>

                <AnimatePresence>
                  {hoveredMenu === link.name && link.sublinks && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full w-[400px] bg-white shadow-lg border-t border-primary rounded-b-lg"
                    >
                      <div className="container mx-auto px-6 py-6 grid grid-cols-1 gap-3">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.href}
                            className={`text-[16px] px-4 py-3 rounded-lg transition-colors ${
                              isActiveLink(sublink.href)
                                ? "text-primary bg-blue-50 font-semibold"
                                : "text-gray-700 hover:text-primary hover:bg-gray-50"
                            } font-medium`}
                            onClick={() => setHoveredMenu(null)}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <div
            className={`md:hidden md:pl-10 z-50 ${
              scrolled ? "text-gray-800" : "text-heading"
            }`}
          >
            {mobileOpen ? (
              <FiX
                className="text-primary"
                size={28}
                onClick={() => setMobileOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-primary"
                size={28}
                onClick={() => setMobileOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 max-w-[300px] w-full h-screen bg-white z-40 p-6 pt-24 overflow-y-auto"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-lg font-medium text-gray-800 relative"
                >
                  {link.sublinks ? (
                    <details className="group">
                      <summary className="flex justify-between cursor-pointer items-center list-none">
                        <span
                          className={`${
                            link.name === "Industries" && isIndustryActive()
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {link.name}
                        </span>
                        <FiChevronDown
                          className="text-gray-600 group-open:rotate-180 transition-transform"
                          size={18}
                        />
                      </summary>
                      <ul className="mt-2 pl-4 text-sm space-y-2">
                        {link.sublinks.map((sublink) => (
                          <li key={sublink.name}>
                            <Link
                              to={sublink.href}
                              className={`block py-2 px-3 rounded-lg transition-colors ${
                                isActiveLink(sublink.href)
                                  ? "text-primary bg-blue-50 font-semibold"
                                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <div className="relative flex items-center gap-2">
                      {link.name === "Careers" && showCareerEffect && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="relative"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.3, 0.1, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="w-6 h-6 bg-yellow-400 rounded-full absolute"
                          />

                          <motion.div
                            animate={{
                              rotate: [0, -8, 8, -4, 4, 0],
                              y: [0, -1, 1, -0.5, 0.5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="relative z-10"
                          >
                            <FiBriefcase size={14} className="text-white" />
                          </motion.div>
                        </motion.div>
                      )}
                      <Link
                        className={`${
                          isActiveLink(link.href) ? "text-primary" : ""
                        }`}
                        to={link.href || "#"}
                        onClick={() => {
                          if (link.name === "Careers") handleCareerClick();
                          setMobileOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
