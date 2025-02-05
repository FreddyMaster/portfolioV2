"use client";
import { Particles } from "@/components/ui/particles";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { CycleText } from "@/components/ui/cycle-text";

export default function Splash() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 p-4 h-screen">
            <BlurFade delay={0}>
                <h1 className="font-bold text-3xl text-center md:text-6xl leading-tight lg:leading-[1.1] tracking-tighter">
                    Hi, I&apos;m Alexander Gervais<br />
                    <span><CycleText /></span>
                </h1>
            </BlurFade>
            <BlurFade delay={0}>
                <div className="flex gap-4">
                    <a href="/files/AlexanderGervaisResume2025.pdf">
                        <Button>Resume</Button>
                    </a>
                    <a href="#projects">
                        <Button variant="outline">View Projects</Button>
                    </a>
                </div>
            </BlurFade>
            <Particles className="absolute inset-0 pointer-events-none" refresh={true} />
        </div>
    );
}
