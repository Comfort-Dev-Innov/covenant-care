import React from 'react';
import { IconType } from 'react-icons';
import { IoMdCheckmark } from "react-icons/io";

interface BenefitsCardProps {
  image: string;
  icon: IconType;
  name: string;
  benefits: string[]; // Use **text** syntax to indicate bold words
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({
  image,
  icon: Icon,
  name,
  benefits
}) => {
  
  // Function to parse text with **bold** markers
  const parseBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="relative flex max-md:flex-col bg-[#fff] rounded-[20px] overflow-hidden shadow-lg w-full h-auto md:h-[220px] mt-6">
      {/* Background Image with Linear Gradient White Overlay */}
      <div className="relative h-[150px] w-full md:h-auto md:w-[30%] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 1) 100%), url(${image})`
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center px-4 md:px-10 max-md:py-10 w-full md:w-[70%]">
        {/* Icon and Name */}
        <div className="flex max-md:flex-col items-center mb-2 gap-2">
          <div className="flex items-center justify-center">
            <Icon className="text-tertiary text-[35px] md:text-[20px]" />
          </div>
          <h3 className="max-md:text-center font-inter font-bold text-tertiary text-[16px] md:text-[20px]">
            {name}
          </h3>
        </div>

        {/* Benefits List */}
        <ul className="space-y-3 pl-0 md:pl-7">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <IoMdCheckmark className="text-tertiary text-[18px] md:text-[20px] flex-shrink-0 mt-1" />
              <span className="font-inter max-md:text-[14px] text-black leading-relaxed">
                {parseBoldText(benefit)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BenefitsCard;