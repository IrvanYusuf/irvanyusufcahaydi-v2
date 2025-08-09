import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Mentor Front End Developer",
      company: "Dhuo Creative",
      period: "2024 - 2025",
      description:
        "Guided students in mastering modern front-end technologies such as React, API Integration and Bootstrap. Provided code reviews, best practice recommendations, and hands-on project support to help them build production-ready applications.",
    },
    {
      title: "Full Stack Developer",
      company: "Startup Dentaloka",
      period: "2024 - 2025",
      description:
        "Built and maintained Dentaloka, a freelance-style platform where dental professionals can post and manage job opportunities, and clients can connect with them for dental services. Developed responsive UIs, secure backend APIs, Firebase Auth integration, and ensured seamless collaboration between doctors and clients.",
    },
    {
      title: "Mentor Web Developer",
      company: "Dhuo Creative",
      period: "2023 - 2025",
      description:
        "Taught and guided aspiring web developers in HTML, CSS, JavaScript, and backend fundamentals (PHP, MySQL). Assisted in real-world project building, ensuring students understood both technical and collaborative aspects of web development.",
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
