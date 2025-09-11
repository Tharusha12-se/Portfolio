import { useRef, useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectSection = () => {
  const sectionRef = useRef(null);    
  const titleRef = useRef(null);    
  const titleLineRef = useRef(null);   

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Title reveal animation
    gsap.fromTo(
      titleRef.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Fixed the typo (removed space before "top")
          toggleActions: "play none none reverse"
        }
      }
    );

    // Title line animation
    gsap.fromTo(
      titleLineRef.current,
      {
        width: "0%",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []); 

  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0">
          Feature Project
        </h2>
        <div 
          ref={titleLineRef}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        >
        </div>
      </div>

      {/* Horizontal section */}

    </section>
  );
}

export default ProjectSection;