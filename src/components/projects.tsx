"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


interface Project {
    title: string;
    date: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl?: string;
    learnMoreUrl?: string;
}

const projects: Project[] = [
    {
        title: "Portfolio V2",
        description:
            "Designed and developed a personal portfolio website using Next.js, Framer Motion, React, Tailwind CSS, and ShadCN. The website showcases my projects, skills, and experiences, with smooth animations and a responsive design.",
        image: "/images/PortfolioV2Image1.png",
        tags: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "ShadCN"],
        date: "January 2025",
        demoUrl: "https://alexandergervaisporfoliov1.pages.dev",
        learnMoreUrl: "/projects/portfolioV2",
    },
    {
        title: "Cosmic Boogeyman Website",
        description:
            "Designed and deployed an interactive promotional website for a tarot reader, leveraging SvelteKit and Cloudflare for optimized performance and scalability, leading to a 40% increase in client inquiries.",
        image: "/images/CosmicImage1.png",
        tags: ["Svelte", "Node.js", "Cloudflare D3", "Tailwind CSS", "Prisma"],
        date: "June 2024",
        demoUrl: "https://cosmicboogeyman.com",
        learnMoreUrl: "/projects/cosmicboogeyman",
    },
    {
        title: "Portfolio V1",
        description:
            "Designed and developed a personal portfolio website using SvelteKit, Tailwind CSS, and Skeleton UI. The website showcases my projects, skills, and experiences, with smooth animations and a responsive design.",
        image: "/images/PortfolioV1Image1.png",
        tags: ["SvelteKit", "Tailwind CSS", "Skeleton UI"],
        date: "November 2024",
        demoUrl: "https://alexandergervaisporfoliov1.pages.dev",
        learnMoreUrl: "/projects/portfolioV1",
    },
    {
        title: "SubGenGUI",
        description:
            "Engineered a GUI tool using Python and PyTorch to automate subtitle generation for video files, reducing manual effort by 50% for content creators and improving workflow efficiency",
        image: "/images/SubGenImage1.png",
        tags: ["Python", "Django", "Tailwind", "HTML", "CSS"],
        date: "March 2024",
        demoUrl: "https://github.com/FreddyMaster/SubGenGUI",
        learnMoreUrl: "/projects/subgengui",
    },
    {
        title: "Quiz Game",
        description:
            " This is a simple Quiz Game that challenges the user to answer as many questions as they can without getting any questions wrong.",
        image: "/images/QuizGameImage1.png",
        tags: ["Svelte", "Node.js", "MySQL", "Tailwind CSS", "Prisma"],
        date: "January 2024",
        demoUrl: "https://github.com/FreddyMaster/QuizGame",
        learnMoreUrl: "/projects/quizgame",
    },
];


export default function Projects() {
  return (
    <section className="mx-auto px-4 py-8 container">
      <h1 className="mb-8 font-bold text-3xl text-foreground md:text-4xl">Projects</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full h-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <SpotlightCard className="h-full text-white">
            <SpotlightCard.Header className="p-0">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={250}
                className="px-3 pt-3 w-full h-48 sm:h-56 md:h-80 object-cover"
              />
            </SpotlightCard.Header>
            <SpotlightCard.Content className="flex-grow p-4 md:p-6">
              <div className="flex sm:flex-row flex-col justify-between items-start mb-2">
                <SpotlightCard.Title className="mb-1 sm:mb-0 font-semibold text-foreground text-xl md:text-2xl leading-tight tracking-tight">
                  {project.title}
                </SpotlightCard.Title>
                <span className="font-semibold text-muted-foreground text-sm">{project.date}</span>
              </div>
              <p className="mb-4 line-clamp-3 md:line-clamp-4 text-muted-foreground text-sm">
                {project.description}
              </p>
            </SpotlightCard.Content>
            <SpotlightCard.Footer className="flex flex-col flex-grow justify-end p-4 md:p-6">
              <div className="flex flex-wrap gap-2 mb-4 w-full">
                {project.tags.map((tech, i) => (
                  <Badge key={`${tech}-${i}`} variant="secondary" className="text-xs">
                {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex sm:flex-row flex-col justify-between gap-2 w-full">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-foreground text-sm"
                  onClick={() => window.open(project.demoUrl, "_blank")}
                >
                  Demo
                </Button>
                <Button
                  className="w-full sm:w-auto text-sm"
                  onClick={() => window.open(project.learnMoreUrl, "_blank")}
                >
                  Learn More
                </Button>
              </div>
            </SpotlightCard.Footer>
              </SpotlightCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="sm:visible invisible" />
        <CarouselNext className="sm:visible invisible" />

      </Carousel>
    </section>
  )
}




