import AboutSection from "./components/AboutSection"
import CustomCursor from "./components/CustomCursor"
import Header from "./components/header"
import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"

export default function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <CustomCursor/>
    <AboutSection />
    <ProjectSection />
    </>
  )
}