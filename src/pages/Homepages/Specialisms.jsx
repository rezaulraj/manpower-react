import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Industries } from "../../data/Industries";
import { Link } from "react-router-dom";

const Specialisms = () => {
  const specialisms = Industries;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
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
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { x: -10, opacity: 0 },
    hover: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-[#2D2D2D]">
      <div className="container mx-auto px-4">
        {/* TITLE + SUBTITLE */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block"
          >
            Industries
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-[#44B6DA] to-purple-500 mx-auto mt-4 rounded-full"
            />
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Our expertise lies in connecting highly skilled talent with
            visionary businesses leading change across industries.
          </motion.p>
        </div>

        {/* CARDS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {specialisms.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* FIXED: Remove the leading slash since href already includes full path */}
              <Link to={item.href}>
                <div className="relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-2xl">
                  {/* IMAGE */}
                  <img
                    src={item.bg}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* DARK GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* BLUE/PURPLE HOVER OVERLAY */}
                  <motion.div
                    variants={overlayVariants}
                    className="absolute inset-0 bg-gradient-to-br from-[#44B6DA]/20 to-purple-500/20"
                  />

                  {/* CONTENT */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                    <motion.div
                      variants={contentVariants}
                      className="space-y-3"
                    >
                      <h3 className="text-xl font-bold leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-200 line-clamp-2 leading-relaxed">
                        {item.shortdesc}
                      </p>

                      <motion.div
                        variants={iconVariants}
                        className="flex items-center gap-2 pt-2"
                      >
                        <span className="text-sm font-semibold text-[#44B6DA]">
                          Explore More
                        </span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <FiArrowRight className="text-[#44B6DA] text-lg" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* CARD NUMBER */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-xs font-semibold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CONTACT CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Can not find what you are looking for?
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-black transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us for Custom Solutions
            <FiArrowRight className="text-lg" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Specialisms;