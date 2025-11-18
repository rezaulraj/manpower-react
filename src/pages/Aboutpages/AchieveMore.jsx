import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AchieveMore() {
  const [activeTab, setActiveTab] = useState("Our Mission");

  const content = {
    "Our Mission": {
      image: "/images/moretab.png",
      items: [
        {
          title: "Empowering Success Through Connections",
          description:
            "We bridge the gap between talent and opportunity, helping businesses grow and professionals achieve their career goals.",
        },
        {
          title: "Connecting Talent, Creating Opportunities",
          description:
            "Our focus is simply to match the right people with the right roles through tailored recruitment solutions.",
        },
        {
          title: "Committed to Excellence",
          description:
            "Passionate about building meaningful connections, we deliver innovative and effective staffing services that drive results.",
        },
        {
          title: "Building Stronger Teams, Shaping Bright Careers",
          description:
            "We help organizations thrive and individuals succeed by providing high-quality staffing solutions that promote growth.",
        },
      ],
    },

    "Our Vision": {
      image: "/images/moretab.png",
      items: [
        {
          title: "Vision Statement 1",
          description:
            "We envision a future where businesses and professionals flourish through strong partnerships, innovative solutions, and shared success.",
        },
        {
          title: "Vision Statement 2",
          description:
            "Our vision is to be a global leader in recruitment, recognized for delivering value-driven results and connecting exceptional talent with opportunity.",
        },
      ],
    },

    "Our Solution": {
      image: "/images/moretab.png",
      items: [
        {
          title: "Customized Talent Solutions",
          description:
            "We take the time to understand your business needs and deliver tailored staffing strategies that create long-term success.",
        },
        {
          title: "Efficient, Results-Driven Recruitment",
          description:
            "Through proven methods and a personalized approach, we streamline the hiring process to quickly connect you with the right talent.",
        },
      ],
    },
  };

  /* ------------------ Variants ------------------ */

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: 50,
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      },
    }),
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* ---------------- Image Section ---------------- */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="rounded-xl overflow-hidden"
              >
                <img
                  src={content[activeTab].image}
                  alt={activeTab}
                  className="w-full h-full object-cover py-4"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ---------------- Tabs + Content Section ---------------- */}
          <div className="w-full lg:w-1/2">
            <motion.div
              className="flex gap-6 flex-wrap"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
            >
              {Object.keys(content).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  variants={tabVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`relative font-Inter font-semibold px-4 py-2 text-[20px] transition-colors ${
                    activeTab === tab
                      ? "text-primary"
                      : "text-secendary hover:text-primary"
                  }`}
                >
                  {tab}

                  {activeTab === tab && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                      variants={underlineVariants}
                      initial="hidden"
                      animate="visible"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* ---------------- Dynamic Text Content ---------------- */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6 mt-6"
              >
                {content[activeTab].items.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="border-l-4 border-transparent hover:border-primary pl-4 transition-colors"
                  >
                    <h3 className="text-[22px] font-Inter font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-text font-normal text-[16px] mt-1">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
