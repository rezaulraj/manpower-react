import React from "react";
import { Industries } from "../../data/Industries";


export default function IndustriesWe() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-Inter md:text-5xl font-bold text-[#201D1F] mb-4 inline-block border-b-4 border-primary pb-2">
            Industries We Serve
          </h2>
          <p className="text-lg font-Inter font-normal md:text-xl text-[#201D1F]/80 max-w-2xl mx-auto">
            We provide innovative, tailored solutions across a wide range of
            industries. From healthcare and finance to technology and retail,
            our expertise helps businesses grow, adapt, and stay ahead in an
            ever-evolving market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Industries.map((industry) => (
            <a
              key={industry.id}
              href={industry.href}
              className="group relative overflow-hidden  rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-96"
            >

              <div className="absolute inset-0 ">
                <img
                  src={industry.bg}
                  alt={`${industry.title} background`}
                  className="object-cover w-full h-full"
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/30 bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-8">
                <h3 className="text-3xl font-bold mb-2">{industry.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
