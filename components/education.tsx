import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
  city: string;
}

const EducationItem = ({
  degree,
  institution,
  period,
  description,
  city,
}: EducationItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <GraduationCap className="size-5 text-muted-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{institution}</span>
            <span className="text-sm font-semibold">{city}</span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium">{degree}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-justify">{description}</p>
      </div>
    </div>
  );
};

const Education = () => {
  const educations = [
    {
      degree: "Bachelor of Information Technology",
      city: "Medan, Indonesia",
      institution: "UNIVERISTAS MIKROSKIL",
      period: "2022 - Present",
      description:
        "Focused on software engineering, full-stack web development, Python and database management.",
    },
    {
      degree:
        "High School Diploma - Computer Systems Networking and Telecommunications",
      city: "Silangkitang, Indonesia",
      institution: "SMK SWASTA MANDIRI AL-WASHLIYAH SILANGKITANG",
      period: "2018 - 2021",
      description:
        "Specialized in computer systems, networking, and telecommunications. Gained hands-on experience in assembling and troubleshooting PCs, configuring LAN/WAN networks, and managing network security. Learned operating systems, server administration, and basic programming to support IT infrastructure solutions.",
    },
  ];

  return (
    <section id="educations" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Education
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Academic Background
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my educational journey and key academic achievements
          </p>
        </div>

        <div className="relative">
          {educations.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
