import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BlueSkyLogo, DribbleLogo, GithubLogo, XLogo } from "./icons";
import { Logo } from "./navbar/logo";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <Logo />

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Irvan Yusuf Cahyadi. All rights
            reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="https://github.com/IrvanYusuf" target="_blank">
              <GithubLogo className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/irvanyusufcahyadi/"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
