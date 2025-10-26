"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/image/covenant-care-logo-square.png";

interface LoadingIndicatorProps {
  onLoadingComplete?: () => void;
}

export default function LoadingIndicator({ onLoadingComplete }: LoadingIndicatorProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Remove from DOM after 2.5 seconds (allowing time for fade animation)
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
      onLoadingComplete?.();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onLoadingComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-300 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo and Text */}
        <div className="flex items-center gap-6">
          <Image
            src={logo}
            alt="Covenant Care Logo"
            width={120}
            height={120}
            priority
          />
          <div className="flex flex-col">
            <h1 className="font-new-renaissance text-3xl md:text-5xl text-[#2C4F5E]">
              Covenant Care
            </h1>
            <p className="font-inter text-md md:text-lg text-[#C4A052]">
              Because Every Life Deserves Love and Care
            </p>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-16 w-16">
            <div className="absolute inset-2 animate-spin rounded-full border-4 border-b-transparent border-t-transparent border-[#2B3D4F]"></div>
            <div
              className="absolute inset-2 animate-spin rounded-full border-4 border-transparent border-t-transparent border-b-transparent border-l-[#D4A017]"
              style={{
                animationDuration: "1s",
              }}
            ></div>
          </div>
          <p className="font-inter text-sm text-foreground">Loading</p>
        </div>
      </div>
    </div>
  );
}
