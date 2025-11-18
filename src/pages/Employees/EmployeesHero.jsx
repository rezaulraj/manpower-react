import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EmployeesHero() {
  return (
    <section className="relative py-32 bg-[#183444] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/service.jpg"
          alt="Hero"
          className="object-cover opacity-20 w-full h-auto"
        />
      </div>

      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-start w-full px-4">
        <div className="text-start">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl capitalize font-Inter md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              Innovative Employment
            </motion.span>
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block"
            >
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
                Solutions
              </motion.span>
            </motion.span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-start font-Inter md:text-xl lg:text-2xl text-white max-w-5xl mb-10"
        >
          Empowering your workforce today! We provide forward‑thinking hiring
          models that foster collaboration, leverage global talent, and deliver
          exceptional value to organizations locally and internationally.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.8,
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
            transition: { type: "spring", stiffness: 400 },
          }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <motion.div
            initial={{ boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.4)" }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(255, 255, 255, 0.4)",
                "0 0 0 15px rgba(255, 255, 255, 0)",
                "0 0 0 0 rgba(255, 255, 255, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="absolute inset-0 rounded-md"
          />

          <Link
            to="/contact"
            className="relative bg-white font-Inter font-bold text-[#183444] px-8 py-4 rounded-md text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl flex items-center gap-3 group overflow-hidden"
          >
            <div className="absolute inset-0 -inset-x-32 -inset-y-10 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-12 scale-y-150 group-hover:translate-x-64 transition-transform duration-1000" />

            <span className="relative z-10">Contact Now</span>

            <motion.span
              animate={{
                x: [0, 5, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 text-xl"
            >
              ✨
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
