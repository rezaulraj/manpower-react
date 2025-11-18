import React from "react";
import { motion } from "framer-motion";

export default function IndustriesHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 1.2,
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

  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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

  return (
    <section className="py-32 relative bg-[#201D1F] overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/images/contactbanner.jpg"
          alt="Industries Hero"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#201D1F] via-transparent to-[#201D1F]/80" />
      </motion.div>

      <div className="container mx-auto relative z-10 flex flex-col justify-center items-end w-full text-end px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <motion.h1
            className="text-5xl font-sans md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            variants={titleVariants}
          >
            <motion.span className="block" variants={glowTextVariants}>
              Industries
            </motion.span>
            <motion.span
              className="block text-3xl md:text-5xl lg:text-6xl text-primary mt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              We Are Experts
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg font-normal font-Inter md:text-xl lg:text-2xl text-white max-w-2xl mb-12 ml-auto leading-relaxed"
            variants={subtitleVariants}
          >
            We provide innovative, tailored solutions across a wide range of
            industries. From healthcare and finance to technology and retail,
            our expertise helps businesses grow, adapt, and stay ahead in an
            ever-evolving market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap justify-end gap-8 py-6 border-t border-white/20"
          >
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-3xl font-bold text-primary font-Inter">
                15+
              </div>
              <div className="text-white/70 text-sm font-Inter">
                Industries Served
              </div>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-3xl font-bold text-primary font-Inter">
                1000+
              </div>
              <div className="text-white/70 text-sm font-Inter">
                Successful Placements
              </div>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-3xl font-bold text-primary font-Inter">
                98%
              </div>
              <div className="text-white/70 text-sm font-Inter">
                Client Satisfaction
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#3B82F6",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#201D1F] font-bold px-8 py-4 rounded-lg text-lg hover:bg-primary transition-colors duration-300 font-Inter"
            >
              Explore Our Industry Solutions
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-20 right-1/4 z-20"
        animate={{
          y: [0, 15, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
      >
        <div className="w-3 h-3 bg-primary rounded-full opacity-40" />
      </motion.div>
    </section>
  );
}
