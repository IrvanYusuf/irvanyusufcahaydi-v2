import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Download, Zap } from "lucide-react";
import GradientText from "../text/gradient-text";
import ButtonGradient from "../button/button-gradient";
import Statictic from "./statistic";
import Link from "next/link";
import ButtonDownloadCv from "../button/button-download-cv";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Fullstack Web Developer
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Building <GradientText text="Scalable" /> & Engaging{" "}
          <GradientText text="Web Experiences" />
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Hey there! I&apos;m Irvan Yusuf Cahyadi, a Full Stack Developer who
          loves building cool and scalable web experiences. From crafting
          beautiful frontends to powering robust backends, I bring ideas to life
          with clean code and great design. Let&apos;s create something amazing
          together! 🚀
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <ButtonDownloadCv />
          <Link href={"/#projects"}>
            <ButtonGradient size="lg" className="text-base group">
              See What I Do
              <CircleArrowDown className="ml-2 !h-5.5 !w-5.5 transform transition-all duration-300 ease-in-out group-hover:translate-y-[2px]" />
            </ButtonGradient>
          </Link>
        </div>

        {/* Stats Section */}
        <Statictic />
      </div>
    </div>
  );
};

export default Hero;
