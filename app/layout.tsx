import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/queryClient";

const geistSans = Geist({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Shadcn UI Portfolio",
  description:
    "A beautiful portfolio template built with Shadcn UI, Tailwind CSS 4, and Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.className} antialiased`}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
