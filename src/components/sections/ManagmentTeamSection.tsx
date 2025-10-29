'use client'
import React from "react";
import { teammatesData, Teammate } from "@/constants/teammatesData";
import TeammateCard from "../base/TeammateCard";
import { motion } from "framer-motion";

export default function ManagmentTeamSection() {
  return (
    <motion.section 
      id="management" 
      className="max-w-[1202px] min-[1440px]:max-w-[1682px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1202px]:px-0 pb-16 pt-24 xl:pb-20 xl:pt-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-archivo-black text-center text-primary text-[24px] md:text-[54px]">
          Management Team
        </h1>
        <p className="font-light font-inter text-black text-center text-[14px] md:text-[18px] mb-[36px] md:mb-[53px]">
          Meet the hearts behind Covenant Care
        </p>
      </div>
      <div className="flex flex-wrap gap-12 justify-center items-center mx-auto">
        {teammatesData.map((teammate: Teammate, index: number) => (
          <TeammateCard key={teammate.name} teammate={teammate} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
