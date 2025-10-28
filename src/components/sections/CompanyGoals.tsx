import React from 'react'

const CompanyGoals = () => {
    return (
        <section id="company-goals" className="relative bg-background overflow-hidden animate-fadeIn mt-32">
            {/* Wave Pattern Background - Left Side */}
            <div
                className="absolute left-0 top-0 bottom-0 w-full opacity-30"
                style={{
                    backgroundImage: 'url(/assets/image/wave-pattern-1.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div
                className="absolute right-0 top-0 bottom-0 w-full opacity-30"
                style={{
                    backgroundImage: 'url(/assets/image/wave-pattern-2.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'right',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Header Section - Constrained */}
            <div className="relative z-10 max-w-[1202px] min-[1440px]:max-w-[1682px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1202px]:px-0 pt-16 xl:pt-20">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-archivo-black text-center text-primary text-[24px] md:text-[54px]">
                        Company Goals
                    </h1>
                    <p className="font-light font-inter text-black text-center text-[14px] md:text-[18px] mb-[36px] md:mb-[53px]">
                        Driven by compassion, guided by purpose
                    </p>
                </div>
            </div>

            {/* Vision and Mission Side by Side - Full Width */}
            <div className="relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Vision Section - Left Side with Gray Background */}
                    <div className="bg-[#D9D9D9] flex flex-col justify-center md:justify-end items-center md:items-end">
                        <div className="w-full h-auto md:h-[55%] max-w-[601px] min-[1440px]:max-w-[841px] px-[10px] sm:px-[20px] md:px-[30px] md:!pr-[45px] py-14">
                            <h1 className="font-inter font-bold text-primary text-[24px] md:text-[48px] lg:text-[56px] mb-4">
                                Our Vision
                            </h1>
                            <p className="font-inter text-primary text-[14px] md:text-[18px] leading-relaxed">
                                To build a compassionate community where every Filipino family is supported with dignity, love, and care — ensuring that no one faces life’s final moments alone.
                            </p>
                        </div>
                        <div className="relative w-full h-[300px] md:h-[45%]">
                            {/* Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: 'url(/assets/image/vision.png)'
                                }}
                            />
                            <div className="absolute inset-0 bg-black opacity-20" />
                        </div>
                    </div>

                    {/* Mission Section - Right Side with Blue Background */}
                    <div className="bg-primary flex justify-center md:justify-start">
                        <div className="w-full max-w-[601px] min-[1440px]:max-w-[841px] px-[10px] sm:px-[20px] md:px-[30px] md:!pl-[80px] py-14">
                            <h1 className="font-inter font-bold text-white text-[24px] md:text-[48px] lg:text-[56px] mb-4">
                                Our Mission
                            </h1>
                            <p className="font-inter text-white text-[14px] md:text-[18px] leading-relaxed mb-8">
                                Covenant Care Association, Inc. is devoted to honoring life through meaningful assistance and heartfelt service.
                            </p>
                            <div className="mt-8">
                                <p className="font-inter text-white text-[14px] md:text-[18px] mb-2">
                                    We strive to:
                                </p>
                                <ul className="list-disc list-inside space-y-4 pl-4">
                                    <li className="text-white font-inter text-[14px] md:text-[17px] lg:text-[18px]">
                                        Provide families with financial relief and emotional support in times of loss.
                                    </li>
                                    <li className="text-white font-inter text-[14px] md:text-[17px] lg:text-[18px]">
                                        Uphold integrity, transparency, and fairness in all our commitments.
                                    </li>
                                    <li className="text-white font-inter text-[14px] md:text-[17px] lg:text-[18px]">
                                        Nurture a culture of compassion that strengthens community bonds.
                                    </li>
                                    <li className="text-white font-inter text-[14px] md:text-[17px] lg:text-[18px]">
                                        Sustain a legacy of love and care that endures beyond generations.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Spacing */}
            <div className="relative z-10 pb-16 xl:pb-34"></div>
        </section>
    )
}

export default CompanyGoals