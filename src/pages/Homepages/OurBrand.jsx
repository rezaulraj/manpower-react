import React from "react";

import AdsHeadline from "../../components/AdsHeadline";

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

const BrandMarquee = () => {
  const doubledLogos = [...logos];

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <AdsHeadline
        title="Our Customers"
        logoWidth={200}
        logoHeight={200}
        speed={20}
        logos={doubledLogos}
        direction="left"
        pauseOnHover
      />
    </section>
  );
};

export default BrandMarquee;
