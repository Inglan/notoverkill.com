import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { MotionConfig } from "motion/react";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "notoverkill",
  description: "My homelab is not overkill, not even a bit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.className} antialiased`}>
        <MotionConfig transition={{ ease: [0.165, 0.84, 0.44, 1.0] }}>
          {children}
          <Toaster />
        </MotionConfig>
      </body>
    </html>
  );
}
