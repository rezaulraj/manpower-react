import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const images = [
  "/images/nurse.jpg",
  "/images/hotel-staff.jpg",
  "/images/supershop.jpg",
  "/images/construction.jpg",
  "/images/rajmistry.jpg",
  "/images/workeriron.jpg",
];

export default function OurService() {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setDirection(0);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentImage ? 0 : 1);
    setCurrentImage(index);
  };

  const goToNext = () => {
    setDirection(0);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction === 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: (direction) => ({
      x: direction === 0 ? -300 : 300,
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

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

  const dotVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "#D1D5DB",
    },
    active: {
      scale: 1.2,
      backgroundColor: "#0EA5E9",
      boxShadow: "0 0 10px rgba(14, 165, 233, 0.5)",
    },
    hover: {
      scale: 1.4,
      backgroundColor: "#38BDF8",
    },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-12 lg:gap-20"
        >
          <motion.div variants={textVariants} className="space-y-8">
            <div>
              <motion.div
                variants={textVariants}
                className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              >
                <span className="text-white text-sm font-semibold tracking-wider font-ubuntu">
                  TALENT SOLUTIONS
                </span>
              </motion.div>

              <motion.h2
                variants={textVariants}
                className="text-gray-900 font-ubuntu text-start lg:text-5xl md:text-4xl text-3xl font-bold leading-tight"
              >
                Talent That Drives{" "}
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
                  Success
                </motion.span>
              </motion.h2>
            </div>

            <motion.p
              variants={paragraphVariants}
              className="text-gray-700 text-start text-lg font-medium leading-relaxed font-ubuntu"
            >
              From customer service to operations, we specialize in sourcing and
              placing the people who make an impact. Whether you need managers,
              support staff, or specialized workers, we help you build a strong
              and dedicated workforce where it matters most.
            </motion.p>
            <motion.p
              variants={paragraphVariants}
              className="text-gray-600 text-start text-base mb-8 font-normal leading-relaxed font-ubuntu"
            >
              We connect businesses with dependable, skilled professionals who
              keep operations running smoothly.
            </motion.p>

            <motion.div variants={paragraphVariants} className="inline-block">
              <a
                href="/services"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl font-ubuntu"
              >
                <span className="flex items-center gap-3">
                  View All Services
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
          </motion.div>

          <motion.div variants={imageVariants} className="relative">
            <div className="relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 shadow-2xl z-20"
              >
                <div className="absolute inset-2 bg-white/90 rounded-xl flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm font-ubuntu">
                    Quality
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
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl -rotate-12 shadow-2xl z-20"
              >
                <div className="absolute inset-2 bg-white/90 rounded-xl flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-sm font-ubuntu">
                    Trust
                  </span>
                </div>
              </motion.div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-white group h-[400px]">
                <AnimatePresence mode="popLayout" custom={direction}>
                  <motion.div
                    key={images[currentImage]}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={images[currentImage]}
                      alt="Frontline workers"
                      className="object-cover w-full h-full"
                    />

                    {/* Image overlay with title */}
                    <motion.div
                      className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="text-center">
                        <h3 className="text-lg font-semibold mb-2 font-ubuntu">
                          Frontline Workforce
                        </h3>
                        <p className="text-sm opacity-90">
                          {currentImage + 1} / {images.length}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <motion.button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                  onClick={goToPrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ←
                </motion.button>
                <motion.button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                  onClick={goToNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  →
                </motion.button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      className="w-3 h-3 rounded-full cursor-pointer"
                      variants={dotVariants}
                      initial="inactive"
                      animate={index === currentImage ? "active" : "inactive"}
                      whileHover="hover"
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Same animated bottom waves as Banner */}
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
