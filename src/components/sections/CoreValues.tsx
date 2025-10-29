'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { type IconType } from 'react-icons'
import { FaHands, FaBalanceScale, FaUsers, FaHandshake, FaHandHoldingHeart } from 'react-icons/fa'

type CoreValueItem = {
  icon: IconType
  coreValue: string
  description: string
}

const CORE_VALUES: CoreValueItem[] = [
  {
    icon: FaHands,
    coreValue: 'Compassion',
    description:
      'We serve with genuine empathy, extending comfort and understanding to every family in their time of need.',
  },
  {
    icon: FaBalanceScale,
    coreValue: 'Integrity',
    description:
      'We uphold honesty, transparency, and accountability in every service, ensuring the trust and confidence of those we serve.',
  },
  {
    icon: FaUsers,
    coreValue: 'Community',
    description:
      'We honor the Filipino spirit of bayanihan—coming together in unity and care to support one another through life’s most challenging moments.',
  },
  {
    icon: FaHandshake,
    coreValue: 'Dignity',
    description:
      'We honor each life with respect and grace, guided by compassion in every step of care.',
  },
  {
    icon: FaHandHoldingHeart,
    coreValue: 'Legacy of Love',
    description:
      'We transform moments of loss into lasting acts of love, building a legacy of compassion that endures across generations.',
  },
]

const CoreValues = () => {
  return (
    <section id="core-values" className="w-full bg-primary">
        <div className="space-y-12 md:space-y-16 max-w-[1202px] min-[1440px]:max-w-[1682px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1202px]:px-0 py-20 md:pt-24 md:pb-32">
            <motion.div 
                className="w-full flex flex-col justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h1 className="text-white font-archivo-black text-[24px] md:text-[45px] text-center">Our Core Values</h1>
                <p className="text-white font-inter font-extralight text-[14px] md:text-[18px] text-center">The principles that guide every act of care</p>
            </motion.div>
            <motion.p 
                className="w-full text-justify text-white text-[16px] md:text-[20px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                At <strong>Covenant Care</strong>, our values reflect the heart of our mission — to serve every family with compassion, integrity, and respect. These guiding principles shape every promise we keep, every hand we hold, and every life we honor.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-6">
                {CORE_VALUES.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <motion.div 
                            key={item.coreValue} 
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div 
                                className=""
                                animate={{ 
                                    rotateY: [0, 360],
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 4 + index * 1.5, // Staggered delays: 4s, 5.5s, 7s, 8.5s, 10s
                                }}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <Icon className="text-[55px] md:text-[85px] p-2 md:p-4 text-secondary bg-white rounded-full"/>
                            </motion.div>
                            <div>
                                <h1 className="text-white text-[20px] md:text-[24px] font-bold font-inter tracking-[.15em]">{item.coreValue}</h1>
                                <p className="font-light text-white text-[14px] md:text-[18px] font-inter">{item.description}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default CoreValues