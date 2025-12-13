import React from "react";
import { motion } from "framer-motion";

const OurValue = () => {
  const values = [
    {
      title: "Simplicity",
      items: [
        "Communicating with respect",
        "Keeping processes clear and uncomplicated",
        "Being straightforward and honest",
      ],
      icon: "✨",
    },
    {
      title: "Progress",
      items: [
        "Striving for continuous improvement",
        "Embracing challenges with confidence",
        "Finding solutions that work",
      ],
      icon: "🚀",
    },
    {
      title: "Excellence (A+ Distinction)",
      items: [
        "Holding ourselves to the highest standards",
        "Going the extra mile for clients and candidates",
        "Taking pride in every placement we make",
      ],
      icon: "🏆",
    },
  ];

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (itemIndex) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: itemIndex * 0.1,
      },
    }),
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50"></div>
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.2" />
                <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
              </radialGradient>

              <linearGradient
                id="goldGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0.05" />
              </linearGradient>

              <linearGradient
                id="orangeGradient"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#EA580C" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.15" />
              </linearGradient>

              <linearGradient
                id="redGradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#EA580C" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            <motion.circle
              cx="50%"
              cy="50%"
              r="400"
              fill="url(#sunGlow)"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.25, 0.15],
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
                  duration: 15 + index,
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
                r={250 + i * 80}
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1"
                strokeOpacity="0.08"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: [0, 20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i,
                }}
              />
            ))}

            {[...Array(30)].map((_, i) => (
              <motion.circle
                key={`dot-${i}`}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r={1 + Math.random() * 2}
                fill="#DC2626"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.2, 0],
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

        <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-ubuntu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text">
              Core Values
            </span>
          </motion.h3>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <motion.p
            className="text-lg text-gray-700 font-normal mb-8 leading-relaxed max-w-3xl mx-auto font-ubuntu"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our core values guide everything we do. Simplicity, Progress, and
            Excellence are principles we live by every day, shaping how we
            connect talent with opportunity and deliver exceptional recruitment
            solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200/50 shadow-xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-red-500/20 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-4xl mb-6 flex justify-center font-ubuntu"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {value.icon}
                  </motion.div>

                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-center mb-6 font-ubuntu"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {value.title}
                  </motion.h3>

                  <motion.ul className="space-y-4 font-ubuntu">
                    {value.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-start font-ubuntu"
                        variants={listItemVariants}
                        custom={itemIndex}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <motion.span
                          className="text-yellow-600 mr-3 text-xl font-ubuntu"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.7 + index * 0.1 + itemIndex * 0.1,
                            type: "spring",
                          }}
                        >
                          •
                        </motion.span>
                        <span className="text-gray-700 text-base md:text-lg">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full opacity-60"
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400/30 via-orange-400/30 to-red-400/30"
            style={{
              left: `${10 + i * 25}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`bottom-float-${i}`}
            className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-red-400/20 via-orange-400/20 to-yellow-400/20"
            style={{
              right: `${15 + i * 20}%`,
              bottom: `${10 + i * 10}%`,
            }}
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default OurValue;
