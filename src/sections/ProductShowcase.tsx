"use client";

import { useRef } from "react";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll , useTransform} from "framer-motion";

export const ProductShowcase = () => {

 const sectionRef = useRef(null);
 const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end end"],
 });

 const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);


  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track your progress
          </h2>
          <p className="section-description mt-5">
            Errortlessy turn your ideas into a fully functional , responsible,
            Saas website in just minutes with this template.{" "}
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-5 " />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={220}
            width={220}
            className="hidden md:block md:absolute -right-20 -top-32 "
            style={{ 
             translateY, 
            }}          
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            height={220}
            width={220}
            className="hidden md:block md:absolute bottom-24 -left-36 "
            style={{
              translateY,
            }}          
          />
        </div>
      </div>
    </section>
  );
};
