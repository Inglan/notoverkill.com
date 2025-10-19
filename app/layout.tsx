import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

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
        <Header />
        <ThemeProvider attribute="class" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
