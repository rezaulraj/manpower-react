import React, { useState, useEffect } from "react";
import { Industries } from "../data/Industries";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaFacebookF,
  FaHeart,
  FaRocket,
  FaGlobeAmericas,
  FaUsers,
  FaPinterest,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      icon: FaX,
      href: "https://x.com/Manpower7912871",
      color: "hover:text-sky-400",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/manpowernet01",
      color: "hover:text-blue-600",
    },
    {
      icon: FaPinterest,
      href: "https://www.pinterest.com/manpowernet/",
      color: "hover:text-pink-500",
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.footer
      className="relative bg-[#161C31] text-white overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={footerVariants}
    >
      <div className="relative container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.div
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <HiSparkles className="text-yellow-400 text-2xl mr-3" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Manpower Network
              </h2>
            </motion.div>

            <motion.p
              className="text-xl mb-6 leading-relaxed text-gray-200"
              variants={itemVariants}
            >
              We are an international workforce solutions partner, delivering
              <span className="text-yellow-300 font-semibold">
                {" "}
                exceptional talent{" "}
              </span>
              to future-focused organizations worldwide.
            </motion.p>

            <motion.div
              className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
              whileHover={{ scale: 1.02 }}
              variants={itemVariants}
            >
              <FaGlobeAmericas className="text-blue-400 text-xl" />
              <div>
                <p className="text-sm text-gray-300">Current Time</p>
                <p className="text-lg font-mono font-bold text-white">
                  {currentTime || "Loading..."}
                </p>
              </div>
            </motion.div>

            <motion.div className="flex space-x-4 mt-6" variants={itemVariants}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 ${social.color} hover:bg-white/20 hover:scale-110`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="flex items-center text-xl font-bold mb-6 text-yellow-400"
              whileHover={{ x: 5 }}
            >
              <FaRocket className="mr-3" />
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About us" },
                { href: "/services", label: "Services" },
                { href: "/industries", label: "Industries" },
                { href: "/employees", label: "For Employers" },
                { href: "/partnership", label: "Partner with Us" },
                { href: "/contact", label: "Contact" },
                { href: "/careers", label: "Careers" },
              ].map((link, index) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="flex items-center group text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <FaArrowRight className="mr-3 text-yellow-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:text-yellow-400 transition-colors duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="flex items-center text-xl font-bold mb-6 text-yellow-400"
              whileHover={{ x: 5 }}
            >
              <FaUsers className="mr-3" />
              Industries
            </motion.h3>
            <ul className="space-y-3 mb-8">
              {Industries.map((industry) => (
                <motion.li key={industry.id} variants={itemVariants}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={industry.href}
                      className="flex items-center group text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <FaArrowRight className="mr-3 text-yellow-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:text-yellow-400 transition-colors duration-300">
                        {industry.title}
                      </span>
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={itemVariants}
        >
          {[
            {
              icon: FaEnvelope,
              title: "Email Us",
              content: "Chairman@manpowernet.work",
              href: "mailto:Chairman@manpowernet.work",
              color: "from-red-500 to-pink-600",
            },
            {
              icon: FaMapMarkerAlt,
              title: "UK Office",
              content: "17 Somerville Road, Romford, England, RM6 5BD",
              href: "#",
              color: "from-green-500 to-emerald-600",
            },
            {
              icon: FaMapMarkerAlt,
              title: "UAE Office",
              content: "Al Nahyan - E20 04 - Abu Dhabi - United Arab Emirates",
              href: "#",
              color: "from-blue-500 to-cyan-600",
            },
            {
              icon: FaMapMarkerAlt,
              title: "Asia Offices",
              content: "26/2/1 E L Senanayake Veediya, Kandy 20000, Sri Lanka",
              content2:
                "H2/1, Road: 2, Block: C, Section: 2, Mirpur DOHS, Dhaka-1216.",
              href: "#",
              color: "from-purple-500 to-indigo-600",
            },
          ].map((contact, index) => (
            <motion.div
              key={contact.title}
              className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 group"
              whileHover={{ scale: 1.03, y: -5 }}
              variants={itemVariants}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <contact.icon className="text-white text-lg" />
              </div>
              <h4 className="font-bold text-white mb-2">{contact.title}</h4>
              <Link
                href={contact.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm leading-relaxed group-hover:text-yellow-400"
              >
                {contact.content}.
                {contact?.content2 && <div>{contact?.content2}</div>}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-white/20 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart className="text-red-500" />
                </motion.div>
                <span className="text-gray-300">by</span>
              </div>
              <span className="text-white font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Manpower Network International
              </span>
            </motion.div>

            <motion.div
              className="text-center lg:text-right"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-300 text-lg">
                © 2025 Manpower Network International.{" "}
                <span className="text-yellow-400">All rights reserved.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
