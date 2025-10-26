import type { Metadata } from "next";
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
