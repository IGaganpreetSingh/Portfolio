import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CircleBackground } from "@/components/CircleBackground";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaganpreet Singh - AI Lead at Codebrew Labs",
  description:
    "Portfolio of Gaganpreet Singh, AI Lead specializing in artificial intelligence and machine learning solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="relative min-h-screen overflow-hidden">
            <CircleBackground className="fixed -top-1/2 left-0 opacity-20" />
            <CircleBackground className="fixed -bottom-1/2 right-0 opacity-20" />
            <Navbar />
            <main className="relative">{children}</main>
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
