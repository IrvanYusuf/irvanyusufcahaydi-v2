import { ReactNode } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface ButtonGradientProps {
  children: ReactNode;
  size?: "default" | "icon" | "lg" | "sm";
  className?: string;
}

const ButtonGradient = ({
  children,
  size = "sm",
  className,
}: ButtonGradientProps) => {
  return (
    <Button
      size={size}
      className={cn(
        "bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8 py-4 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 group cursor-pointer",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default ButtonGradient;
