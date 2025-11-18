import React from "react";

import { motion } from "framer-motion";
import { countryData } from "../../data/Industries";

export default function ContactCountry() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const countryCardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.15,
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0.3,
    },
    hover: {
      opacity: 0.2,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const shineVariants = {
    hover: {
      x: ["-100%", "100%"],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const lineVariants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: "60%",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5,
      },
    },
    hover: {
      width: "80%",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5 max-w-7xl">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {countryData.map((country, index) => (
            <motion.div
              key={country.id}
              custom={index}
              variants={countryCardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a
                href={country.href}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-96 block"
              >
                <motion.div
                  className="absolute inset-0"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img
                    src={country.bgImage}
                    alt={`${country.city} background`}
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                  <motion.div
                    className="absolute inset-0 bg-black/30"
                    variants={overlayVariants}
                    initial="hidden"
                    whileHover="hover"
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-20"
                  variants={shineVariants}
                />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-8">
                  <motion.h3
                    className="text-3xl font-bold mb-3"
                    variants={textVariants}
                    whileHover="hover"
                  >
                    {country.city}
                  </motion.h3>

                  <motion.p
                    className="text-xl mb-6"
                    variants={textVariants}
                    whileHover="hover"
                  >
                    {country.name}
                  </motion.p>

                  <motion.div
                    className="h-0.5 bg-primary rounded-full"
                    variants={lineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                  />
                  <motion.div
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <motion.span
                      className="text-white/80 text-sm flex items-center gap-2"
                      animate={{
                        x: [0, 5, 0],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        },
                      }}
                    >
                      Contact Local Team
                      <span>→</span>
                    </motion.span>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-xl text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Can not find your location? We have global coverage.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/contact"
              className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Contact Global Office
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
