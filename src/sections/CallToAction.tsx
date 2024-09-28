"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={StarImage.src}
            alt="Star Image"
            width={250}
            className="hidden md:block md:absolute -left-[350px] -top-[137px]"
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
              repeatType: "loop",
            }}
          />
           {/* challenge: rotate this image around its existing tilted axis */}
          <motion.img
            src={SpringImage.src}
            alt="Spring Image"
            width={250}
            className="hidden md:block md:absolute -right-[350px] -top-[137px]"
            animate={{
              translateY: [-30, 0 , 30]  // Slight tilt adjustment along X-axis
            
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center tracking-tight text-black bg-white hover:bg-white/60 transition duration-200">
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
