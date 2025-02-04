import ProjectPage from "@/components/project-page"

export default function Page() {
  const projectData = {
    title: "Cosmic Boogeyman Website",
    date: "June 2024",
    description:
      "Designed and deployed an interactive promotional website for a tarot reader, leveraging SvelteKit and Cloudflare for optimized performance and scalability, leading to a 40% increase in client inquiries.",
    overview: [
      "This project involved creating a modern, interactive website for a professional tarot reader. The main goals were to enhance user engagement, optimize performance, and increase client inquiries through interactive features. Built with SvelteKit, Tailwind CSS, Prisma, and Cloudflare, the site provides a professional online presence, allowing clients to book private readings and learn about the reader's services.",
      "The design ensures responsiveness and accessibility across all devices, with deployment on Cloudflare offering enhanced security and global content delivery. The project led to a 40% increase in client inquiries, showcasing the site's effectiveness in promoting the reader's services. The site's performance was optimized to achieve a 95+ Lighthouse score across all metrics, ensuring a seamless user experience.",
    ],
    achievements: [
      "Implemented responsive design patterns resulting in 40% increase in mobile user engagement",
      "Optimized performance achieving a 95+ Lighthouse score across all metrics",
      "Integrated Cloudflare for enhanced security and global content delivery",
      "Developed custom animations and interactive elements using Framer Motion",
      "Implemented SEO best practices leading to improved search engine rankings",
    ],
    responsibilities: [
      "Led the end-to-end development process from concept to deployment",
      "Designed and implemented the database schema using Prisma",
      "Created reusable component library for consistent UI/UX",
      "Implemented automated testing and CI/CD pipeline",
      "Optimized build process and asset delivery",
    ],
    technologies: ["Sveltekit", "TypeScript", "Tailwind CSS", "Cloudflare", "Prisma"],
    images: ["/images/CosmicImage1.png", "/images/CosmicImage2.png", "/images/CosmicImage3.png", "/images/CosmicImage4.png", "/images/CosmicImage5.png"],
    liveDemo: "https://cosmicboogeyman.com",
  }

  return <ProjectPage {...projectData} />
}

