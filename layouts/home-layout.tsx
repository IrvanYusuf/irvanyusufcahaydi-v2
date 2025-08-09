"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}
const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
