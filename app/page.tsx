import Intro from "@/components/intro"
import SectionDivider from "@/components/sectionDivider"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
     <Intro />
     <SectionDivider />
     <About />
     <Projects />
     <Skills/>
     <Experience/>
    </main>
  )
}
