import React from "react";
import { teammatesData, Teammate } from "@/constants/teammatesData";
import TeammateCard from "../base/TeammateCard";

export default function ManagmentTeamSection() {
  return (
    <section id="management" className="px-4 py-8">
      <h2 className="font-archivo-black text-4xl font-bold text-center mb-[10px] text-[#2C4F5E]">
        Management Team
      </h2>
      <p className="font-inter font-light text-center text-black mb-[40px]">
        Meet the hearts behind Covenant Care
      </p>
      <div className="flex flex-wrap gap-12 justify-center items-center mx-auto">
        {teammatesData.map((teammate: Teammate) => (
          <TeammateCard key={teammate.name} teammate={teammate} />
        ))}
      </div>
    </section>
  );
}
