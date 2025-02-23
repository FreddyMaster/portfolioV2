import Splash from "@/components/splash";
import ScrollArrow from "@/components/scroll-arrow";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
    return (
        <div className="mx-auto container">
            <section id="splash" >
                <Splash />
            </section>
            <ScrollArrow />
            <section id="about" className="text=left pt-32">
                <About />
            </section>

            <section id="skills" className="pt-32 text-left">
                <Skills />
            </section>

            <section id="projects" className="pt-32 text-left">
                <Projects />
            </section>

            <section id="contact" className="pt-32 text-left">
                <Contact />
            </section>
        </div>
    );
}
