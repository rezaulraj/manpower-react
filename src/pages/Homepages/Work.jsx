import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const imageVariants = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.6,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    x: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

const Work = () => {
  const workCards = [
    {
      id: 1,
      title: "Staffing",
      image: "/images/work1.png",
      color: "bg-sky-400",
      hoverColor: "bg-sky-500",
      href: "/industries",
    },
    {
      id: 2,
      title: "Outsourcing",
      image: "/images/work2.png",
      color: "bg-yellow-400",
      hoverColor: "bg-yellow-500",
      href: "/industries",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-[#201D1F]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={containerVariants}>
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block border-b-4 border-yellow-400 pb-2">
              Work with Us.
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            We provide the talent you need to excel. Let is explore how we can
            work together to make it happen.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {workCards.map((card) => (
            <motion.div
              key={card.id}
              className="relative rounded-2xl overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative h-80 overflow-hidden"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <motion.div
                  className="absolute bottom-6 right-6"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <a
                    href={card.href}
                    className={`${card.color} text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:${card.hoverColor} transition-colors duration-300 shadow-lg`}
                  >
                    {card.title}
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FiArrowRight />
                    </motion.span>
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                className={`absolute inset-0 rounded-2xl ${card.color} opacity-0 blur-xl -z-10`}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work;
