'use client';

import { useState, useEffect, useCallback } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface CarouselItem {
  image: string | StaticImageData;
  title: string;
  content: string;
}

interface ImageCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ImageCarousel({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle infinite cycling
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setCurrentIndex(index);

      // Reset transition state after animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    },
    [isTransitioning]
  );

  // Navigate to previous slide
  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, items.length, goToSlide, isTransitioning]);

  // Navigate to next slide
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, items.length, goToSlide, isTransitioning]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext, items.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No items to display</p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <div className="relative w-full h-[625px] rounded-[15px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Gradient overlay from left (darker) to right (lighter) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-[15px]"></div>

                {/* Title and Content Overlay */}
                <div className="absolute flex flex-col justify-between md:justify-start h-[500px] md:h-auto px-0 sm:px-6 md:px-15 bottom-20 md:bottom-22 left-10 md:left-14 right-14 md:left-8 md:right-8 text-white">
                  <h2 className="text-[32px] md:text-[64px] font-bold mb-2 md:mb-3 font-inter">
                    {item.title}
                  </h2>
                  <p className="whitespace-normal lg:whitespace-pre-line font-inter font-light text-[15px] md:text-[20px] opacity-90">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {items.length > 1 && (
          <>
            {/* Left arrow */}
            <button
              disabled={isTransitioning}
              className="absolute left-4 cursor-default bottom-8 md:top-1/2 transform md:-translate-y-1/2 text-white hover:text-white/50 pl-6 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous image"
            >
              <svg
                onClick={goToPrevious}
                className="md:w-10 md:h-10 w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              disabled={isTransitioning}
              className="cursor-default absolute right-4 bottom-8 md:top-1/2 transform md:-translate-y-1/2 text-white hover:text-white/50 pr-6 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next image"
            >
              <svg
                onClick={goToNext}
                className="md:w-10 md:h-10 w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dot indicators */}
        {items.length > 1 && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`md:w-3 md:h-3 w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white scale-110'
                    : 'bg-white/50 hover:bg-white/70'
                } disabled:cursor-not-allowed`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
