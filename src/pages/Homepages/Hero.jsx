import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  const dividerVariants = {
    hidden: { width: 0 },
    visible: {
      width: "208px",
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="w-full py-32 relative overflow-hidden">
      {/* Background Video */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full object-cover h-full"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>

      <div className="relative z-10 flex items-center justify-center px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="items-center w-full max-w-7xl mx-auto"
        >
          <div className="text-white flex flex-col items-center text-center">
            {/* Title */}
            <motion.h1
              variants={titleVariants}
              className="font-Inter text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            >
              Unlock your{" "}
              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="bg-gradient-to-r from-primary via-cyan-400 to-purple-500 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                future.
              </motion.span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              variants={dividerVariants}
              className="h-[5px] bg-primary mb-8"
            />

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium mb-4"
            >
              Workforce Solutions Provider.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-10"
            >
              Manpower Network – Discover Your Potential with Source Group
              International.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              {/* Contact Button */}
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="/contact"
                  className="bg-primary flex justify-center items-center cursor-pointer text-heading hover:bg-primary hover:text-white px-8 py-3 rounded-4xl font-semibold transition-colors duration-200"
                >
                  Contact Us
                </a>
              </motion.div>

              {/* Hire Workers */}
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="/industries"
                  className="bg-transparent cursor-pointer border-2 border-primary text-white hover:bg-primary hover:text-heading px-8 py-3 rounded-4xl font-semibold transition-colors duration-200"
                >
                  Hire worker Experts →
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
