import ProjectPage from "@/components/project-page"

export default function Page() {
  const projectData = {
    title: "Portfolio V2",
    date: "January 2025",
    description:
      "Designed and developed a personal portfolio website using Next.js, Framer Motion, React, Tailwind CSS, and ShadCN. The website showcases my projects, skills, and experiences, with smooth animations and a responsive design.",
    overview: [
      "This project involved creating a modern and interactive portfolio website to showcase my work and skills. The main goals were to provide a visually appealing and user-friendly experience, ensure fast load times, and highlight my expertise in web development.",
      "The design focuses on clean aesthetics and smooth animations, leveraging Framer Motion for interactive elements. The website is fully responsive, ensuring a seamless experience across all devices. Tailwind CSS was used for efficient styling, and ShadCN was integrated for additional UI components.",
    ],
    achievements: [
      "Developed a responsive and visually appealing portfolio website",
      "Implemented smooth animations using Framer Motion",
      "Showcased projects and skills effectively",
      "Optimized for fast load times and performance",
      "Integrated ShadCN for additional UI components",
    ],
    responsibilities: [
      "Led the design and development of the portfolio using Next.js and React",
      "Implemented animations and interactive elements with Framer Motion",
      "Styled the website using Tailwind CSS",
      "Integrated ShadCN for enhanced UI components",
      "Ensured responsive design and fast performance",
    ],
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "ShadCN"],
    images: ["/images/PortfolioImage1.png", "/images/PortfolioImage2.png"],
    liveDemo: "https://your-portfolio-v1-url.com",
    github: "https://github.com/YourUsername/PortfolioV2",
  }

  return <ProjectPage {...projectData} />
}

