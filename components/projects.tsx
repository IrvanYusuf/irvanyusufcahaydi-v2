"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubLogo } from "./icons";
import { useQuery } from "@tanstack/react-query";
import PortfolioServices from "@/services/portfolio.service";
import { Portfolio } from "@/types/portfolio.type";
import CloudinaryImage from "./ui/cloudinary-image";
import ButtonGradient from "./button/button-gradient";
import Link from "next/link";
import { truncateText } from "@/lib/utils";

interface ProjectCardProps {
  portfolio: Portfolio;
}

const ProjectCard = ({ portfolio }: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:shadow-lg hover:shadow-sky-600/20">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <CloudinaryImage
          publicId={portfolio.thumbnail}
          alt={portfolio.name}
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{portfolio.name}</h3>
        <p className="text-muted-foreground mb-4 text-justify">
          {truncateText(portfolio.desc ?? "", 100)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {portfolio.portfolio_skills.map((tech) => (
            <Badge
              key={tech.skills.id}
              variant="secondary"
              className="rounded-full"
            >
              {tech.skills.name}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {portfolio.website_link && (
            <ButtonGradient>
              <Link
                href={portfolio.website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </Link>
            </ButtonGradient>
          )}
          <Button
            variant="outline"
            className="shadow-none flex"
            disabled={!portfolio.github_link}
          >
            <Link
              href={portfolio.github_link ?? "/"}
              target="_blank"
              className="flex items-center"
            >
              <GithubLogo className="mr-1 h-4 w-4" />
              View Code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: PortfolioServices.getPortfoliosBest,
  });

  console.log(data);
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.data &&
            data?.data.map((portfolio, index) => (
              <ProjectCard key={index} portfolio={portfolio} />
            ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href={""}>
            <ButtonGradient size="lg" className="group">
              View More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </ButtonGradient>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
