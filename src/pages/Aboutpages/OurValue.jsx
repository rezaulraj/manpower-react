import React from "react";
import { motion } from "framer-motion";

const OurValue = () => {
  const values = [
    {
      title: "Simplicity",
      items: [
        "Communicating with respect",
        "Keeping processes clear and uncomplicated",
        "Being straightforward and honest",
      ],
    },
    {
      title: "Progress",
      items: [
        "Striving for continuous improvement",
        "Embracing challenges with confidence",
        "Finding solutions that work",
      ],
    },
    {
      title: "Excellence (A+ Distinction)",
      items: [
        "Holding ourselves to the highest standards",
        "Going the extra mile for clients and candidates",
        "Taking pride in every placement we make",
      ],
    },
  ];

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

  const headerVariants= {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const borderVariants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      backgroundColor: "#4A4A4A",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (itemIndex) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: itemIndex * 0.1,
      },
    }),
  };

  const bulletVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <section className="bg-[#4D4D4E] py-20">
      <div className="container mx-auto px-5 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="inline-block mb-4" variants={headerVariants}>
            <motion.h2
              className="lg:text-[40px] font-Inter md:text-5xl font-bold text-white mb-4 inline-block pb-2 relative"
              variants={titleVariants}
            >
              Our Values
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary"
                variants={borderVariants}
              />
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg text-white font-normal mb-12 leading-relaxed"
            variants={headerVariants}
          >
            Our core values guide everything we do. Simplicity, Progress, and
            Excellence are principles we live by every day, shaping how we
            connect talent with opportunity and deliver exceptional recruitment
            solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-[#3A3A3A] p-6 rounded-lg cursor-pointer"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.h3
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {value.title}
              </motion.h3>
              <motion.ul className="space-y-3" variants={containerVariants}>
                {value.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={itemIndex}
                  >
                    <motion.span
                      className="text-primary mr-2 text-xl"
                      variants={bulletVariants}
                    >
                      •
                    </motion.span>
                    <motion.span
                      className="text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.7 + index * 0.1 + itemIndex * 0.1,
                      }}
                    >
                      {item}
                    </motion.span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurValue;
