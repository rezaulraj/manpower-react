import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
];

const BrandMarquee = () => {
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300/50 via-gray-400/50 to-amber-500/50"></div>

        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-amber-500/20 to-yellow-300/30 bg-[size:400%_400%] mix-blend-overlay"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-3xl"
        />

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent"></div>

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                             linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-6"
        >
          <span className="relative">
            Trusted by Leading Brands
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-gray-600 via-yellow-200 to-gray-600 mx-auto mt-4 rounded-full"
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto"
        >
          Partnering with industry leaders worldwide
        </motion.p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-yellow-400 to-transparent z-20"></div>

        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-yellow-400 to-transparent z-20"></div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12 md:space-x-16 lg:space-x-20"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {doubledLogos.map((logo, index) => (
              <motion.div
                key={`${logo}-${index}`}
                className="relative group"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-white/95 p-4 md:p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20">

                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                  <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`Brand ${index + 1}`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap shadow-lg"
                  >
                    Partner
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-12 md:mt-16 relative z-10"
      >
        <p className="text-gray-8 00 mb-6 text-lg md:text-xl">
          Join our growing network of successful partnerships
        </p>

        <a
          href="/contact"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-white to-yellow-100 text-amber-900 px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold text-lg md:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            Become a Partner
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </span>

          {/* Button Glow */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-2 bg-white/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </a>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default BrandMarquee;
