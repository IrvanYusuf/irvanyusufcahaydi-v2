import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects";
import { Metadata } from "next";

// SEO Metadata Configuration
export const metadata: Metadata = {
  title: "Irvan Yusuf Cahyadi - Full Stack Developer | Portfolio",
  description:
    "Portfolio profesional Full Stack Developer dengan pengalaman dalam React, Next.js, Node.js, dan teknologi modern lainnya. Lihat proyek-proyek terbaru dan pengalaman kerja saya.",
  keywords: [
    "full stack developer",
    "web developer",
    "react developer",
    "nextjs developer",
    "javascript developer",
    "portfolio",
    "frontend developer",
    "backend developer",
    "indonesia developer",
    "medan developer",
  ],
  authors: [{ name: "Irvan Yusuf Cahyadi" }],
  creator: "Irvan Yusuf Cahyadi",
  publisher: "Irvan Yusuf Cahyadi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.irvanyusufcahyadi.com/"), // Ganti dengan domain Anda
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/id",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Irvan Yusuf Cahyadi - Full Stack Developer Portfolio",
    description:
      "Portfolio profesional menampilkan proyek-proyek web development dan pengalaman sebagai Full Stack Developer",
    url: "https://www.irvanyusufcahyadi.com/",
    siteName: "Portfolio Irvan Yusuf Cahyadi",
    images: [
      {
        url: "/image.jpg", // Pastikan file ini ada di folder public
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Irvan Yusuf Cahyadi",
  jobTitle: "Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in modern web technologies",
  url: "https://yourportfolio.com",
  image: "https://www.irvanyusufcahyadi.com/image.jpg",
  email: "irvanyusufcahyadi4@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medan",
    addressRegion: "North Sumatra",
    addressCountry: "Indonesia",
  },
  sameAs: [
    "https://www.linkedin.com/in/irvanyusufcahyadi/",
    "https://github.com/IrvanYusuf",
    "https://www.threads.com/@irvanyusufcahyadi__",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Web Development",
    "Laravel",
    "MySQL",
    "Material UI",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Universitas Mikroskil",
  },
  worksFor: {
    "@type": "Organization",
    name: "Universitas Mikroskil",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Content */}
      <div className="space-y-10 sm:space-y-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
      </div>
    </>
  );
}
