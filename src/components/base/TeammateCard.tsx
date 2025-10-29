'use client'
import { Teammate } from "@/constants/teammatesData";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeammateCard({ teammate, index = 0 }: { teammate: Teammate, index?: number }) {
  return (
    <motion.div 
      className="font-inter flex flex-col items-center rounded-[18px] px-4 py-4 md:px-6 md:py-6 lg:px-[25px] lg:py-[40px] lg:w-[350px] lg:h-[380px] md:w-[250px] md:h-[280px] w-[200px] h-[230px] bg-[#2B3D4F] shadow-black/50 shadow-[0_0_10px_0_rgba(0.5,0.5,0.5,0.5)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.1 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
          repeatType: "loop"
        }
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.7)",
        transition: { duration: 0.3 }
      }}
    >
      <Image
        src={(teammate.image as string) || "/assets/image/default-avatar.jpg"}
        alt={teammate.name}
        width={200}
        height={200}
        className="rounded-full outline-5 outline-offset-[-5px] outline-white border-white lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[100px] h-[100px]"
      />
      <div className="flex flex-col items-start justify-start w-full lg:mt-[20px] md:mt-[15px] mt-[12px]">
        <p className="w-full text-sm text-white text-start lg:text-[18px] md:text-[16px] text-[14px]">
          {teammate.position}
        </p>
        <h3 className="text-2xl font-extrabold text-white text-start w-full lg:text-[24px] md:text-[21px] text-[16px]">
          {teammate.name}
        </h3>
      </div>
    </motion.div>
  );
}
