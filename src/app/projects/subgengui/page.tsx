import ProjectPage from "@/components/project-page"

export default function Page() {
  const projectData = {
    title: "SubGenGUI",
    date: "October 2023",
    description:
      "Designed and deployed an interactive promotional website for a tarot reader, leveraging SvelteKit and Cloudflare for optimized performance and scalability, leading to a 40% increase in client inquiries.",
    overview: [
      " This project involved creating a user-friendly GUI for generating subtitles. The main goals were to simplify the process of subtitle creation, ensure high accuracy in synchronization, and provide a seamless user experience. Built with Whisper, Node.js, Flask, and Python, the application allows users to drag and drop video files, generate subtitles, and export them in .srt format. ",
      "The design ensures cross-platform compatibility and ease of use, with a focus on performance and accuracy. The project led to a significant improvement in the efficiency of subtitle generation, making it accessible to users with varying levels of technical expertise. The application's performance was optimized to handle large video files and ensure precise subtitle synchronization. ",
    ],
    achievements: [
      "Developed a user-friendly GUI for generating subtitles",
      "Implemented drag-and-drop functionality for video files",
      "Ensured high accuracy in subtitle synchronization",
      "Designed for cross-platform compatibility",
      "Allows the user to export to a .srt file",
    ],
    responsibilities: [
      "Led the design and development of the GUI using HTML + CSS",
      "Led the development of the backend using Flask and Python",
      "Implemented subtitle generation using whisper",
      "Ensured integration with multiple subtitle formats",
      "Wrote documentation for the project",
    ],
    technologies: ["Sveltekit", "Tailwind CSS", "MySQL", "Prisma"],
    images: ["/images/SubGenImage1.png", "/images/SubGenImage2.png"],
    github: "https://github.com/FreddyMaster/SubGenGUI",
  }

  return <ProjectPage {...projectData} />
}

