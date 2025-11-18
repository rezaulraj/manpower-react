import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const applyButtonVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotate: -5,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      y: -3,
      rotate: 1,
      boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      rotate: -1,
    },
  };

  const buttonIconVariants = {
    idle: {
      x: 0,
      rotate: 0,
    },
    hover: {
      x: 5,
      rotate: 45,
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
  };

  const pulseGlow = {
    initial: {
      boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.7)",
    },
    pulse: {
      boxShadow: [
        "0 0 0 0 rgba(255, 255, 255, 0.7)",
        "0 0 0 20px rgba(255, 255, 255, 0)",
        "0 0 0 0 rgba(255, 255, 255, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <section className="relative py-32 bg-[#201D1F] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/aboutbanner.jpg"
          alt="About Hero"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 bg-gradient-to-l from-[#201D1F] via-[#201D1F]/80 to-transparent"
      />

      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-end w-full text-end px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 max-w-3xl"
        >
          <motion.div variants={textVariants} className="space-y-4">
            <h1 className="text-5xl font-Inter md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <motion.span variants={itemVariants} className="block">
                Rise Above{" "}
              </motion.span>
              <motion.span variants={itemVariants} className="block">
                <motion.span
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-gradient-to-r from-white via-[#44B6DA] to-yellow-400 bg-[length:200%_auto] bg-clip-text text-transparent"
                >
                  Ordinary
                </motion.span>
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            variants={textVariants}
            className="text-lg font-Inter md:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed"
          >
            Step away from the traditional recruitment path and step into a
            career experience that inspires growth, fuels ambition, and shapes
            your professional future.
          </motion.p>

          <motion.div variants={textVariants} className="flex justify-end">
            <motion.div
              variants={applyButtonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="relative"
            >
              <motion.div
                variants={pulseGlow}
                initial="initial"
                animate="pulse"
                className="absolute inset-0 rounded-md"
              />

              <a
                href="/contact"
                className="relative bg-white font-Inter font-bold text-[#201D1F] px-8 py-4 rounded-md text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl flex items-center gap-3 group overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 -inset-x-32 -inset-y-10 bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 scale-y-150 group-hover:translate-x-64 transition-transform duration-1000" />

                <span className="relative z-10">Apply Here</span>

                <motion.span
                  variants={buttonIconVariants}
                  initial="idle"
                  whileHover="hover"
                  className="relative z-10 text-xl"
                >
                  🚀
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#201D1F] to-transparent z-5" />
    </section>
  );
}
