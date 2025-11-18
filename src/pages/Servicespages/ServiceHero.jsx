import React from "react";
import { motion } from "framer-motion";

export default function ServiceHero() {
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
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
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
    <section className="relative py-32 bg-[#183444] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/service.jpg"
          alt="Service Hero"
          className="object-cover opacity-20"
        />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-l from-[#183444] via-[#183444]/80 to-transparent" />

      <div className="container mx-auto relative z-10 h-full flex items-center justify-end w-full px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-right max-w-5xl"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl font-Inter md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="block">Ready for Your Next</span>
              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block bg-gradient-to-r from-white via-[#44B6DA] to-yellow-400 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Opportunity?
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed text-end"
          >
            We connect you with roles where your skills are <br /> valued and
            your career can grow.
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
                className="relative bg-white font-Inter font-bold text-[#201D1F] px-8 py-4 rounded-md text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl flex items-center gap-3 group overflow-hidden"
              >
                <div className="absolute inset-0 -inset-x-32 -inset-y-10 bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 scale-y-150 group-hover:translate-x-64 transition-transform duration-1000" />

                <span className="relative z-10">Apply Now</span>

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
    </section>
  );
}
