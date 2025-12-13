import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    text: "Manpower Network has been a game-changer for our hiring process. They consistently deliver high-quality candidates who fit both the skill requirements and our company culture. Their professionalism and speed are unmatched.",
    author: "Employer – Contraction Industry",
  },
  {
    id: 2,
    text: "We needed to scale our workforce quickly for a major project, and Manpower Network delivered exactly what we needed. The team's efficiency and understanding of our industry made all the difference.",
    author: "Employer – Agreculture Industry",
  },
  {
    id: 3,
    text: "Partnering with Manpower Network has significantly improved our recruitment strategy. Their ability to source top-tier talent, even for niche roles, has given us a competitive advantage in the market.",
    author: "Employer – Wherehouse",
  },
];

const WhyOurCustomers = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const reviewVariants = {
    enter: {
      opacity: 0,
      x: 100,
    },
    center: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -100,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      className="relative py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/bannerwhy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />

      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="container max-w-7xl mx-auto px-5 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-white relative z-30"
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl md:text-[56px] font-bold mb-6"
              variants={itemVariants}
            >
              Why Our Customers Work With Us.
            </motion.h2>

            <motion.div
              className="w-20 h-1 bg-white mb-8"
              variants={itemVariants}
            />

            <motion.div variants={itemVariants}>
              <a
                href="/reviews"
                className="inline-block text-white rounded-4xl border-2 border-primary py-4 px-8 cursor-pointer font-semibold hover:underline text-lg transition-all duration-300 hover:scale-105"
              >
                Customer Reviews →
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-8 rounded-lg shadow-lg h-full min-h-[300px] relative"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[currentReview].id}
                variants={reviewVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col justify-between"
              >
                <div className="mb-8">
                  <motion.div
                    className="w-12 h-1 bg-gray-700 mb-6"
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  />
                  <motion.p
                    className="text-gray-700 text-[16px] mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {reviews[currentReview].text}
                  </motion.p>
                </div>
                <motion.p
                  className="text-secendary font-semibold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {reviews[currentReview].author}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="absolute bottom-4 right-8 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentReview === index ? "bg-primary" : "bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyOurCustomers;
