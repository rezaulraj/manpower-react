
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function SuccessStory() {
  const metrics = [
    {
      value: 750,
      suffix: "+",
      description: "successful placement",
      icon: "🎯",
    },
    {
      value: 65,
      suffix: "%",
      description: "interview success rate",
      icon: "📈",
    },
    { value: 7, suffix: "+", description: "countries", icon: "🌎" },
    {
      value: 78,
      suffix: "%",
      description: "NPS (Customer Satisfaction)",
      icon: "⭐",
    },
    { value: 15, suffix: "", description: "industry awards", icon: "🏆" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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

  const containerVariants = {
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
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-gray-900 to-[#201D1F]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let these numbers tell our{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">
              success story
            </span>
            .
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-4xl mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={controls ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    {metric.icon}
                  </motion.div>

                  <motion.div
                    className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-3"
                    initial={{ opacity: 0 }}
                    animate={controls ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    <CountUp
                      from={0}
                      to={metric.value}
                      suffix={metric.suffix}
                    />
                  </motion.div>

                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={controls ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  >
                    {metric.description}
                  </motion.p>
                </div>

                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
                  animate={{
                    y: [0, -8, 0],
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
    </section>
  );
}


function CountUp({ from, to, suffix }) {
  const [value, setValue] = React.useState(from);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
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
  }, [from, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
