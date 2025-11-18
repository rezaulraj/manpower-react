import React from "react";
import Image from "next/image";
import BrandMarquee from "../../components/AdsHeadline";

const HappyWorker = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="mb-16">
          <h1 className="lg:text-[56px] text-heading md:text-[32px] text-[24px] font-bold mb-6">
            Awards & Accreditations.
          </h1>
          <p className="text-[16px] text-text mb-12">
            Don&apos;t just take our word for it, see the awards and
            accreditations we hold!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8"></div>
        </div>

        <div className="my-16">
          <BrandMarquee
            logos={[
              "/images/worker1.jpg",
              "/images/worker2.jpg",
              "/images/worker3.jpg",
              "/images/worker4.jpg",
              "/images/worker5.jpg",
              "/images/worker6.jpg",
              "/images/worker7.jpg",
              "/images/worker8.jpg",
              "/images/worker9.jpg",
              "/images/worker10.jpg",
              "/images/worker11.jpg",
              "/images/worker12.jpg",
              "/images/worker13.jpg",
            ]}
            speed={30}
            pauseOnHover
            className="bg-gray-50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 justify-between items-center">
          <div className="">
            <h2 className="text-4xl font-bold mb-6">Leave ordinary behind.</h2>
            <p className="text-[16px] text-text mb-8 max-w-3xl">
              Our people first culture sets us apart. We hire top talent and
              help our customers do the same. Got ambition and tenacity? Tick
              our bows, and we&apos;ll tick yours. Join our anything-but-average
              team.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Work for SGI
            </button>
          </div>
          <div>
            <img
              src="/images/happyWoker.png"
              alt="worker"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyWorker;
