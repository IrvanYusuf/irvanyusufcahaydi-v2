import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";
import ButtonGradient from "./button/button-gradient";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <div className="relative animate-fade-in">
            <div className="absolute -top-2 -left-8 glass-effect rounded-2xl p-4 animate-float">
              <ProfileIcon image="/react.png" alt="react icon" text="React" />
            </div>
            <div className="absolute -top-2 right-0 md:-right-8 glass-effect rounded-2xl p-4 animate-float delay-1000">
              <ProfileIcon
                image="/typescript.png"
                alt="typescript icon"
                text="Typescript"
              />
            </div>

            <div className="absolute -bottom-16 md:-bottom-6 -left-8 glass-effect rounded-2xl p-4 animate-float delay-500">
              <ProfileIcon
                image="/flutter.png"
                alt="flutter icon"
                text="Flutter"
              />
            </div>
            <ProfileImage className="" />
          </div>

          {/* Content */}
          <div className="flex-1 md:text-left w-full">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            {/* <ProfileImage className="mt-3 mb-8 block md:hidden" /> */}
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Passionate about creating impactful web experiences
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              With over 2 years of experience in full-stack development, I
              specialize in building scalable web applications using modern
              technologies. My expertise includes React, Node.js, and Mobile.
              I&apos;m passionate about creating elegant solutions to complex
              problems and sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Link href={"https://github.com/IrvanYusuf"} target="_blank">
                <ButtonGradient size="sm">
                  <GithubLogo />
                  View Github
                </ButtonGradient>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/irvanyusufcahyadi/"}
                target="_blank"
              >
                <Button variant="outline" className="cursor-pointer">
                  <Linkedin />
                  Coonect with me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "mt-10 w-full h-64 md:w-64 md:h-64 relative overflow-hidden rounded-2xl",
      className
    )}
    {...props}
  >
    {/* Gambar */}
    <Image src="/image.jpg" alt="" className="object-cover" fill />
  </div>
);

const ProfileIcon = ({
  image,
  alt,
  text,
}: {
  image: string;
  alt: string;
  text: string;
}) => (
  <div className="flex items-center space-x-2">
    <div className={"w-8 h-8 md:w-8 md:h-8"}>
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
        <Image src={image} alt={alt} className="object-cover" fill />
      </div>
    </div>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export default About;
