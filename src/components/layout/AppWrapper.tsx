"use client";

import { useState, createContext, useContext } from "react";
import Header from "./Header";
import LoadingIndicator from "../base/LoadingIndicator";
import OnboardingPopup from "../base/OnboardingPopup";

interface AppWrapperProps {
  children: React.ReactNode;
}

interface OnboardingContextType {
  openPopup: (planType: 'Individual' | 'Family') => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within AppWrapper');
  }
  return context;
};

export default function AppWrapper({ children }: AppWrapperProps) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'Individual' | 'Family'>('Individual');

  const openPopup = (planType: 'Individual' | 'Family') => {
    setSelectedPlan(planType);
    setIsPopupOpen(true);
  };

  return (
    <OnboardingContext.Provider value={{ openPopup }}>
      <LoadingIndicator onLoadingComplete={() => setIsLoadingComplete(true)} />
      {isLoadingComplete && (
        <>
          <Header />
          <div className="animate-simpleFadeIn mt-[120px]">
            {children}
          </div>
        </>
      )}
      <OnboardingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        planType={selectedPlan}
      />
    </OnboardingContext.Provider>
  );
}

