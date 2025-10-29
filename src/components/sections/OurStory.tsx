'use client';

import React from 'react'
import { motion } from 'framer-motion'
import ImageCarousel from '../base/ImageCarousel'
import Image1 from '../../../public/assets/image/image1.png'
import Image2 from '../../../public/assets/image/image2.png'
import Image3 from '../../../public/assets/image/image3.png'
import underline from '../../../public/assets/image/underline.png'
import Image from 'next/image'

const OurStory = () => {
    const carouselItems = [
        {
            image: Image1,
            title: 'Personal Beginnings',
            content:
                'Covenant Care Association, Inc. was founded out of a deeply personal \nexperience — the loss of a loved one. In the midst of grief came the realization \nthat financial burdens often add to the pain families endure. No one should have \nto face both emotional and financial hardship alone.',
        },
        {
            image: Image2,
            title: 'Purposeful Mission',
            content:
                "What began as a personal journey of loss has evolved into a purposeful mission: \nto walk with Filipino families through life's most difficult moments, extending \ncare, compassion, and financial assistance when it matters most.",
        },
        {
            image: Image3,
            title: 'Lasting Commitment',
            content:
                'Today, Covenant Care stands as a community built on trust, compassion, and \nshared responsibility. Guided by our commitment to uphold dignity and provide \nmeaningful support, we ensure that every promise of care is fulfilled with \nsincerity and respect.',
        },
    ];

    return (
        <div 
            id="story" 
            className="max-w-[1202px] min-[1440px]:max-w-[1682px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1202px]:px-0 py-16 xl:pt-20 xl:pb-34"
        >
            <motion.div 
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1 className="font-archivo-black text-center text-primary text-[24px] md:text-[54px]">
                    Our Story
                </h1>
                <p className="font-light font-inter text-black text-center text-[14px] md:text-[18px] mb-[36px] md:mb-[53px]">
                    The story behind what we do and why we do it
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <ImageCarousel
                    items={carouselItems}
                    autoPlay={true}
                    autoPlayInterval={4000}
                />
            </motion.div>

            <motion.div 
                className="flex flex-col items-center justify-center mt-[80px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <p className="text-center text-primary font-inter text-[18px] sm:text-[23px] md:text-[26px]">Because every life deserves love and care.</p>
                <div className="w-auto md:w-[500px] h-auto md:h-[49px]">
                <Image
                  src={underline}
                  width={564}
                  height={107}
                  alt="underline"
                  className="w-full h-full object-contain"
                />
                </div>
            </motion.div>
        </div>
    )
}

export default OurStory