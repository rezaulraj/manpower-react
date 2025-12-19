import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Unlock Your Future .",
    "Empower Your Business.",
    "Transform Your Workforce.",
    "Accelerate Your Growth.",
  ];
  const typingSpeed = 100;
  const eraseSpeed = 50;
  const pauseDuration = 1500;

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeWriter = () => {
      const currentText = texts[textIndex];

      if (!isDeleting && currentIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, typingSpeed);
      } else if (!isDeleting && currentIndex > currentText.length) {
        timeoutId = setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, pauseDuration);
      } else if (isDeleting && currentIndex >= 0) {
        setDisplayText(currentText.substring(0, currentIndex));
        currentIndex--;
        timeoutId = setTimeout(typeWriter, eraseSpeed);
      } else {
        isDeleting = false;
        setTextIndex((prev) => (prev + 1) % texts.length);
        timeoutId = setTimeout(typeWriter, 300);
      }
    };

    timeoutId = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeoutId);
  }, [textIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
      scale: 1.02,
      y: -1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
    x: Math.random() * 100,
  }));

  const siteName = "Manpower Network - Source Group International";
  const siteDescription =
    "Top international recruitment agency providing workforce solutions across 11+ industries including Construction, Healthcare, Logistics, Manufacturing & Hospitality. 500+ projects completed with 98% client satisfaction.";
  const keywords =
    "recruitment agency, staffing solutions, manpower, global workforce, construction workers, healthcare staffing, logistics recruitment, manufacturing workers, hospitality staff, cleaning services, expert talent acquisition, workforce solutions, HR solutions";
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://manpowernet.work";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: siteName,
    description: siteDescription,
    url: currentUrl,
    logo: "https://manpowernet.work/images/logo.png",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "17 Somerville Road",
        addressLocality: "Romford",
        addressRegion: "England",
        postalCode: "RM6 5BD",
        addressCountry: "UK",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Al Nahyan - E20 04",
        addressLocality: "Abu Dhabi",
        addressCountry: "United Arab Emirates",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "",
      contactType: "customer service",
      areaServed: ["GB", "AE", "LK", "BD", "Worldwide"],
      availableLanguage: ["English", "Arabic", "Sinhala", "Bengali"],
    },
    areaServed: {
      "@type": "Place",
      name: "Global Recruitment Services",
    },
    service: [
      "Construction Staffing",
      "Healthcare Recruitment",
      "Logistics Workforce",
      "Manufacturing Employment",
      "Hospitality Staffing",
      "Cleaning Services",
      "Shipyard Workers",
      "Textile Industry Staff",
    ],
    sameAs: [
      "https://x.com/Manpower7912871",
      "https://www.facebook.com/manpowernet01",
      "https://www.pinterest.com/manpowernet/",
    ],
  };

  return (
    <>
      <Helmet>
        <title>Manpower Network</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:title"
          content="Manpower Network | Global Workforce Solutions"
        />
        <meta property="og:description" content={siteDescription} />
        <meta
          property="og:image"
          content="https://manpowernet.work/images/banner.jpg"
        />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta
          name="twitter:title"
          content="Top Recruitment Agency - Manpower Network"
        />
        <meta name="twitter:description" content={siteDescription} />
        <meta
          name="twitter:image"
          content="https://manpowernet.work/images/banner.jpg"
        />
        <meta name="twitter:creator" content="@Manpower7912871" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Manpower Network Home",
            description: siteDescription,
            url: currentUrl,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: currentUrl,
                },
              ],
            },
          })}
        </script>

        <meta name="author" content="Manpower Network" />
        <meta
          name="copyright"
          content="© 2024 Manpower Network. All rights reserved."
        />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta
          name="industry"
          content="Recruitment, Staffing, Human Resources"
        />
        <meta name="category" content="Business Services" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#44B6DA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Helmet>
      <div className="w-full py-44 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-linear-to-br from-white/5 via-gray-700/10 to-white/3"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-blue-900/70 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-r from-white/10 to-white/50 mix-blend-overlay"></div>

          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-white/30"
                initial={{
                  y: -20,
                  x: `${particle.x}%`,
                  opacity: 0,
                  width: particle.size,
                  height: particle.size,
                }}
                animate={{
                  y: "110vh",
                  opacity: [0, 0.4, 0],
                  x: [
                    `${particle.x}%`,
                    `${particle.x + Math.sin(particle.id * 0.5) * 10}%`,
                  ],
                }}
                transition={{
                  y: {
                    duration: particle.duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: particle.delay,
                  },
                  opacity: {
                    duration: particle.duration,
                    repeat: Infinity,
                    times: [0, 0.3, 1],
                    delay: particle.delay,
                  },
                  x: {
                    duration: particle.duration * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: particle.delay,
                  },
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full container mx-auto text-center"
          >
            <div className="mb-10">
              <motion.h1
                variants={textItemVariants}
                className="font-ubuntu text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="relative">
                  <span className="bg-linear-to-r from-[#44B6DA] via-yellow-400 to-[#44B6DA] bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                    {displayText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="inline-block w-[2px] h-16 md:h-20 ml-1 bg-gradient-to-b from-white to-gray-300"
                  />
                </span>
              </motion.h1>
            </div>

            <motion.div
              variants={textItemVariants}
              className="relative h-[1px] w-56 md:w-72 mx-auto my-12 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute inset-0 bg-linear-to-r from-white/30 via-white to-white/30"></div>
            </motion.div>

            <motion.p
              variants={textItemVariants}
              className="text-2xl md:text-3xl font-medium mb-6 font-ubuntu"
            >
              <span className="text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                Workforce Solutions Provider
              </span>
            </motion.p>
            <motion.p
              variants={textItemVariants}
              className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-ubuntu"
            >
              <span className="text-white/80">
                Manpower Network – Discover Your Potential with Source Group
                International.
              </span>
            </motion.p>

            <motion.div
              variants={textItemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8"
            >
              <motion.a
                href="/contact"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#44B6DA] to-yellow-400 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 font-ubuntu"
              >
                Contact Us
                <motion.svg
                  animate={{ x: [0, 3, 0] }}
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.a>

              <motion.a
                href="/industries"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="group relative inline-flex items-center gap-2 bg-transparent text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 font-ubuntu border border-transparent hover:border-gradient-to-r hover:border-gradient-from-[#44B6DA] hover:border-gradient-to-yellow-400"
              >
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-[#44B6DA] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#201D1F] w-full h-full rounded-[calc(0.5rem-1px)]"></div>
                </div>
                <span className="relative z-10">Hire Worker Experts</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="relative z-10"
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white/10 to-transparent"
        />
      </div>
    </>
  );
};

export default Hero;
