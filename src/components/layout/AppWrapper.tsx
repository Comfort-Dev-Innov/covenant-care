"use client";

import { useState } from "react";
import Header from "./Header";
import LoadingIndicator from "../base/LoadingIndicator";

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  return (
    <>
      <LoadingIndicator onLoadingComplete={() => setIsLoadingComplete(true)} />
      {isLoadingComplete && <Header />}
      <div className="mt-[120px]">
        {children}
      </div>
    </>
  );
}

