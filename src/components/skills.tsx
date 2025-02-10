import { BlurFade } from "@/components/ui/blur-fade";
import React from 'react';
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Separator } from "@/components/ui/separator"

export default function Skills() {
  return (
    <div>
      <BlurFade delay={0}>
      <h2 className="font-bold dark:text-white text-4xl">Skills</h2>
      </BlurFade>
      <div className="flex flex-col gap-4 m-4">
        <BlurFade delay={0.25}>
        <div>
          <div>
            <h3 className="mb-4 font-semibold text-xl">Programming Languages</h3>
            <Separator />
            <HoverEffect items={skillsData.programmingLanguages} />
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-xl">Front-End</h3>
            <Separator />
            <HoverEffect items={skillsData.frontEnd} />
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-xl">Back-End</h3>
            <Separator />
            <HoverEffect items={skillsData.backEnd} />
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-xl">Other Skills</h3>
            <Separator />
            <HoverEffect items={skillsData.otherSkills} />
          </div>
        </div>
        </BlurFade>
      </div>
    </div>
  );
}
export const skillsData = {
  programmingLanguages: [
    { title: "Python", icon: "logos:python", link: "https://www.python.org/" },
    { title: "JavaScript", icon: "logos:javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { title: "TypeScript", icon: "devicon:typescript", link: "https://www.typescriptlang.org/" },
    { title: "SQL", icon: "logos:mysql-icon", link: "https://www.mysql.com/" },
  ],
  frontEnd: [
    { title: "React", icon: "logos:react", link: "https://reactjs.org/" },
    { title: "Svelte", icon: "logos:svelte-icon", link: "https://svelte.dev/" },
    { title: "HTML", icon: "logos:html-5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "CSS", icon: "logos:css-3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "Tailwind CSS", icon: "logos:tailwindcss-icon", link: "https://tailwindcss.com/" },
  ],
  backEnd: [
    { title: "Node.js", icon: "logos:nodejs-icon", link: "https://nodejs.org/" },
    { title: "Prisma", icon: "file-icons:prisma", link: "https://www.prisma.io/" },
    { title: "Flask", icon: "file-icons:flask", link: "https://flask.palletsprojects.com/" },
  ],
  otherSkills: [
    { title: "Git", icon: "logos:git-icon", link: "https://git-scm.com/" },
    { title: "Docker", icon: "logos:docker-icon", link: "https://www.docker.com/" },
    { title: "Cloudflare", icon: "logos:cloudflare-icon", link: "https://www.cloudflare.com/" },
    { title: "Vercel", icon: "tabler:brand-vercel-filled", link: "https://vercel.com" },
    { title: "Transformers", icon: "fluent-emoji:hugging-face", link: "https://huggingface.co/docs/transformers/en/index" },
  ],
};


