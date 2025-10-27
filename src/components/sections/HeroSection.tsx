'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, animate, AnimatePresence, AnimationPlaybackControls } from 'framer-motion'
import Button from '../base/Button'

const images = [
    '/assets/image/hero-image-1.png',
    '/assets/image/hero-image-2.jpg',
    '/assets/image/hero-image-3.jpg',
]

const HeroSection = () => {
    const [displayValue, setDisplayValue] = useState(0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const TOTAL_MEMBERS = 342
    const ANIMATION_DURATION = 5.5 
    const WAIT_DURATION = 180000

    useEffect(() => {
        let animationControls: AnimationPlaybackControls | null = null
        let timeoutId: NodeJS.Timeout | null = null

        const runAnimation = () => {
            animationControls = animate(0, TOTAL_MEMBERS, {
                duration: ANIMATION_DURATION,
                ease: "easeOut",
                onUpdate: (latest) => {
                    setDisplayValue(Math.round(latest))
                },
                onComplete: () => {
                    timeoutId = setTimeout(() => {
                        setDisplayValue(0)
                        runAnimation()
                    }, WAIT_DURATION)
                }
            })
        }

        runAnimation()
        
        return () => {
            if (animationControls) {
                animationControls.stop()
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }, 4000)
        
        return () => clearInterval(interval)
    }, [])

    return (
        <section 
            className="relative bg-background overflow-hidden animate-fadeIn"
            style={{ minHeight: 'calc(100vh - 91px)' }}
        >
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

            <div className="max-md:!min-h-[900px] max-lg:!min-h-[680px] relative flex items-center max-w-[1202px] min-[1440px]:max-w-[1682px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1202px]:px-0" style={{ minHeight: 'calc(100vh - 150px)' }}>
                <div className="max-md:flex max-md:flex-col max-md:w-full grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-4">
                        <motion.div 
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="font-inter font-black text-center md:text-left text-[24px] md:text-[32px] lg:text-[54px] text-primary leading-10 lg:leading-17">Care That Lasts <br /> Beyond a Lifetime</h1>
                            <div className="max-md:mx-auto w-[250px] md:w-[300px] lg:w-[500px] h-auto md:h-[49px]">
                                <Image
                                    src='/assets/image/underline-hero.png'
                                    width={564}
                                    height={107}
                                    alt="underline"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </motion.div>
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className="font-inter max-md:text-center text-[14px] lg:text-[18px] text-primary">Prepare today with Covenant Care and give your family peace, dignity, and security — because every life deserves love and care.</p>
                            <Button className="max-md:!flex max-md:!justify-center max-md:!mx-auto !text-[14px] lg:!text-[18px]">Get Your Plan Now! ⟶</Button>
                        </motion.div>
                        <motion.div 
                            className="flex flex-col mt-8 max-md:justify-center max-md:items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h1 className="font-inter font-black text-[32px] lg:text-[54px] text-primary">
                                {displayValue.toLocaleString()}
                            </h1>
                            <p className="font-inter text-[16px] md:text-[18px] text-primary">Active Members</p>
                        </motion.div>
                    </div>

                    {/* Right Content */}
                    <div className="relative h-[500px] lg:h-[600px]">
                        <div className="flex gap-3 lg:gap-10 justify-end h-full py-8 max-md:mt-[42px]">
                            {/* Strip 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="relative max-sm:w-[90px] max-md:w-[100px] max-md:h-[300px] w-[180px] h-[600px] rounded-[20px] overflow-hidden drop-shadow-md/50 translate-y-4"
                                style={{ perspective: '1000px' }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ rotateY: 90, opacity: 0 }}
                                        animate={{ rotateY: 0, opacity: 1 }}
                                        exit={{ rotateY: -90, opacity: 0 }}
                                        transition={{ duration: 0.5, delay: 0 }}
                                        className="absolute inset-0"
                                        style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                                    >
                                        <Image
                                            src={images[currentImageIndex]}
                                            alt="Covenant Care"
                                            fill
                                            className="object-cover object-[26%_10%]"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>

                            {/* Strip 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative max-sm:w-[90px] max-md:w-[100px] max-md:h-[300px] w-[180px] h-[600px] rounded-[20px] overflow-hidden drop-shadow-md/50 -translate-y-12"
                                style={{ perspective: '1000px' }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`strip2-${currentImageIndex}`}
                                        initial={{ rotateY: 90, opacity: 0 }}
                                        animate={{ rotateY: 0, opacity: 1 }}
                                        exit={{ rotateY: -90, opacity: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="absolute inset-0"
                                        style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                                    >
                                        <Image
                                            src={images[currentImageIndex]}
                                            alt="Covenant Care"
                                            fill
                                            className="object-cover object-[52%_80%]"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>

                            {/* Strip 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="relative max-sm:w-[90px] max-md:w-[100px] max-md:h-[300px] w-[180px] h-[600px] rounded-[20px] overflow-hidden drop-shadow-md/50 -translate-y-22"
                                style={{ perspective: '1000px' }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`strip3-${currentImageIndex}`}
                                        initial={{ rotateY: 90, opacity: 0 }}
                                        animate={{ rotateY: 0, opacity: 1 }}
                                        exit={{ rotateY: -90, opacity: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        className="absolute inset-0"
                                        style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                                    >
                                        <Image
                                            src={images[currentImageIndex]}
                                            alt="Covenant Care"
                                            fill
                                            className="object-cover object-[80%_20%]"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection