import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countryData } from "../../data/Industries";
import CountryDescription from "../../contry/CountryDescription";

export default function ContactCountry() {
  const [selectedCountry, setSelectedCountry] = useState(null);

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
      y: -15,
      scale: 1.05,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.15,
      transition: {
        duration: 0.8,
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
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0.4,
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
      x: ["-100%", "200%"],
      transition: {
        duration: 1.2,
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
      backgroundColor: "#fbbf24",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const handleCountryClick = (country, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCountry(country);
  };

  const handleCloseDetails = () => {
    setSelectedCountry(null);
  };

  const ctaVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.1" />
                <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
              </radialGradient>

              <linearGradient
                id="goldGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0.03" />
              </linearGradient>

              <linearGradient
                id="orangeGradient"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#EA580C" stopOpacity="0.06" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.08" />
              </linearGradient>

              <linearGradient
                id="redGradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.04" />
                <stop offset="50%" stopColor="#EA580C" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.04" />
              </linearGradient>
            </defs>

            <motion.circle
              cx="50%"
              cy="50%"
              r="400"
              fill="url(#sunGlow)"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {[
              {
                cx: "15%",
                cy: "20%",
                r: 80,
                gradient: "goldGradient",
                delay: 0,
              },
              {
                cx: "85%",
                cy: "30%",
                r: 100,
                gradient: "orangeGradient",
                delay: 2,
              },
              {
                cx: "25%",
                cy: "70%",
                r: 120,
                gradient: "redGradient",
                delay: 4,
              },
              {
                cx: "75%",
                cy: "65%",
                r: 70,
                gradient: "goldGradient",
                delay: 1,
              },
            ].map((circle, index) => (
              <motion.circle
                key={index}
                cx={circle.cx}
                cy={circle.cy}
                r={circle.r}
                fill={`url(#${circle.gradient})`}
                animate={{
                  cx: [
                    circle.cx,
                    `calc(${circle.cx} ${index % 2 === 0 ? "+" : "-"} 1%)`,
                    circle.cx,
                  ],
                  cy: [
                    circle.cy,
                    `calc(${circle.cy} ${index % 3 === 0 ? "+" : "-"} 1%)`,
                    circle.cy,
                  ],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 15 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: circle.delay,
                }}
              />
            ))}
          </svg>
        </div>
      </div>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-yellow-400/50 to-red-500/50"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + i * 8}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-ubuntu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Global{" "}
            <span className="text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text">
              Offices
            </span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.p
            className="text-lg text-gray-700 font-normal mb-8 leading-relaxed max-w-2xl mx-auto font-ubuntu"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Connect with our dedicated teams across the globe. We're here to
            help you find the perfect talent solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
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
              className="cursor-pointer"
              onClick={(e) => handleCountryClick(country, e)}
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-[400px]">
                <motion.div
                  className="absolute inset-0 z-0"
                  variants={imageVariants}
                >
                  <img
                    src={country.bgImage}
                    alt={`${country.city} background`}
                    className="object-cover w-full h-full"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/5 to-red-500/10"
                    variants={overlayVariants}
                    initial="hidden"
                    whileHover="hover"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 z-10"
                  variants={shineVariants}
                  initial={{ x: "-100%" }}
                  whileHover="hover"
                />

                <div className="relative z-20 h-full flex flex-col items-center justify-end text-center text-white p-10">
                  <motion.h3
                    className="text-4xl font-bold mb-3 font-ubuntu"
                    variants={textVariants}
                    whileHover="hover"
                  >
                    {country.city}
                  </motion.h3>

                  <motion.p
                    className="text-xl mb-6 font-ubuntu"
                    variants={textVariants}
                    whileHover="hover"
                  >
                    {country.name}
                  </motion.p>
                  <motion.div
                    className="h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full mb-6"
                    variants={lineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                  />
                  <motion.div
                    className="mt-4"
                    variants={ctaVariants}
                    initial="hidden"
                    whileHover="hover"
                  >
                    <motion.div
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-white font-medium font-ubuntu">
                        View Details
                      </span>
                      <motion.span
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="text-yellow-300"
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    borderColor: "rgba(245, 158, 11, 0.3)",
                    boxShadow: "0 0 30px rgba(245, 158, 11, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                />

                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-3 h-3 bg-red-500 rounded-full"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCountry && (
          <CountryDescription
            country={selectedCountry}
            onClose={handleCloseDetails}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
