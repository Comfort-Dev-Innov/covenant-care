"use client";

import React, { useState } from "react";
import Image from "next/image";
import { satellitesData, Satellite } from "@/constants/satellitesData";

interface SatelliteCardProps {
  satellite: Satellite;
}

const SatelliteCard: React.FC<SatelliteCardProps> = ({ satellite }) => {
  return (
    <div className="relative rounded-lg shadow-sm overflow-hidden h-[400px] max-w-[400px] min-w-[300px] md:min-w-[320px] lg:min-w-[360px] animate-fadeIn">
      {/* Map Image as Background */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={satellite.mapImage}
          alt={`Map of ${satellite.name}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Location Details Overlay - Anchored to Bottom */}
      <div className="relative object-bottom bottom-0 left-0 right-0 p-4 pt-8 satellite-overlay backdrop-blur-[3px] hover:backdrop-blur-[5px] transition-all duration-300">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {/* Address */}
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm text-black font-inter">
                {satellite.address}
              </span>
            </div>

            {/* Satellite Name */}
            <h3 className="text-lg font-bold text-black mb-2 font-inter">
              {satellite.name}
            </h3>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href={`tel:${satellite.phone?.replace(/\s/g, "") ?? ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:text-blue-600 hover:underline duration-300 transition-all font-inter"
              >
                {satellite.phone}
              </a>
            </div>
          </div>

          {/* Map Button */}
          {satellite.link && (
            <button
              onClick={() => window.open(satellite.link ?? "", "_blank")}
              className="cursor-pointer ml-4 w-10 h-10 bg-[var(--secondary)] rounded-lg flex items-center justify-center transition-colors"
            >
              <svg
                className="w-5 h-5 hover:scale-110 transition-all duration-300 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const SatellitesSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const visibleSatellites = satellitesData.slice(0, visibleCount);
  const hasMore = visibleCount < satellitesData.length;

  const loadMore = () => {
    setIsLoading(true);
    // Add a small delay to show loading state
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 3, satellitesData.length));
      setIsLoading(false);
    }, 300);
  };

  return (
    <section
      id="satellites"
      className="w-full py-16 px-4 flex flex-col items-center justify-center"
    >
      <div className="max-w-[1202px] w-full">
        {/* Section Header */}
        <div className="text-center mb-12 mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-inter">
            Satellites
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Find a <strong>Covenant Care</strong> satellite near you
          </p>
        </div>

        {/* Satellite Cards Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 ">
          {visibleSatellites.map((satellite) => (
            <SatelliteCard key={satellite.id} satellite={satellite} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <button
              onClick={loadMore}
              disabled={isLoading}
              className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors font-inter disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Loading..." : "See More Satellites"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SatellitesSection;
