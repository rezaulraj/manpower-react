import React from "react";
import { motion } from "framer-motion";

export default function SkilledTalent() {
  const skills = [
    { name: "Candidate Sourcing", percentage: 80, icon: "🔍" },
    { name: "Interview Coordination", percentage: 60, icon: "🤝" },
    { name: "Job Description Writing", percentage: 60, icon: "📝" },
    { name: "Offer Negotiation", percentage: 75, icon: "💼" },
    { name: "Recruitment Strategy", percentage: 55, icon: "🎯" },
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

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      x: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillBarVariants = {
    hidden: {
      width: 0,
    },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  const counterVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: (percentage) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3 + (percentage / 100) * 0.5,
      },
    }),
  };

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2/3">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{
              d: "M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z",
            }}
            animate={{
              d: [
                "M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z",
                "M0,180 Q300,120 600,180 T1200,180 L1200,400 L0,400 Z",
                "M0,220 Q300,80 600,220 T1200,220 L1200,400 L0,400 Z",
                "M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="url(#bottomGradient1)"
            fillOpacity="0.15"
          />

          <motion.path
            initial={{
              d: "M0,250 Q400,150 800,250 T1200,250 L1200,400 L0,400 Z",
            }}
            animate={{
              d: [
                "M0,250 Q400,150 800,250 T1200,250 L1200,400 L0,400 Z",
                "M0,230 Q400,170 800,230 T1200,230 L1200,400 L0,400 Z",
                "M0,270 Q400,130 800,270 T1200,270 L1200,400 L0,400 Z",
                "M0,250 Q400,150 800,250 T1200,250 L1200,400 L0,400 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            fill="url(#bottomGradient2)"
            fillOpacity="0.2"
          />

          <motion.path
            initial={{
              d: "M0,300 Q500,200 1000,300 T1200,300 L1200,400 L0,400 Z",
            }}
            animate={{
              d: [
                "M0,300 Q500,200 1000,300 T1200,300 L1200,400 L0,400 Z",
                "M0,280 Q500,220 1000,280 T1200,280 L1200,400 L0,400 Z",
                "M0,320 Q500,180 1000,320 T1200,320 L1200,400 L0,400 Z",
                "M0,300 Q500,200 1000,300 T1200,300 L1200,400 L0,400 Z",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            fill="url(#bottomGradient3)"
            fillOpacity="0.25"
          />
          <defs>
            <linearGradient
              id="bottomGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>

            <linearGradient
              id="bottomGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>

            <linearGradient
              id="bottomGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl rotate-12 shadow-xl"
            >
              <div className="absolute inset-2 bg-white/90 rounded-xl flex items-center justify-center">
                <span className="text-cyan-600 font-bold text-xs">Expert</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl -rotate-12 shadow-xl"
            >
              <div className="absolute inset-2 bg-white/90 rounded-xl flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xs font-ubuntu">
                  Trusted
                </span>
              </div>
            </motion.div>

            <img
              src="/images/skilledtalent.png"
              alt="Skilled Talent"
              className="w-full rounded-3xl shadow-2xl border-8 border-white"
            />
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-ubuntu">
                <span className="text-white text-sm font-semibold tracking-wider font-ubuntu">
                  TOP SKILLS & EXPERTISE
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-ubuntu">
                Empowering Businesses with{" "}
                <span className="text-transparent bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text">
                  the Right Talent
                </span>
              </h1>

              <p className="text-lg text-gray-700 max-w-2xl mb-8 font-ubuntu">
                Whether you are a professional ready for your next career move
                or a company looking to build a high-performing team, we are
                here to connect you with success.
              </p>
            </motion.div>

            <motion.div className="space-y-8" variants={containerVariants}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-ubuntu">{skill.icon}</span>
                      <span className="font-semibold text-gray-900 text-lg font-ubuntu">
                        {skill.name}
                      </span>
                    </div>
                    <motion.span
                      className="text-gray-600 font-medium font-ubuntu"
                      variants={counterVariants}
                      custom={skill.percentage}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {skill.percentage}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full"
                      variants={skillBarVariants}
                      custom={skill.percentage}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
