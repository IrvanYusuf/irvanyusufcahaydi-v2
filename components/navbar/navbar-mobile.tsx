"use client";

import Link from "next/link";
import { menus } from "./navbar";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarMobileProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const NavbarMobile = ({ isMenuOpen, setIsMenuOpen }: NavbarMobileProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash); // update hash setiap route berubah
  }, [pathname, searchParams]);
  return (
    <div className={`lg:hidden overflow-hidden`}>
      <div className="max-w-screen-md mx-auto">
        <nav
          className={`p-6 w-full ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } rounded-2xl border-gray-200/50 transition-all duration-300 bg-white/95 backdrop-blur-md space-y-1`}
        >
          {menus.map((menu, index) => {
            const isActive = `${pathname}${hash}` === menu.path;

            return (
              <Link
                key={index}
                href={menu.path}
                className={`block py-3 px-4 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200 ${
                  isActive ? "bg-sky-50 text-sky-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {menu.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default NavbarMobile;
