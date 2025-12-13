import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaChartLine,
  FaBriefcase,
  FaUsers,
  FaMoneyBillWave,
  FaCogs,
} from "react-icons/fa";

export default function WeProvide() {
  const services = [
    {
      title: "Recruitment",
      icon: <FaSearch className="text-3xl mb-4" />,
      description:
        "From entry-level to executive positions, we connect the right talent with the right opportunities for long-term success.",
    },
    {
      title: "Career Growth",
      icon: <FaChartLine className="text-3xl mb-4" />,
      description:
        "We support candidates in building career paths that align with their goals and help them reach their full potential.",
    },
    {
      title: "Gigs & Short-Term Roles",
      icon: <FaBriefcase className="text-3xl mb-4" />,
      description:
        "Whether it's a project-based role or temporary assignment, we help you find flexible opportunities that fit your lifestyle.",
    },
    {
      title: "HR Solutions",
      icon: <FaUsers className="text-3xl mb-4" />,
      description:
        "We offer customized human resource services that simplify hiring, onboarding, and workforce management.",
    },
    {
      title: "Payroll Services",
      icon: <FaMoneyBillWave className="text-3xl mb-4" />,
      description:
        "Our efficient payroll solutions ensure accurate, timely payments and compliance with all regulations.",
    },
    {
      title: "Workforce Systems",
      icon: <FaCogs className="text-3xl mb-4" />,
      description:
        "We provide innovative workforce management strategies to keep your team productive, engaged, and growing.",
    },
  ];

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

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
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
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const iconVariants = {
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
        duration: 0.6,
        type: "spring",
        stiffness: 100,
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

        <div className="absolute inset-0 bg-linear-to-t from-yellow-100/20 via-transparent to-transparent"></div>
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
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What We{" "}
            <span className="text-transparent bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text">
              Provide
            </span>
          </motion.h3>
          <motion.div
            className="w-24 h-1 bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <motion.p
            className="text-lg text-gray-700 font-normal mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We guide professionals in developing their skills, boosting
            confidence, and preparing for career advancement.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative"
            >
              <div className="relative bg-linear-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200/50 shadow-xl overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-linear-to-r from-yellow-400/20 to-red-500/20 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="flex justify-center mb-6"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                  >
                    <div className="text-transparent bg-linear-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text">
                      {service.icon}
                    </div>
                  </motion.div>
                  <motion.h2
                    className="text-2xl font-bold mb-4 text-center text-transparent bg-linear-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {service.title}
                  </motion.h2>

                  <motion.p
                    className="text-gray-700 text-base leading-relaxed text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {service.description}
                  </motion.p>
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
      </div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute w-2 h-2 rounded-full bg-linear-to-r from-yellow-400/50 to-red-500/50"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </section>
  );
}
