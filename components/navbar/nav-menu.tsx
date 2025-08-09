"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { menus } from "./navbar";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface NavMenuProps {
  className?: string;
}

export const NavMenu = ({ className }: NavMenuProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash); // update hash setiap route berubah
  }, [pathname, searchParams]);
  return (
    <NavigationMenu
      className={cn("data-[orientation=vertical]:items-start", className)}
    >
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {menus.map((menu, index) => {
          const isActive = `${pathname}${hash}` === menu.path;
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className={`block py-3 px-4 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200 ${
                  isActive ? "bg-sky-50 text-sky-600" : ""
                }`}
              >
                <Link href={menu.path}>{menu.name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
