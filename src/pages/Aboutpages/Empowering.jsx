import React from "react";
import { motion } from "framer-motion";

export default function Empowering() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerParent = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50"></div>

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="empoweringGoldGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.03" />
            </linearGradient>

            <linearGradient
              id="empoweringOrangeGradient"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#EA580C" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {[
            {
              cx: "10%",
              cy: "20%",
              r: 100,
              gradient: "empoweringGoldGradient",
              delay: 0,
            },
            {
              cx: "90%",
              cy: "30%",
              r: 120,
              gradient: "empoweringOrangeGradient",
              delay: 3,
            },
            {
              cx: "20%",
              cy: "80%",
              r: 80,
              gradient: "empoweringGoldGradient",
              delay: 1,
            },
            {
              cx: "85%",
              cy: "70%",
              r: 150,
              gradient: "empoweringOrangeGradient",
              delay: 4,
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
                duration: 20 + index * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: circle.delay,
              }}
            />
          ))}
        {[...Array(15)].map((_, i) => (
            <motion.circle
              key={`empowering-dot-${i}`}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={0.5 + Math.random() * 1.5}
              fill="#DC2626"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.15, 0],
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

        <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/images/Empowering1.png"
                alt="Our Team"
                width={600}
                height={400}
                className="relative rounded-xl shadow-2xl object-cover w-full h-auto border-2 border-yellow-200/50"
              />

              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent"
                animate={{
                  borderColor: [
                    "rgba(251, 191, 36, 0)",
                    "rgba(251, 191, 36, 0.3)",
                    "rgba(251, 191, 36, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
              <span className="text-lg font-semibold text-yellow-600 uppercase tracking-wider font-ubuntu">
                ABOUT US
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[48px] font-bold mb-6 font-ubuntu"
            >
              Empowering Success Since{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text">
                2016
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-xl p-8 border border-yellow-200/50 shadow-lg"
            >
              <motion.p
                variants={fadeUp}
                className="text-xl text-gray-700 mb-6 leading-relaxed font-ubuntu"
              >
                More than a recruitment agency, we connect skilled professionals
                with forward-thinking businesses to drive mutual growth.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full border border-yellow-200">
                  <span className="text-sm font-semibold text-yellow-800 font-ubuntu">
                    🎯 500+ Placements
                  </span>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full border border-orange-200">
                  <span className="text-sm font-semibold text-orange-800 font-ubuntu">
                    ⭐ 98% Success Rate
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/images/Empowering2.png"
                alt="Our Mission"
                width={600}
                height={400}
                className="relative rounded-xl shadow-2xl object-cover w-full h-auto border-2 border-orange-200/50"
              />
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent"
                animate={{
                  borderColor: [
                    "rgba(234, 88, 12, 0)",
                    "rgba(234, 88, 12, 0.3)",
                    "rgba(234, 88, 12, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-1/2"
          >
            <motion.h4
              variants={fadeUp}
              className="text-[32px] font-bold mb-6 font-ubuntu"
            >
              Connecting{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                Talent
              </span>{" "}
              to{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text">
                Opportunity
              </span>
            </motion.h4>

            <motion.div
              variants={fadeUp}
              className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 border border-orange-200/50 shadow-lg"
            >
              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-700 leading-relaxed font-ubuntu"
              >
                We know the right people make all the difference. Our mission is
                to match high-performing professionals with organizations where
                they can thrive and deliver results.
              </motion.p>

              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.h4
              variants={fadeUp}
              className="text-[32px] font-bold mb-6 font-ubuntu"
            >
              Your Trusted{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text">
                Recruitment Partner
              </span>
            </motion.h4>

            <motion.div
              variants={fadeUp}
              className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-xl p-6 border border-red-200/50 shadow-lg"
            >
              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-700 leading-relaxed font-ubuntu"
              >
                With years of industry experience, we provide reliable, tailored
                hiring solutions that help businesses grow and give candidates
                the careers they deserve.
              </motion.p>

              <motion.div
                className="absolute bottom-4 left-4 w-2 h-2 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent my-20"
        />
      </div>
    </section>
  );
}
