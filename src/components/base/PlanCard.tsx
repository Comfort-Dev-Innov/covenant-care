import React from 'react';
import { IconType } from 'react-icons';

interface Benefit {
    icon: IconType;
    name: string;
    description: string;
}

interface PlanCardProps {
    icon: IconType;
    carePlanName: string;
    membershipFee: number;
    covenantFund: number;
    members: string;
    benefits: Benefit[];
    buttonText: string;
    buttonAction: () => void;
    primaryColor: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
    icon: Icon,
    carePlanName,
    membershipFee,
    covenantFund,
    members,
    benefits,
    buttonText,
    buttonAction,
    primaryColor,
}) => {
    return (
        <div
            className="rounded-[18px] px-[25px] py-[40px] shadow-lg flex flex-col gap-[40px] max-w-[550px]"
            style={{ backgroundColor: primaryColor }}
        >
            {/* Header with Icon and Plan Name */}
            <div className="text-center">
                <div className="flex flex-col items-center justify-center gap-[16px]">
                    <div className="flex justify-center">
                        <Icon className="text-[36px] md:text-5xl text-white" />
                    </div>
                    <h3 className="text-[20px] md:text-[26px] lg:text-[36px] font-bold text-white mb-4">
                        <span className="italic">{carePlanName}</span> Care Plan
                    </h3>
                </div>

                {/* Pricing Section */}
                <div className="flex flex-col gap-[6px]">
                    <div className="flex items-baseline justify-center gap-[5px]">
                        <span className="text-[36px] md:text-[54px] lg:text-[64px] font-extrabold text-white">
                            ₱{membershipFee.toLocaleString()}
                        </span>
                        <span className="text-[20px] md:text-[22px] lg:text-[32px] text-[#DEDEDE] font-medium">
                            +{covenantFund}
                        </span>
                    </div>
                    <p className="font-inter text-[16px] md:text-[18px] lg:text-[20px] text-white">{members}</p>
                </div>
            </div>

            <div className="flex flex-col gap-[20px]">
                {/* Benefits Section */}
                <div
                    className="rounded-[18px] py-[12px] px-4 lg:px-10 flex-grow"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                >
                    <div className="space-y-4">
                        {benefits.map((benefit, index) => {
                            const BenefitIcon = benefit.icon;
                            return (
                                <div key={index} className="flex gap-[18px] px-[10px] py-[12px]">
                                    <div className="flex-shrink-0">
                                        <BenefitIcon className="text-[36px] md:text-[40px] text-white mt-1" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-inter font-bold text-white text-[16px] md:text-[20px] mb-0.5">
                                            {benefit.name}
                                        </h4>
                                        <p className="text-[14px] md:text-[18px] font-light text-white">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
                {/* CTA Button */}
                <button
                    onClick={buttonAction}
                    className="font-inter font-medium text-[16px] md:text-[22px] w-full py-[10px] px-[18px] rounded-[10px] border-1 border-white bg-transparent text-white hover:bg-white hover:text-gray-800 hover:cursor-pointer transition-all duration-300"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default PlanCard;