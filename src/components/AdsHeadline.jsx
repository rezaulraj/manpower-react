import { motion } from "framer-motion";

const BrandMarquee = ({
  title = "",
  bgColor = "",
  logos,
  logoWidth = 120,
  logoHeight = 80,
  speed = 25,
  direction = "left",
  pauseOnHover = false,
  className = "",
  titleClassName = "",
  gap = 32,
}) => {
  const doubledLogos = [...logos, ...logos];

  return (
    <section
      className={`py-16 ${bgColor} relative overflow-hidden ${className}`}
    >
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold text-center mb-12 ${titleClassName}`}
          >
            {title}
          </motion.h2>
        )}

        {/* Marquee Logos */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center whitespace-nowrap"
            animate={{
              x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
            }}
            transition={{
              duration: speed,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
            style={{ gap: `${gap}px` }}
          >
            {doubledLogos.map((logo, i) => (
              <div
                key={`logo-${i}`}
                className="flex items-center justify-center relative"
                style={{
                  width: logoWidth,
                  height: logoHeight,
                  flexShrink: 0,
                }}
              >
                <img
                  src={logo}
                  alt={`Logo ${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
