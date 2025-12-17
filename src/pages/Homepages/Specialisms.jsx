import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Industries } from "../../data/Industries";
import { Link } from "react-router-dom";

const Specialisms = () => {
  const specialisms = Industries;

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

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-yellow-50 via-amber-50 to-orange-50"></div>

        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.15" />
                <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
              </radialGradient>

              <linearGradient
                id="goldGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0.1" />
              </linearGradient>

              <linearGradient
                id="orangeGradient"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#EA580C" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.2" />
              </linearGradient>

              <linearGradient
                id="redGradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#EA580C" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <motion.circle
              cx="50%"
              cy="50%"
              r="350"
              fill="url(#sunGlow)"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
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
                r: 120,
                gradient: "goldGradient",
                delay: 0,
              },
              {
                cx: "85%",
                cy: "30%",
                r: 150,
                gradient: "orangeGradient",
                delay: 2,
              },
              {
                cx: "25%",
                cy: "70%",
                r: 180,
                gradient: "redGradient",
                delay: 4,
              },
              {
                cx: "75%",
                cy: "65%",
                r: 100,
                gradient: "goldGradient",
                delay: 1,
              },
              {
                cx: "10%",
                cy: "50%",
                r: 140,
                gradient: "orangeGradient",
                delay: 3,
              },
              {
                cx: "90%",
                cy: "15%",
                r: 160,
                gradient: "redGradient",
                delay: 5,
              },
              {
                cx: "40%",
                cy: "15%",
                r: 130,
                gradient: "goldGradient",
                delay: 0.5,
              },
              {
                cx: "60%",
                cy: "80%",
                r: 110,
                gradient: "orangeGradient",
                delay: 2.5,
              },
              {
                cx: "95%",
                cy: "50%",
                r: 170,
                gradient: "redGradient",
                delay: 3.5,
              },
              {
                cx: "5%",
                cy: "85%",
                r: 125,
                gradient: "goldGradient",
                delay: 1.5,
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
                    `calc(${circle.cx} ${index % 2 === 0 ? "+" : "-"} 3%)`,
                    circle.cx,
                  ],
                  cy: [
                    circle.cy,
                    `calc(${circle.cy} ${index % 3 === 0 ? "+" : "-"} 2%)`,
                    circle.cy,
                  ],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 12 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: circle.delay,
                }}
              />
            ))}

            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={`ring-${i}`}
                cx="50%"
                cy="50%"
                r={200 + i * 60}
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1"
                strokeOpacity="0.1"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: [0, 20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 15 + i * 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i,
                }}
              />
            ))}

            {[...Array(40)].map((_, i) => (
              <motion.circle
                key={`dot-${i}`}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r={1 + Math.random() * 2}
                fill="#DC2626"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  cy: [
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                  ],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </svg>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-yellow-100/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-2 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-ubuntu"
          >
            <span className="relative">
              Industries
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "180px" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto mt-6 rounded-full"
              />
            </span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {specialisms.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <Link to={item.href}>
                <div className="relative h-80 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-200/30">
                  <motion.img
                    src={item.bg}
                    alt={item.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />

                  <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl md:rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white z-10">
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="text-xl md:text-2xl font-bold leading-tight font-ubuntu">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 pt-2 md:pt-4">
                        <span className="text-sm md:text-base font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 font-ubuntu">
                          Explore
                        </span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="group-hover:translate-x-2 transition-transform duration-300"
                        >
                          <FiArrowRight className="text-yellow-400 group-hover:text-yellow-300 text-lg md:text-xl transition-colors duration-300" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-br from-yellow-600 to-orange-600 backdrop-blur-sm rounded-full px-3 py-1 border border-yellow-300/30">
                      <span className="text-white text-xs font-semibold font-ubuntu">
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
          className="text-center mt-16 md:mt-24"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white px-10 py-4 md:px-12 md:py-5 rounded-full font-semibold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3 font-ubuntu">
              Contact Us
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="group-hover:translate-x-2 transition-transform duration-300"
              >
                <FiArrowRight className="text-xl" />
              </motion.div>
            </span>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-2 bg-yellow-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Specialisms;
