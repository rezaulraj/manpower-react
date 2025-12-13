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
      color: "from-sky-400 to-cyan-500",
      hoverColor: "from-sky-500 to-cyan-600",
      href: "/industries",
    },
    {
      id: 2,
      title: "Outsourcing",
      image: "/images/work2.png",
      color: "from-yellow-400 to-amber-500",
      hoverColor: "from-yellow-500 to-amber-600",
      href: "/industries",
    },
  ];

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2/3">
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
              fill="url(#waveGradient1)"
              fillOpacity="0.3"
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
              fill="url(#waveGradient2)"
              fillOpacity="0.25"
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
              fill="url(#waveGradient3)"
              fillOpacity="0.2"
            />

            <defs>
              <linearGradient
                id="waveGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>

              <linearGradient
                id="waveGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#FBBF24" />
              </linearGradient>

              <linearGradient
                id="waveGradient3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-100 via-transparent to-transparent"></div>
        </div>

        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? "#0EA5E9" : "#FBBF24",
                left: `${(i * 6.66) % 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 inline-block relative font-ubuntu">
              Work with Us
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "180px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-2 bg-gradient-to-r from-sky-400 to-yellow-400 mx-auto mt-4 rounded-full"
              />
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-ubuntu"
            variants={itemVariants}
          >
            We provide the talent you need to excel. Let's explore how we can
            work together to make it happen.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {workCards.map((card) => (
            <motion.div
              key={card.id}
              className="relative rounded-3xl overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative h-80 md:h-96 overflow-hidden"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${card.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />

                <motion.div
                  className="absolute bottom-6 right-6 z-20"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <a
                    href={card.href}
                    className={`bg-gradient-to-r ${card.color} text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 hover:shadow-2xl transition-all duration-300 shadow-lg group-hover:scale-105 font-ubuntu`}
                  >
                    {card.title}
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <FiArrowRight className="text-lg" />
                    </motion.span>
                  </a>
                </motion.div>
              </motion.div>

              <div className="absolute inset-0 p-6 md:p-8 flex items-end z-10">
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-ubuntu">
                    {card.title} Solutions
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-ubuntu">
                    Expert talent solutions tailored to your business needs
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
