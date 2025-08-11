"use client";
import { Button } from "@/components/ui/button";
import { GithubLogo, XLogo } from "../icons";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavbarMobile from "./navbar-mobile";

export const menus = [
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Experiences",
    path: "/#experience",
  },
  {
    name: "Projects",
    path: "/#projects",
  },
  {
    name: "Educations",
    path: "/#educations",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-6 inset-x-4 h-14 max-w-screen-md mx-auto rounded-lg z-50 transition-all duration-500 ease-in-out transform ${
        scrolled ? "top-6 scale-95" : "top-0 scale-100"
      }`}
    >
      <div
        className={`h-full flex items-center justify-between mx-auto px-3 w-full transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border border-gray-200/30 shadow-2xl shadow-sky-500/20 rounded-2xl"
            : "bg-white rounded-2xl backdrop-blur-md border-b border-gray-200/20"
        }`}
      >
        <Logo />

        {/* Desktop Menu */}
        <Suspense fallback={<div />}>
          <NavMenu className="hidden md:block" />
        </Suspense>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full shadow-none"
            size="icon"
          >
            <Link
              href="https://www.threads.com/@irvanyusufcahyadi__"
              target="_blank"
            >
              <div className="relative h-5 w-5 opacity-70">
                <Image
                  src={"/thread.png"}
                  alt="thread icon"
                  fill
                  className="w-5 h-5"
                />
              </div>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
          >
            <Link href={"https://github.com/IrvanYusuf"} target="_blank">
              <GithubLogo className="h-5! w-5!" />
            </Link>
          </Button>
          <Button
            aria-label="menu-btn"
            variant="ghost"
            size="icon"
            className="lg:hidden cursor-pointer group hover:bg-sky-50 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu
              className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <NavbarMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  );
};

export default Navbar;
