
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Banner() {
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

  const imageVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
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
      x: -50,
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

  const paragraphVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      x: 5,
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
    <section className="bg-primary py-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8"
        >
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <motion.div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
            <motion.div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30" />

            <img
              src="/images/banner.jpg"
              alt="banner"
              width={500}
              height={500}
              className="lg:w-[700px] w-full md:w-[500px] rounded-2xl h-auto relative z-10 shadow-2xl"
            />
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h2
              variants={textVariants}
              className="text-heading text-start lg:text-[56px] md:text-[32px] text-[24px] font-bold leading-tight"
            >
              Empowering Innovation with{" "}
              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-r from-blue-900 via-red-600 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Expert Talent
              </motion.span>
            </motion.h2>

            <motion.p
              variants={paragraphVariants}
              className="text-text text-start text-[16px] font-normal leading-relaxed"
            >
              We connect skilled professionals with the right opportunities to
              achieve your goals and create lasting value for your business.
            </motion.p>

            <motion.p
              variants={paragraphVariants}
              className="text-text text-start text-[16px] mb-6 font-normal leading-relaxed"
            >
              With our Manpower Network solutions, talent management becomes
              streamlined, scalable, and smart.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a
                href="/about"
                className="bg-heading mt-8 max-w-2xs flex justify-center cursor-pointer text-white px-8 py-4 rounded-4xl text-[20px] font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  More About Us
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    →
                  </motion.span>
                </span>
              </a>
            </motion.div>

            <motion.div
              variants={paragraphVariants}
              className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/20"
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-heading text-2xl font-bold"
                >
                  500+
                </motion.div>
                <div className="text-text text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-heading text-2xl font-bold"
                >
                  100+
                </motion.div>
                <div className="text-text text-sm">Expert Professionals</div>
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-heading text-2xl font-bold"
                >
                  98%
                </motion.div>
                <div className="text-text text-sm">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
