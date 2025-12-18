import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const fullText = "Contact";

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const typeWriter = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, 100);
      } else {
        setIsComplete(true);
      }
    };

    timeoutId = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
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

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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

  const textVariants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cursorVariants = {
    blink: {
      opacity: [1, 0.3, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const floatingElementsVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const gradientTextVariants = {
    hidden: {
      backgroundPosition: "0% 50%",
    },
    visible: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative py-32 md:py-44 bg-gradient-to-br from-gray-900 via-[#201D1F] to-gray-900 overflow-hidden flex items-center">
      <motion.div
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/images/contact.avif"
          alt="Contact Hero"
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-l from-[#201D1F] via-transparent to-[#201D1F]/80" />
      </motion.div>

      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-end w-full px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 max-w-4xl text-right"
        >
          <motion.div variants={textVariants} className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight min-h-[1.2em]">
              <div className="relative inline-block">
                <motion.span
                  variants={gradientTextVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-gradient-to-r from-[#44B6DA] via-yellow-400 to-[#44B6DA] bg-[length:200%_auto] bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% auto" }}
                >
                  {displayText}
                  {isComplete && (
                    <motion.span
                      variants={cursorVariants}
                      animate="blink"
                      className="inline-block w-0.5 h-[1em] ml-1 bg-gradient-to-b from-[#44B6DA] to-yellow-400"
                    />
                  )}
                </motion.span>
                <br />
                <span className="text-white font-ubuntu">Us.</span>
              </div>
            </h1>
          </motion.div>

          <motion.p
            variants={titleVariants}
            className="text-lg md:text-xl text-white/90 leading-relaxed font-sans text-right max-w-2xl"
          >
            We're always up for a conversation to see how we can help. Choose a
            city below to get in touch with your local team of experts.
          </motion.p>

          <motion.div variants={titleVariants} className="text-right pt-4">
            <motion.a
              href="#contact-form"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#44B6DA] to-yellow-400 text-gray-900 px-8 py-3.5 rounded-lg text-lg font-semibold transition-all duration-200 font-ubuntu shadow-lg"
            >
              Get in Touch
              <motion.svg
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#201D1F] to-transparent z-5" />
    </section>
  );
}
