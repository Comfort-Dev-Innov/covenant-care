import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import LoadingIndicator from "@/components/base/LoadingIndicator";

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
      <body>
        <LoadingIndicator />
        <Header />
        {children}
      </body>
    </html>
  );
}
