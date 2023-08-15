import Intro from "@/components/intro"
import SectionDivider from "@/components/sectionDivider"
import About from "@/components/About"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
     <Intro />
     <SectionDivider />
     <About />
     <Projects />
    </main>
  )
}
