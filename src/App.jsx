import { useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutSection from "./components/AboutSection"
import CustomCursor from "./components/CustomCursor"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProgessBar from "./components/ProgessBar";
import Skill from "./components/Skill";

export default function App() {

  useEffect(() => {
    //register scrolltrigger pluging
    gsap.registerPlugin(ScrollTrigger)

    //refesh scrolltrigger when page fully loaded
    ScrollTrigger.refresh()

    //clean up crolltrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
    <Header />
    <HeroSection />
    <CustomCursor/>
    <AboutSection />
    <Skill />
    <ProjectSection />
    <ContactSection />
    <Footer />
    <ProgessBar/>
    </>
  )
}