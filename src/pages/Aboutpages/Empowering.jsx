import React from "react";
import { motion } from "framer-motion";

export default function Empowering() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerParent = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <img
              src="/images/Empowering1.png"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <motion.h4
              variants={fadeUp}
              className="text-[18px] md:text-3xl font-Inter font-bold text-primary mb-4 font-ubuntu"
            >
              ABOUT US
            </motion.h4>

            <motion.h1
              variants={fadeUp}
              className="text-[48px] text-heading font-Inter font-bold font-ubuntu"
            >
              Empowering Success Since 2016
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg font-Inter text-text font-normal mb-6 leading-relaxed font-ubuntu"
            >
              More than a recruitment agency, we connect skilled professionals
              with forward-thinking businesses to drive mutual growth.
            </motion.p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <img
              src="/images/Empowering2.png"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </motion.div>
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <motion.h4
              variants={fadeUp}
              className="text-[24px] text-heading font-Inter font-bold mb-3 font-ubuntu"
            >
              Connecting Talent to Opportunity
            </motion.h4>

            <motion.p
              variants={fadeUp}
              className="text-lg font-Inter text-text font-normal mb-8 leading-relaxed font-ubuntu"
            >
              We know the right people make all the difference. Our mission is
              to match high-performing professionals with organizations where
              they can thrive and deliver results.
            </motion.p>

            <motion.h4
              variants={fadeUp}
              className="text-[24px] text-heading font-bold font-Inter mb-4 font-ubuntu"
            >
              Your Trusted Recruitment Partner
            </motion.h4>

            <motion.p
              variants={fadeUp}
              className="text-lg font-Inter text-gray-600 leading-relaxed font-ubuntu"
            >
              With years of industry experience, we provide reliable, tailored
              hiring solutions that help businesses grow and give candidates the
              careers they deserve.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
