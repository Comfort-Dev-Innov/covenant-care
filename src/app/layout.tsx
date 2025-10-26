import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/layout/AppWrapper";

export const metadata: Metadata = {
  title: "Covenant Care",
  description: "because every life deserves love and care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
