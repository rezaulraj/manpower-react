import React, { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const CountUp = ({ from = 0, to, suffix = "", duration = 2000 }) => {
  const [value, setValue] = React.useState(from);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = Math.floor(progress * (to - from) + from);

            setValue(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setValue(to);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [from, to, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

const Specialisms = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const statsControls = useAnimation();

  useEffect(() => {
    if (isStatsInView) {
      statsControls.start("visible");
    }
  }, [isStatsInView, statsControls]);

  const stats = [
    { value: 500, suffix: "+", label: "Projects Completed", icon: "🎯" },
    { value: 100, suffix: "+", label: "Expert Professionals", icon: "👨‍💼" },
    { value: 98, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
    { value: 50, suffix: "+", label: "Global Partners", icon: "🌎" },
  ];

  const statCardVariants = {
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

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
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
        <div ref={statsRef} className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-ubuntu"
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Success in{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text">
                Numbers
              </span>
            </motion.h3>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isStatsInView ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={statsContainerVariants}
            initial="hidden"
            animate={statsControls}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statCardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 shadow-xl overflow-hidden">
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

                  <div className="relative z-10 text-center">
                    <motion.div
                      className="text-3xl mb-4 font-ubuntu"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={statsControls ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      {stat.icon}
                    </motion.div>

                    <motion.div
                      className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text mb-2 font-ubuntu"
                      initial={{ opacity: 0 }}
                      animate={statsControls ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      <CountUp
                        from={0}
                        to={stat.value}
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    </motion.div>

                    <motion.p
                      className="text-gray-700 text-sm md:text-base font-medium font-ubuntu"
                      initial={{ opacity: 0, y: 10 }}
                      animate={statsControls ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                    >
                      {stat.label}
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

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <p className="text-gray-600 mb-8 text-lg md:text-xl font-ubuntu">
            Ready to transform your workforce?
          </p>

          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white px-10 py-4 md:px-12 md:py-5 rounded-full font-semibold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3 font-ubuntu">
              Start Your Journey
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
