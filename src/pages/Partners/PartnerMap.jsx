import React from "react";
import { motion } from "framer-motion";
import { countryData } from "../../data/Industries";

export default function PartnerMap() {
  const partnerBenefits = [
    {
      title: "Global Talent Network",
      description:
        "Access to pre-vetted professionals across multiple industries and skill levels",
    },
    {
      title: "Streamlined Recruitment",
      description:
        "End-to-end hiring process management that saves you time and resources",
    },
    {
      title: "Compliance & Legal Support",
      description:
        "Full handling of work permits, visas, and local employment regulations",
    },
    {
      title: "Flexible Staffing Solutions",
      description:
        "Scale your workforce up or down based on project needs and market demands",
    },
  ];

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

  const titleVariants = {
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

  const countryCardVariants = {
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
        delay: index * 0.15,
      },
    }),
    hover: {
      y: -15,
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const benefitCardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5 + index * 0.1,
      },
    }),
    hover: {
      x: 10,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const mapVariants = {
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

  const textGlowVariants = {
    hidden: {
      textShadow: "0 0 0px rgba(59, 130, 246, 0)",
    },
    visible: {
      textShadow: [
        "0 0 0px rgba(59, 130, 246, 0)",
        "0 0 20px rgba(59, 130, 246, 0.5)",
        "0 0 10px rgba(59, 130, 246, 0.3)",
      ],
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#201D1F] overflow-hidden py-10">
      <motion.div
        className="absolute inset-0 z-0"
        variants={mapVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/images/map2.svg"
          alt="Map Background"
          className="object-cover"
        />
      </motion.div>

      <div className="container max-w-7xl mx-auto flex flex-col justify-center relative z-10 px-4 min-h-[calc(100vh-5rem)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white my-6 leading-tight font-Inter"
            variants={titleVariants}
          >
            <motion.span className="block" variants={textGlowVariants}>
              Ready to Build Your
            </motion.span>
            <motion.span className="block" variants={textGlowVariants}>
              Dream Team?
            </motion.span>
          </motion.h1>
          <motion.div
            className="mt-12 mb-16 max-w-4xl"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-primary mb-6 font-Inter"
              variants={titleVariants}
            >
              Why Partner With Manpower?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8 leading-relaxed font-Inter"
              variants={titleVariants}
            >
              Join thousands of successful businesses that trust Manpower to
              deliver exceptional talent solutions. Our proven track record and
              global expertise make us the ideal partner for your staffing
              needs.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              variants={containerVariants}
            >
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={benefitCardVariants}
                  whileHover="hover"
                  className="p-6 rounded-lg border border-primary/30 bg-white/5 backdrop-blur-sm cursor-pointer"
                >
                  <h3 className="text-xl font-bold text-primary mb-3 font-Inter">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80 font-Inter">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {countryData.map((country, index) => (
            <motion.div
              key={country.id}
              custom={index}
              variants={countryCardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a
                href={country.href}
                className="group relative max-w-[400px] max-h-[300px] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-80 block"
              >
                <div className="absolute inset-0">
                  <img
                    src={country.bgImage}
                    alt={`${country.city} background`}
                    className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/30 group-hover:bg-black/10"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <motion.div
                  className="relative z-10 h-full flex flex-col items-center justify-end text-center text-white p-8"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.9 }}
                >
                  <motion.h3
                    className="text-2xl font-bold mb-2 font-Inter"
                    whileHover={{ scale: 1.05 }}
                  >
                    {country.city}
                  </motion.h3>
                  <motion.p
                    className="text-lg font-Inter"
                    whileHover={{ scale: 1.05 }}
                  >
                    {country.name}
                  </motion.p>

                  <motion.div
                    className="mt-4 w-8 h-1 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: 32 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 z-20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-xl text-white/80 mb-6 font-Inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Ready to transform your workforce? Partner with Manpower today.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/contact"
              className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-600 transition-colors duration-300 font-Inter"
            >
              Start Your Partnership
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
