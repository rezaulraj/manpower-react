import React from "react";
import { motion } from "framer-motion";
import { Industries } from "../../data/Industries";
import { Link } from "react-router-dom";

export default function IndustriesWe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
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
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="solutions" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-yellow-50 via-amber-50 to-orange-50"></div>

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#44B6DA" stopOpacity="0.15" />
              <stop offset="70%" stopColor="#44B6DA" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#44B6DA" stopOpacity="0" />
            </radialGradient>

            <linearGradient
              id="blueYellowGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#44B6DA" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#44B6DA" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient
              id="blueYellowGradient2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#44B6DA" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient
              id="yellowBlueGradient"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#44B6DA" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          <motion.circle
            cx="50%"
            cy="50%"
            r="300"
            fill="url(#blueGlow)"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {[
            {
              cx: "20%",
              cy: "25%",
              r: 100,
              gradient: "blueYellowGradient1",
              delay: 0,
            },
            {
              cx: "80%",
              cy: "30%",
              r: 120,
              gradient: "blueYellowGradient2",
              delay: 2,
            },
            {
              cx: "30%",
              cy: "70%",
              r: 140,
              gradient: "yellowBlueGradient",
              delay: 4,
            },
            {
              cx: "70%",
              cy: "65%",
              r: 90,
              gradient: "blueYellowGradient1",
              delay: 1,
            },
            {
              cx: "15%",
              cy: "50%",
              r: 110,
              gradient: "blueYellowGradient2",
              delay: 3,
            },
            {
              cx: "85%",
              cy: "20%",
              r: 130,
              gradient: "yellowBlueGradient",
              delay: 5,
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
                  `calc(${circle.cx} ${index % 2 === 0 ? "+" : "-"} 2%)`,
                  circle.cx,
                ],
                cy: [
                  circle.cy,
                  `calc(${circle.cy} ${index % 3 === 0 ? "+" : "-"} 1.5%)`,
                  circle.cy,
                ],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 10 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: circle.delay,
              }}
            />
          ))}

          {[...Array(4)].map((_, i) => (
            <motion.circle
              key={`ring-${i}`}
              cx="50%"
              cy="50%"
              r={200 + i * 40}
              fill="none"
              stroke="#44B6DA"
              strokeWidth="1"
              strokeOpacity="0.1"
              strokeDasharray="5,5"
              animate={{
                strokeDashoffset: [0, 20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-sans"
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#44B6DA] via-yellow-400 to-[#44B6DA] bg-[length:200%_auto] bg-clip-text text-transparent">
                Industries We Serve
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "200px" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-[#44B6DA] via-yellow-400 to-[#44B6DA] mx-auto mt-4 rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto font-Inter leading-relaxed"
          >
            We provide innovative, tailored solutions across a wide range of
            industries. From healthcare and finance to technology and retail,
            our expertise helps businesses grow, adapt, and stay ahead in an
            ever-evolving market.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <Link to={industry.href}>
                <div className="relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-sm">
                  <motion.img
                    src={industry.bg}
                    alt={industry.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201D1F] via-[#201D1F]/70 to-transparent" />
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#44B6DA] to-yellow-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white z-10">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight font-sans">
                        {industry.title}
                      </h3>

                      <div className="flex items-center gap-2 pt-4">
                        <span className="text-sm md:text-base font-semibold bg-gradient-to-r from-[#44B6DA] to-yellow-400 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-[#44B6DA] transition-all duration-300 font-Inter">
                          Explore Industry
                        </span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="group-hover:translate-x-2 transition-transform duration-300"
                        >
                          <svg
                            className="w-5 h-5 text-yellow-400 group-hover:text-[#44B6DA] transition-colors duration-300"
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
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-br from-[#44B6DA] to-yellow-400 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                      <span className="text-white text-xs font-semibold font-Inter">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#44B6DA] to-yellow-400 text-gray-900 px-10 py-4 md:px-12 md:py-5 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden font-Inter"
          >
            <span className="relative z-10 flex items-center gap-3">
              Contact Our Industry Experts
              <motion.svg
                animate={{ x: [0, 4, 0] }}
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
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-2 bg-[#44B6DA]/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
