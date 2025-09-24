import { useRef, useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";
import { image } from "framer-motion/client";
import { scale } from "framer-motion";

const ProjectSection = () => {
  const sectionRef = useRef(null);    
  const titleRef = useRef(null);    
  const titleLineRef = useRef(null);   
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  // Project image data 
  const projectImages = [
    {
        id: 1,
        title: "3D gaming website",
        imageSrc: "/images/project-1.png", 
    },
    {
        id: 2,
        title: "3D gaming website",
        imageSrc: "/images/project-2.png", 
    },
    {
        id: 3,
        title: "3D gaming website",
        imageSrc: "/images/project-3.png", 
    },
    {
        id: 4,
        title: "3D gaming website",
        imageSrc: "/images/project-4.png", 
    },
    {
        id: 5,
        title: "3D gaming website",
        imageSrc: "/images/thumbnail.png", 
    },
  ]

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
          start: "top 80%",
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

    // Section enternce animation
    gsap.fromTo(
        triggerRef.current, 
        {
            y: 100,
            rotationX: 20,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger:{
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        }
    )

    //peralax ffect for the section
    gsap.fromTo(
        sectionRef.current,
        {
            backgroundPosition: "50% 0%",
        },
        {
            backgroundPosition: "50% 100%",
            ease: "none",
            scrollTrigger:{
                trigger:sectionRef.current,
                start: "top to bottom",
                end: "bottom to top",
                scrub: true
            }
        }
    )

    // horozontal scrolling
    const horizontalScroll = gsap.to(".panel", {
        xPercent: -100 * (projectImages.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger:triggerRef.current,
            start: "top top",
            end: () => `+=${horizontalRef.current.offsetWidth}`,
            pin: true,
            scrub: 1,
            snap: {
                snapTo: 1 / (projectImages.length - 1),
                duration: {main: 0.2, max: 0.3},
                delay: 0.1,
            },
            invalidateOnRefresh: true,
        }
    })

    //image animation
    const panels = gsap.utils.toArray(".panel")
    panels.forEach((panel, i) => {
        const image = panel.querySelector(".project-image")
        const imageTitle = panel.querySelector(".project-title")

        //timeline for panel
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalScroll,
                start: "left right",
                end: "right left",
                scrub: true
            }
        })
        //image scall and opacity animation
    tl.fromTo(image, {scale: 0, rotate: -20,}, {scale:1, rotate:1, duration: 0.5})

    //title animation if it existe
    if(imageTitle){
        tl.fromTo(imageTitle, {y:30,}, {y: -100, duration: 0.3,}, 0.2)
    }
    })

    
  }, [projectImages.length]); 

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
      <div ref={triggerRef} className="overflow-hidden opacity-0" >
        <div ref={horizontalRef} className="horizontal-section md:w-[400%] flex w-[420%]"> 
          {projectImages.map((project) => (
            <div 
              key={project.id}
              className="panel relative flex items-center justify-center "
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="project-image max-w-full max-h-full rounded-2xl object-cover"
                />
                  <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold
                  text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                    {project.title} <SlShareAlt/>
                  </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default ProjectSection;