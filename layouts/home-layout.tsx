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
      <div className="pt-10">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
