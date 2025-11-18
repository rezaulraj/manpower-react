import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
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
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
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

  const titleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const borderVariants = {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const dotVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "#6B7280",
      transition: {
        duration: 0.3,
      },
    },
    active: {
      scale: 1.2,
      backgroundColor: "#3B82F6",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.4,
      backgroundColor: "#60A5FA",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-[#201D1F]">
      <div className="container max-w-7xl mx-auto px-5">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="inline-block mb-4" variants={titleVariants}>
            <h2 className="text-4xl font-Inter md:text-5xl font-bold text-white mb-4 inline-block pb-2 relative">
              Our Services
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                variants={borderVariants}
              />
            </h2>
          </motion.div>
          <motion.p
            className="text-[32px] font-Inter font-bold md:text-xl text-white/80 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            We connect businesses with dependable, skilled professionals who
            keep operations running smoothly.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-[32px] font-Inter font-bold text-white mb-4"
              variants={itemVariants}
            >
              Talent That Drives Success
            </motion.h4>
            <motion.p
              className="text-white font-Inter font-normal mb-6"
              variants={itemVariants}
            >
              From customer service to operations, we specialize in sourcing and
              placing the people who make an impact. Whether you need managers,
              support staff, or specialized workers, we help you build a strong
              and dedicated workforce where it matters most.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-xl shadow-xl h-[400px] group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
                  className="object-cover rounded-xl"
                />
                <motion.div
                  className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      Frontline Workforce
                    </h3>
                    <p className="text-sm opacity-90">
                      {currentImage + 1} / {images.length}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={goToPrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            <motion.button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={goToNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  className="w-3 h-3 rounded-full"
                  variants={dotVariants}
                  initial="inactive"
                  animate={index === currentImage ? "active" : "inactive"}
                  whileHover="hover"
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
