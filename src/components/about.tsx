import { BlurFade } from "@/components/ui/blur-fade";

export default function About() {
    return (
        <div>
            <BlurFade delay={0}>
            <h2 className="font-bold text-4xl dark:text-white">About Me</h2>
            </BlurFade>

            <div className="space-y-6 pt-4 text-base text-muted-foreground sm:text-md lg:text-lg">
                <BlurFade delay={0.25}>
                <p>
                    Hi, I&apos;m Alexander Gervais, a passionate Software Engineer with a
                    Bachelor of Science in Computer Science from Fitchburg State University,
                    where I graduated Magna Cum Laude in December 2024. I have a strong
                    foundation in programming languages like Python, JavaScript, and C++,
                    and hands-on experience in frameworks like React, Svelte, and Django,
                    which allows me to bring both creativity and technical precision to
                    every project I undertake.
                </p>
                </BlurFade>
                <BlurFade delay={0.25}>
                <p>
                    In addition to my academic achievements, I&apos;ve honed my skills through
                    impactful projects such as developing SubGenGUI, a Python-based GUI tool
                    that streamlines subtitle generation for content creators, and building
                    the Cosmic Boogeyman website, which leverages SvelteKit to boost online
                    engagement.
                </p>
                </BlurFade>
                <BlurFade delay={0.25}>
                <p>
                    As a freelance web developer, I specialize in creating visually
                    compelling, responsive websites tailored to client needs. My approach
                    combines technical expertise with a commitment to delivering scalable
                    and user-friendly solutions. Beyond web development, I have a proven
                    track record as a computer repair technician, where I&apos;ve resolved
                    hardware and software issues for hundreds of clients, earning a 95%
                    customer satisfaction rate.
                </p>
                </BlurFade>
                <BlurFade delay={0.25}>
                <p>
                    When I&apos;m not coding, I enjoy diving into personal projects,
                    experimenting with new technologies, and spending time with friends. My
                    goal is to build innovative solutions that make a difference, whether
                    it&apos;s enhancing user experience, improving system performance, or
                    creating tools that simplify complex workflows.
                </p>
                </BlurFade>
                <BlurFade delay={0.25}>
                <p>
                    Feel free to explore my portfolio and reach out—I&apos;d be delighted to
                    collaborate and bring your ideas to life!
                </p>
                </BlurFade>
            </div>
        </div>
    );
}