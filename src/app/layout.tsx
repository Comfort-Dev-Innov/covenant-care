import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "@/components/layout/AppWrapper";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Covenant Care",
  description: "because every life deserves love and care",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Covenant Care",
    description: "because every life deserves love and care",
    url: siteUrl,
    siteName: "Covenant Care",
    locale: "en_US",
    type: "website",
    images: [
      "/assets/image/meta.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Covenant Care",
    description: "because every life deserves love and care",
    images: [
      "/assets/image/meta.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className="bg-background">
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
