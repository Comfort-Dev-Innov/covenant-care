'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5'

interface ProofPopupProps {
    isOpen: boolean
    onClose: () => void
}

const ProofPopup: React.FC<ProofPopupProps> = ({ isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const images = [
        {
            src: '/assets/image/first-proof.png',
            alt: 'First Proof of Legality'
        },
        {
            src: '/assets/image/second-proof.jpg',
            alt: 'Second Proof of Legality'
        },
        {
            src: '/assets/image/third-proof.jpg',
            alt: 'Third Proof of Legality'
        }
    ]

    useEffect(() => {
        if (isOpen) {
            // Trigger animation after mount
            setTimeout(() => setIsAnimating(true), 10)
            // Prevent body scroll when popup is open
            document.body.style.overflow = 'hidden'
        } else {
            setIsAnimating(false)
            // Restore body scroll when popup is closed
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handlePrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    if (!isOpen) return null

    return (
        <div 
            className={`fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-8 transition-all duration-300 ${
                isAnimating ? 'bg-black/70' : 'bg-black/0'
            }`}
            onClick={handleBackdropClick}
        >
            <div 
                className={`relative w-full max-w-[90vw] max-h-[90vh] md:max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden ${
                    isAnimating ? 'animate-popupBounce' : 'opacity-0 scale-95'
                }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:cursor-pointer hover:bg-gray-300 transition-all duration-300"
                    aria-label="Close popup"
                >
                    <IoClose className="text-2xl text-gray-700" />
                </button>

                {/* Header */}
                <div className="bg-primary text-white px-4 py-3 sm:px-6 sm:py-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Proof of Legalities</h2>
                    <p className="text-xs sm:text-sm mt-1">
                        Document {currentImageIndex + 1} of {images.length}
                    </p>
                </div>

                {/* Image Container */}
                <div className="relative bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8" style={{ minHeight: '300px', maxHeight: 'calc(90vh - 150px)' }}>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                            key={currentImageIndex}
                            src={images[currentImageIndex].src}
                            alt={images[currentImageIndex].alt}
                            width={800}
                            height={1000}
                            className="max-w-full max-h-[calc(90vh-200px)] w-auto h-auto object-contain animate-fadeIn"
                            priority
                        />
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:cursor-pointer hover:bg-gray-300 transition-all duration-300"
                        aria-label="Previous image"
                    >
                        <IoChevronBack className="text-xl sm:text-2xl text-gray-700" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:cursor-pointer hover:bg-gray-300 transition-all duration-300"
                        aria-label="Next image"
                    >
                        <IoChevronForward className="text-xl sm:text-2xl text-gray-700" />
                    </button>
                </div>

                {/* Thumbnail Navigation */}
                <div className="bg-white border-t border-gray-200 px-4 py-2 sm:px-6 sm:py-4">
                    <div className="flex justify-center gap-2 sm:gap-3">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold hover:cursor-pointer hover:bg-gray-300 transition-all duration-300 ${
                                    index === currentImageIndex
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                }`}
                                aria-label={`View document ${index + 1}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProofPopup

