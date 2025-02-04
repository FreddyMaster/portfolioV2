import ProjectPage from "@/components/project-page"

export default function Page() {
  const projectData = {
    title: "Quiz Game",
    date: "January 2024",
    description:
      "Designed and deployed an interactive promotional website for a tarot reader, leveraging SvelteKit and Cloudflare for optimized performance and scalability, leading to a 40% increase in client inquiries.",
    overview: [
      "This project involved creating a modern, interactive quiz game with multiple categories and difficulty levels. The main goals were to provide an engaging user experience, implement a robust scoring system, and ensure seamless performance across devices. Built with SvelteKit, Tailwind CSS, Prisma, and MySql, the game offers a dynamic platform for users to test their knowledge and track their progress. ",
      "The design focuses on user engagement and accessibility, with features like a timer to enhance the challenge and user authentication for personalized experiences. The project was deployed on a local server for testing and feedback, leading to continuous improvements based on user input. The game's performance was optimized to ensure quick load times and a smooth user interface, providing an enjoyable experience for all users. ",
    ],
    achievements: [
      "Developed a fully functional quiz game with multiple categories and difficulty levels",
      "Implemented a timer feature to enhance the challenge for users",
      "Integrated a scoring system to track user performance",
      "Enabled user authentication and profile management",
      "Deployed the application on a local server for testing and feedback",
    ],
    responsibilities: [
      "Led the end-to-end development process from concept to deployment",
      "Designed and implemented the database schema using Prisma",
      "Created reusable component library for consistent UI/UX",
      "Implemented the admin dashboard for managing content and user data",
      "Populated the database with initial data from an external API",
    ],
    technologies: ["Sveltekit", "Tailwind CSS", "MySQL", "Prisma"],
    images: ["/images/QuizGameImage1.png", "/images/QuizGameImage2.png", "/images/QuizGameImage3.png", "/images/QuizGameImage4.png", "/images/QuizGameImage5.png"],
    github: "https://github.com/FreddyMaster/QuizGame",
  }

  return <ProjectPage {...projectData} />
}

