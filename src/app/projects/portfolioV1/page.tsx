import ProjectPage from "@/components/project-page"

export default function Page() {
  const projectData = {
    title: "Portfolio V1",
    date: "November 2024",
    description:
      "Designed and developed a personal portfolio website using SvelteKit, Tailwind CSS, and Skeleton UI. The website showcases my projects, skills, and experiences, with smooth animations and a responsive design.",
    overview: [
      "This project involved creating a modern and interactive portfolio website to showcase my work and skills. The main goals were to provide a visually appealing and user-friendly experience, ensure fast load times, and highlight my expertise in web development.",
      "The design focuses on clean aesthetics and smooth animations, leveraging SvelteKit for interactive elements. The website is fully responsive, ensuring a seamless experience across all devices. Tailwind CSS was used for efficient styling, and Skeleton UI was integrated for additional UI components.",
    ],
    achievements: [
      "Developed a responsive and visually appealing portfolio website",
      "Implemented smooth animations using SvelteKit",
      "Showcased projects and skills effectively",
      "Optimized for fast load times and performance",
      "Integrated Skeleton UI for additional UI components",
    ],
    responsibilities: [
      "Led the design and development of the portfolio using SvelteKit",
      "Implemented animations and interactive elements with SvelteKit",
      "Styled the website using Tailwind CSS",
      "Integrated Skeleton UI for enhanced UI components",
      "Ensured responsive design and fast performance",
    ],
    technologies: ["SvelteKit", "Tailwind CSS", "Skeleton UI"],
    images: ["/images/PortfolioV1Image1.png", "/images/PortfolioV1Image2.png", "/images/PortfolioV1Image3.png", "/images/PortfolioV1Image4.png"],
    liveDemo: "https://your-portfolio-v1-url.com",
    github: "https://github.com/FreddyMaster/portfolioV1",
  }

  return <ProjectPage {...projectData} />
}

