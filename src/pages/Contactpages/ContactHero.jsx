import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const glowTextVariants = {
    hidden: {
      textShadow: "0 0 0px rgba(59, 130, 246, 0)",
    },
    visible: {
      textShadow: [
        "0 0 0px rgba(59, 130, 246, 0)",
        "0 0 30px rgba(59, 130, 246, 0.8)",
        "0 0 15px rgba(59, 130, 246, 0.4)",
      ],
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.8,
      },
    },
  };

  const floatingElementsVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative py-32 bg-[#201D1F] overflow-hidden flex items-center">
      <motion.div
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/images/contact.avif"
          alt="Contact Hero"
          className="object-center w-full h-auto"
        />
        <div className="absolute inset-0 bg-linear-to-l from-[#201D1F] via-transparent to-[#201D1F]/80" />
      </motion.div>

      <motion.div
        className="absolute top-20 left-10 z-5"
        variants={floatingElementsVariants}
        animate="float"
      >
        <div className="w-4 h-4 bg-primary rounded-full opacity-60" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 z-5"
        variants={floatingElementsVariants}
        animate="float"
        transition={{ delay: 1 }}
      >
        <div className="w-3 h-3 bg-primary rounded-full opacity-40" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/4 z-5"
        variants={floatingElementsVariants}
        animate="float"
        transition={{ delay: 2 }}
      >
        <div className="w-2 h-2 bg-primary rounded-full opacity-30" />
      </motion.div>

      <motion.div
        className="container mx-auto relative z-10 flex flex-col justify-center items-end w-full text-end px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl font-sans md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          variants={titleVariants}
        >
          <motion.span className="block" variants={glowTextVariants} custom={0}>
            Contact
          </motion.span>
          <motion.span className="block" variants={glowTextVariants} custom={1}>
            Us.
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-white max-w-2xl mb-10 leading-relaxed"
          variants={subtitleVariants}
        >
          We&apos;re always up for a conversation to see how we can help. Choose
          a city below to get in touch with your local team of experts.
        </motion.p>
      </motion.div>
    </section>
  );
}
