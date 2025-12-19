import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiBriefcase,
  FiHome,
  FiUser,
  FiSettings,
  FiUsers,
  FiGrid,
  FiMail,
  FiStar,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Industries } from "../data/Industries";
import { useLocation, Link } from "react-router-dom";
import { LuHeartHandshake } from "react-icons/lu";

const navIcons = {
  Home: FiHome,
  About: FiUser,
  Services: FiSettings,
  "For Employers": FiUsers,
  "Partner with Us": LuHeartHandshake,
  Industries: FiGrid,
  Contact: FiMail,
  Careers: FiBriefcase,
};

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: FiHome,
  },
  {
    name: "About",
    href: "/about",
    icon: FiUser,
  },
  {
    name: "Services",
    href: "/services",
    icon: FiSettings,
  },
  {
    name: "For Employers",
    href: "/employees",
    icon: FiUsers,
  },
  {
    name: "Partner with Us",
    href: "/partnership",
    icon: LuHeartHandshake,
  },
  {
    name: "Industries",
    href: "/industries",
    icon: FiGrid,
    sublinks: Industries.map((item) => ({
      name: item.title,
      href: item.href,
    })),
  },
  {
    name: "Contact",
    href: "/contact",
    icon: FiMail,
  },
  {
    name: "Careers",
    href: "/careers",
    icon: FiBriefcase,
  },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActiveLink = (href) => {
    return location.pathname === href;
  };

  const isIndustryActive = () => {
    return Industries.some((industry) => location.pathname === industry.href);
  };

  return (
    <header className="relative z-50 overflow-hidden">
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>

      <nav
        className={`fixed top-0 left-0 w-full py-2 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg shadow-gray-100/50"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="flex container justify-between items-center mx-auto px-2">
          <Link to="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                width={130}
                height={50}
                className="w-[140px] h-[55px] object-contain"
              />
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </Link>

          <ul className="hidden md:flex items-center relative">
            {navLinks.map((link) => {
              const Icon = navIcons[link.name] || link.icon;
              const isActive =
                (link.name === "Industries" && isIndustryActive()) ||
                isActiveLink(link.href);

              return (
                <li
                  key={link.name}
                  onMouseEnter={() =>
                    setHoveredMenu(link.sublinks ? link.name : null)
                  }
                  onMouseLeave={() => setHoveredMenu(null)}
                  className="relative"
                >
                  <div className="flex items-center">
                    <Link
                      to={link.href || "#"}
                      className={`
                        flex items-center gap-2
                        font-medium text-[16px] 
                        transition-all duration-300
                        px-2 py-2 rounded-xl
                        relative group/navitem
                        ${
                          isActive
                            ? "text-blue-950"
                            : "text-gray-700 hover:text-blue-600"
                        }
                      `}
                    >
                      <div className="relative">
                        <div
                          className={`
                            relative p-2 rounded-lg transition-all duration-300 z-20
                            ${
                              isActive
                                ? "bg-blue-50 text-blue-950"
                                : "bg-gray-50 text-gray-600 group-hover/navitem:bg-blue-50 group-hover/navitem:text-blue-600"
                            }
                          `}
                        >
                          <Icon size={18} className="relative z-10" />
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute inset-0 bg-blue-50 rounded-lg"
                              transition={{ type: "spring", stiffness: 300 }}
                            />
                          )}
                        </div>
                      </div>

                      <span className="font-ubuntu font-medium tracking-wide relative z-20">
                        {link.name}
                      </span>

                      {link.sublinks && (
                        <FiChevronDown
                          size={16}
                          className={`
                            transition-transform duration-300 relative z-50
                            ${hoveredMenu === link.name ? "rotate-180" : ""}
                            ${isActive ? "text-blue-600" : "text-gray-400"}
                          `}
                        />
                      )}
                      <div
                        className={`
                        absolute bottom-0 left-1/2 transform -translate-x-1/2
                        w-0 h-0.5 bg-blue-950
                        transition-all duration-300
                        group-hover/navitem:w-3/4
                        ${isActive ? "w-3/4" : ""}
                      `}
                      />
                    </Link>
                  </div>

                  {link.sublinks && (
                    <AnimatePresence>
                      {hoveredMenu === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="fixed left-0 top-full mt-0 w-screen bg-white shadow-2xl border-t border-gray-100 overflow-hidden"
                          style={{ zIndex: 9999 }}
                          onMouseEnter={() => setHoveredMenu(link.name)}
                          onMouseLeave={() => setHoveredMenu(null)}
                        >
                          <div className="container mx-auto px-4 py-6">
                            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                              <div className="p-2 bg-linear-to-r from-blue-50 to-purple-50 rounded-lg">
                                <FiGrid size={24} className="text-blue-600" />
                              </div>
                              <div>
                                <h3 className="font-ubuntu font-semibold text-gray-800 text-xl">
                                  All Industries
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Explore our industry expertise
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {link.sublinks.map((sublink) => {
                                const isSubActive = isActiveLink(sublink.href);
                                return (
                                  <Link
                                    key={sublink.name}
                                    to={sublink.href}
                                    className={`
                                      flex items-center gap-3
                                      px-4 py-3 rounded-xl
                                      transition-all duration-300
                                      font-ubuntu
                                      group/sublink
                                      relative
                                      ${
                                        isSubActive
                                          ? "bg-linear-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold"
                                          : "text-gray-700 hover:bg-gray-50"
                                      }
                                    `}
                                    onClick={() => setHoveredMenu(null)}
                                  >
                                    <div
                                      className={`
                                        p-2 rounded-lg transition-all duration-300
                                        ${
                                          isSubActive
                                            ? "bg-blue-100 text-blue-600"
                                            : "bg-gray-100 text-gray-500 group-hover/sublink:bg-blue-100 group-hover/sublink:text-blue-600"
                                        }
                                      `}
                                    >
                                      <FiStar size={16} />
                                    </div>
                                    <span className="whitespace-nowrap">
                                      {sublink.name}
                                    </span>
                                    {isSubActive && (
                                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500" />
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`md:hidden relative p-3 rounded-xl ${
              scrolled ? "bg-gray-50 text-gray-700" : "bg-gray-50 text-gray-700"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <FiX size={24} className="text-blue-600" />
            ) : (
              <FiMenu size={24} className="text-blue-600" />
            )}
            <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-blue-200 transition-colors"></div>
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 right-0 w-[85%] max-w-[400px] h-screen bg-white z-50 p-6 pt-24 overflow-y-auto shadow-2xl"
            >
              <div className="absolute top-0 left-0 right-0 p-6 border-b border-gray-100 bg-linear-to-r from-blue-50 to-white">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-sm">
                    <FiMenu size={20} className="text-blue-600" />
                  </div>
                  <span className="font-ubuntu font-bold text-xl text-gray-800">
                    Menu
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const Icon = navIcons[link.name] || link.icon;
                  const isActive =
                    (link.name === "Industries" && isIndustryActive()) ||
                    isActiveLink(link.href);

                  return (
                    <li key={link.name} className="relative">
                      {link.sublinks ? (
                        <details className="group">
                          <summary
                            className={`
                            flex justify-between items-center cursor-pointer
                            px-4 py-4 rounded-xl
                            transition-all duration-300
                            font-ubuntu font-medium
                            list-none
                            ${
                              isActive
                                ? "bg-blue-50 text-blue-700"
                                : "text-gray-700 hover:bg-gray-50"
                            }
                          `}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-2 rounded-lg ${
                                  isActive
                                    ? "bg-blue-100 text-blue-600"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                <Icon size={18} />
                              </div>
                              <span>{link.name}</span>
                            </div>
                            <FiChevronDown
                              className="text-gray-400 group-open:rotate-180 transition-transform duration-300"
                              size={18}
                            />
                          </summary>
                          <ul className="mt-2 ml-10 space-y-1">
                            {link.sublinks.map((sublink) => {
                              const isSubActive = isActiveLink(sublink.href);
                              return (
                                <li key={sublink.name}>
                                  <Link
                                    to={sublink.href}
                                    className={`
                                      flex items-center gap-3
                                      px-4 py-3 rounded-lg
                                      transition-all duration-300
                                      font-ubuntu text-sm
                                      ${
                                        isSubActive
                                          ? "bg-blue-50 text-blue-700 font-semibold"
                                          : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                      }
                                    `}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <div
                                      className={`p-1.5 rounded ${
                                        isSubActive
                                          ? "bg-blue-100 text-blue-600"
                                          : "bg-gray-100 text-gray-400"
                                      }`}
                                    >
                                      <FiStar size={12} />
                                    </div>
                                    {sublink.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </details>
                      ) : (
                        <Link
                          className={`
                            flex items-center gap-3
                            px-4 py-4 rounded-xl
                            transition-all duration-300
                            font-ubuntu font-medium
                            w-full
                            ${
                              isActive
                                ? "bg-blue-50 text-blue-700"
                                : "text-gray-700 hover:bg-gray-50"
                            }
                          `}
                          to={link.href || "#"}
                          onClick={() => setMobileOpen(false)}
                        >
                          <div
                            className={`p-2 rounded-lg ${
                              isActive
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            <Icon size={18} />
                          </div>
                          <span>{link.name}</span>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
