import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaSmile,
  FaStar,
  FaTrophy,
} from "react-icons/fa";

const Counter = ({ end, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          setHasAnimated(true);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [hasAnimated, end, duration]);

  return (
    <div className="text-3xl md:text-4xl font-bold">
      {prefix}
      {count}
      {suffix}
    </div>
  );
};

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: {
      y: 100,
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
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-12 lg:gap-20"
        >
          <motion.div variants={imageVariants} className="relative">
            <div className="relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 shadow-2xl"
              >
                <div className="absolute inset-2 bg-white/90 rounded-xl flex items-center justify-center">
                  <FaTrophy className="text-orange-600 text-lg" />
                  <span className="text-orange-600 font-bold text-sm ml-2">
                    Top Rated
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl -rotate-12 shadow-2xl"
              >
                <div className="absolute inset-2 bg-white/90 rounded-xl flex items-center justify-center">
                  <FaStar className="text-emerald-600" />
                  <span className="text-emerald-600 font-bold text-sm ml-1">
                    4.9
                  </span>
                </div>
              </motion.div>

              <img
                src="/images/banner.jpg"
                alt="Expert professionals collaborating"
                width={600}
                height={600}
                className="w-full rounded-3xl h-auto relative z-10 shadow-2xl border-8 border-white"
              />
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-8">
            <div>
              <motion.div
                variants={textVariants}
                className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              >
                <span className="text-white text-sm font-semibold tracking-wider">
                  PREMIUM TALENT SOLUTIONS
                </span>
              </motion.div>

              <motion.h2
                variants={textVariants}
                className="text-gray-900 text-start lg:text-5xl md:text-4xl text-3xl font-bold leading-tight"
              >
                Empowering Innovation with{" "}
                <motion.span
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent"
                >
                  Expert Talent
                </motion.span>
              </motion.h2>
            </div>

            <motion.p
              variants={paragraphVariants}
              className="text-gray-700 text-start text-lg font-medium leading-relaxed"
            >
              We connect skilled professionals with the right opportunities to
              achieve your goals and create lasting value for your business.
            </motion.p>

            <motion.p
              variants={paragraphVariants}
              className="text-gray-600 text-start text-base mb-8 font-normal leading-relaxed"
            >
              With our Manpower Network solutions, talent management becomes
              streamlined, scalable, and smart.
            </motion.p>

            <motion.div variants={paragraphVariants} className="inline-block">
              <a
                href="/about"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl"
              >
                <span className="flex items-center gap-3">
                  More About Us
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-block"
                  >
                    <FaArrowRight />
                  </motion.span>
                </span>
              </a>
            </motion.div>

            <motion.div
              variants={paragraphVariants}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200"
            >
              {[
                {
                  value: 500,
                  suffix: "+",
                  label: "Projects",
                  color: "from-cyan-500 to-blue-600",
                  duration: 2,
                  icon: <FaChartLine />,
                },
                {
                  value: 100,
                  suffix: "+",
                  label: "Experts",
                  color: "from-purple-500 to-pink-600",
                  duration: 2.5,
                  icon: <FaUsers />,
                },
                {
                  value: 98,
                  suffix: "%",
                  label: "Satisfaction",
                  color: "from-green-500 to-emerald-600",
                  duration: 3,
                  icon: <FaSmile />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div
                    className={`p-6 rounded-2xl bg-gradient-to-br ${stat.color} relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />

                    <div className="relative flex flex-col items-center">
                      <div className="text-white text-2xl mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-white text-4xl md:text-5xl font-black mb-2">
                        <Counter
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={stat.duration}
                        />
                      </div>
                      <div className="text-white/90 text-sm font-medium tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2/2">
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
    </section>
  );
}
