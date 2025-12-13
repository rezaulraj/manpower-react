import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Unlock Your Future .",
    "Empower Your Business.",
    "Transform Your Workforce.",
    "Accelerate Your Growth.",
  ];
  const typingSpeed = 100;
  const eraseSpeed = 50;
  const pauseDuration = 1500;

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeWriter = () => {
      const currentText = texts[textIndex];

      if (!isDeleting && currentIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, typingSpeed);
      } else if (!isDeleting && currentIndex > currentText.length) {
        timeoutId = setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, pauseDuration);
      } else if (isDeleting && currentIndex >= 0) {
        setDisplayText(currentText.substring(0, currentIndex));
        currentIndex--;
        timeoutId = setTimeout(typeWriter, eraseSpeed);
      } else {
        isDeleting = false;
        setTextIndex((prev) => (prev + 1) % texts.length);
        timeoutId = setTimeout(typeWriter, 300);
      }
    };

    timeoutId = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeoutId);
  }, [textIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
    x: Math.random() * 100,
  }));

  return (
    <div className="w-full py-44 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-linear-to-br from-white/5 via-gray-700/10 to-white/3"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-blue-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-white/10 to-white/50 mix-blend-overlay"></div>

        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/30"
              initial={{
                y: -20,
                x: `${particle.x}%`,
                opacity: 0,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: "110vh",
                opacity: [0, 0.4, 0],
                x: [
                  `${particle.x}%`,
                  `${particle.x + Math.sin(particle.id * 0.5) * 10}%`,
                ],
              }}
              transition={{
                y: {
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: particle.delay,
                },
                opacity: {
                  duration: particle.duration,
                  repeat: Infinity,
                  times: [0, 0.3, 1],
                  delay: particle.delay,
                },
                x: {
                  duration: particle.duration * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: particle.delay,
                },
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full container mx-auto text-center"
        >
          <div className="mb-10">
            <motion.h1
              variants={textItemVariants}
              className="font-ubuntu text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="relative">
                <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="inline-block w-[2px] h-16 md:h-20 ml-1 bg-gradient-to-b from-white to-gray-300"
                />
              </span>
            </motion.h1>
          </div>

          <motion.div
            variants={textItemVariants}
            className="relative h-[1px] w-56 md:w-72 mx-auto my-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white to-white/30"></div>
          </motion.div>

          <motion.p
            variants={textItemVariants}
            className="text-2xl md:text-3xl font-medium mb-6 font-ubuntu"
          >
            <span className="text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
              Workforce Solutions Provider
            </span>
          </motion.p>
          <motion.p
            variants={textItemVariants}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-ubuntu"
          >
            <span className="text-white/80">
              Manpower Network – Discover Your Potential with Source Group
              International.
            </span>
          </motion.p>

          <motion.div
            variants={textItemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8"
          >
            <motion.a
              href="/contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative px-10 py-4 md:px-12 md:py-5 rounded-full font-semibold text-lg md:text-xl overflow-hidden font-ubuntu"
            >
              <div className="absolute -inset-0.5 bg-white/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute inset-0 bg-white group-hover:bg-white/95 transition-all duration-300"></div>
              <span className="relative flex items-center gap-3 text-black font-medium">
                Contact Us
                <motion.svg
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </span>
            </motion.a>

            <motion.a
              href="/industries"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative px-10 py-4 md:px-12 md:py-5 rounded-full font-semibold text-lg md:text-xl overflow-hidden border-2 border-white/50 hover:border-white transition-all duration-300 font-ubuntu"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <span className="relative flex items-center gap-3 text-white font-medium">
                Hire Worker Experts
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent"
      />
    </div>
  );
};

export default Hero;
