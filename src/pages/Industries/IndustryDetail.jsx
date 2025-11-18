import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import BrandMarquee from "../../components/AdsHeadline";
import { Industries } from "../../data/Industries";

const logos = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
];

export default function IndustryDetail() {
  const { href } = useParams();

  // Find the current industry based on the href parameter
  const industry = Industries.find((ind) => ind.href === `/industries/${href}`);

  // If industry not found, show error message
  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#201D1F] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
          <Link to="/industries" className="text-blue-400 hover:underline">
            Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  // Animation variants (keep your existing variants)
  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.8 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "backOut", delay: 0.8 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#3B82F6",
      color: "white",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  const sectionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const sectionItemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const reverseImageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const reverseTextVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const marqueeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="relative py-32 bg-[#201D1F] overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={industry.bg}
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-l from-[#201D1F] via-transparent to-[#201D1F]/80 z-5" />

        <motion.div
          className="container mx-auto relative z-10 flex flex-col justify-center items-end w-full text-end px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl font-Inter md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            variants={titleVariants}
          >
            {industry.title}
          </motion.h1>

          <motion.p
            className="text-lg font-Inter md:text-xl lg:text-2xl text-white max-w-2xl mb-10 leading-relaxed"
            variants={subtitleVariants}
          >
            {industry.shortdesc}
          </motion.p>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/contact"
              className="bg-white font-Inter font-bold text-[#201D1F] px-8 py-4 rounded-md text-lg transition-colors duration-300 inline-block"
            >
              Apply Here
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="bg-[#201D1F] py-20">
        <motion.div
          variants={marqueeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <BrandMarquee
            title="Our Customers"
            logos={logos}
            logoWidth={140}
            logoHeight={80}
            bgColor="bg-[#201D1F]"
            speed={20}
            gap={40}
            className="text-white"
          />
        </motion.div>

        {/* FIXED: Use industry.sections instead of Industries.sections */}
        <motion.div
          className="max-w-6xl mx-auto px-4 py-16 space-y-16"
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {industry.sections.map((section, index) => (
            <motion.div
              key={index}
              variants={sectionItemVariants}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              <motion.div
                className="w-full md:w-1/2"
                variants={
                  index % 2 === 0 ? imageVariants : reverseImageVariants
                }
                whileHover="hover"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </motion.div>

              <motion.div
                className="w-full md:w-1/2"
                variants={index % 2 === 0 ? textVariants : reverseTextVariants}
              >
                <motion.h2
                  className="text-[32px] font-Inter text-[#F8F8F8] font-semibold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {section.title}
                </motion.h2>
                <motion.p
                  className="text-white text-[16px] font-normal leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {section.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
