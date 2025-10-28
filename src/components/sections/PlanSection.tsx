'use client'
import React from 'react';
import PlanCard from '../base/PlanCard';
import { MdRememberMe } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import { RiHandCoinFill, RiHealthBookFill } from "react-icons/ri";
import { GiLifeTap } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";
import { BsPersonStanding } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import BenefitsCard from '../base/BenefitsCard';
import { GiCash, GiFlowerPot } from "react-icons/gi";
import { useOnboarding } from '../layout/AppWrapper';

const PlanSection: React.FC = () => {
    const { openPopup } = useOnboarding();
    return (
        <section className="relative bg-background overflow-hidden animate-fadeIn mt-32">
            <div
                className="absolute right-0 top-0 bottom-0 w-full opacity-20"
                style={{
                    backgroundImage: 'url(/assets/image/wave-pattern-2.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="relative z-10 max-w-[1202px] min-[1440px]:max-w-[1682px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1202px]:px-0 py-16 xl:py-20 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-archivo-black text-center text-primary text-[24px] md:text-[54px]">
                        Choose Your Care Plan
                    </h1>
                    <p className="font-light font-inter text-black text-center text-[14px] md:text-[18px] mb-[36px] md:mb-[53px]">
                        Compare our care plans and choose the one that best supports you and your loved ones
                    </p>
                </div>

                <div className="flex flex-col flex-wrap items-center justify-center max-w-[1280px] w-full gap-[70px]">
                    <div className="flex max-md:flex-wrap w-full justify-center md:justify-between gap-12 ">
                        <PlanCard
                            icon={BsPersonStanding}
                            carePlanName="Individual"
                            membershipFee={1000}
                            covenantFund={300}
                            members="One (1) planholder"
                            benefits={[
                                {
                                    icon: MdRememberMe,
                                    name: "One-time Membership Fee",
                                    description: "₱1,000.00"
                                },
                                {
                                    icon: RiHandCoinFill,
                                    name: "Covenant Fund Contribution",
                                    description: "₱300.00 (Maintained Fund)"
                                },
                                {
                                    icon: FaCoins,
                                    name: "Compulsory Contribution",
                                    description: "₱10.00 per member's passing"
                                },
                                {
                                    icon: GiLifeTap,
                                    name: "Bereavement Memorial Benefit",
                                    description: "Long-term protection for you and your family"
                                },
                                {
                                    icon: RiHealthBookFill,
                                    name: "Health Requirements",
                                    description: "None"
                                },
                                {
                                    icon: IoMdClock,
                                    name: "Contestability Period",
                                    description: "6 months"
                                }
                            ]}
                            buttonText="Get Individual Plan"
                            buttonAction={() => openPopup('Individual')}
                            primaryColor="#2B3D4F"
                        />

                        <PlanCard
                            icon={HiMiniUserGroup}
                            carePlanName="Family"
                            membershipFee={1000}
                            covenantFund={300}
                            members="One (1) planholder"
                            benefits={[
                                {
                                    icon: MdRememberMe,
                                    name: "One-time Membership Fee",
                                    description: "₱1,500.00"
                                },
                                {
                                    icon: RiHandCoinFill,
                                    name: "Covenant Fund Contribution",
                                    description: "₱300.00 (Maintained Fund)"
                                },
                                {
                                    icon: FaCoins,
                                    name: "Compulsory Contribution",
                                    description: "₱15.00 per member's passing"
                                },
                                {
                                    icon: GiLifeTap,
                                    name: "Bereavement Memorial Benefit",
                                    description: "Long-term protection for you and your family"
                                },
                                {
                                    icon: RiHealthBookFill,
                                    name: "Health Requirements",
                                    description: "None"
                                },
                                {
                                    icon: IoMdClock,
                                    name: "Contestability Period",
                                    description: "6 months"
                                }
                            ]}
                            buttonText="Get Family Plan"
                            buttonAction={() => openPopup('Family')}
                            primaryColor="#D4A017"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <h2 className="font-bold font-inter max-md:text-center text-primary text-[20px] md:text-[30px] border-b-2 border-primary pb-3">Covenant Care Benefits</h2>
                        <div>
                            <BenefitsCard
                                image="/assets/image/benefit-1.jpg"
                                icon={GiCash}
                                name="₱65,000.00 Cash Assistance"
                                benefits={[
                                    "**₱20,000.00** will be released immediately after verified notification to provide quick assistance and comfort to the family.",
                                    "The balance of **₱45,000.00** will be released within three (3) banking days once all required documents are completed.",
                                ]}
                            />
                            <BenefitsCard
                                image="/assets/image/benefit-2.jpg"
                                icon={GiFlowerPot}
                                name="Tarpaulin & Flowers"
                                benefits={[
                                    "Covenant Care believes in honoring the departed and comforting those who grieve. As a gesture of respect, a **memorial tarpaulin** and **floral arrangement** will be provided to the family, at no additional cost through the welfare fund.",
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlanSection