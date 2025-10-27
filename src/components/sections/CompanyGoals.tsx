import React from 'react'

const CompanyGoals = () => {
    return (
        <section className="max-w-[1202px] min-[1440px]:max-w-[1682px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1202px]:px-0 py-16 xl:pt-20 xl:pb-34">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-archivo-black text-center text-primary text-[24px] md:text-[54px]">
                    Company Goals
                </h1>
                <p className="font-light font-inter text-black text-center text-[14px] md:text-[18px] mb-[36px] md:mb-[53px]">
                    Driven by compassion, guided by purpose
                </p>
            </div>
            <div>
                <div>
                    <div>
                        <h1>Our Vision</h1>
                        <p>To build a compassionate community where every Filipino family is supported with dignity, love, and care — ensuring that no one faces life’s final moments alone.</p>
                    </div>
                    <div>
                        <h1>Our Mission</h1>
                        <p>Covenant Care Association, Inc. is devoted to honoring life through meaningful assistance and heartfelt service.</p>
                        <div className="mt-4">
                            <p className="font-inter">We strive to:</p>
                            <ul className="list-disc pl-6 space-y-2 font-inter">
                                <li>Provide families with financial relief and emotional support in times of loss.</li>
                                <li>Uphold integrity, transparency, and fairness in all our commitments.</li>
                                <li>Nurture a culture of compassion that strengthens community bonds.</li>
                                <li>Sustain a legacy of love and care that endures beyond generations.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyGoals