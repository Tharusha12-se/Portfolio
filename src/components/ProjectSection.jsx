import { useRef, useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

const ProjectSection = () => {
  const sectionRef = useRef(null);    
  const titleRef = useRef(null);    
  const titleLineRef = useRef(null);   
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  // Project data with type specification
  const projectImages = [
    {
        id: 1,
        title: "Rawana Health Care Center",
        imageSrc: "/images/Rawana.mp4", 
        type: "video"
    },
    {
        id: 2,
        title: "3D gaming website",
        imageSrc: "/images/project-2.png", 
        type: "image"
    },
    {
        id: 3,
        title: "3D gaming website",
        imageSrc: "/images/project-3.png", 
        type: "image"
    },
    {
        id: 4,
        title: "3D gaming website",
        imageSrc: "/images/project-4.png", 
        type: "image"
    },
    {
        id: 5,
        title: "3D gaming website",
        imageSrc: "/images/thumbnail.png", 
        type: "image"
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

    // Section entrance animation
    gsap.fromTo(
        triggerRef.current, 
        {
            y: 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
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

    // Horizontal scrolling
    const horizontalScroll = gsap.to(".panel", {
        xPercent: -100 * (projectImages.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: triggerRef.current,
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

    // Fixed image animation - only scale and fade, no rotation
    const panels = gsap.utils.toArray(".panel")
    panels.forEach((panel, i) => {
        const mediaElement = panel.querySelector(".project-media")
        const imageTitle = panel.querySelector(".project-title")

        // Timeline for panel
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalScroll,
                start: "left center",
                end: "right center",
                scrub: true
            }
        })
        
        // Fixed animation: Only scale and opacity, no rotation
        tl.fromTo(mediaElement, 
            {
                scale: 0.8,
                opacity: 0.5,
                y: 50
            }, 
            {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            }
        )

        // Title animation
        if(imageTitle){
            tl.fromTo(imageTitle, 
                {
                    y: 30,
                    opacity: 0
                }, 
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.3
                }, 
                0.2
            )
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
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto w-0 opacity-0"
        >
        </div>
      </div>

      {/* Horizontal section - Shifted to right with left margin */}
      <div ref={triggerRef} className="overflow-hidden opacity-0 h-screen flex items-center ml-8 md:ml-16 lg:ml-24" >
        <div ref={horizontalRef} className="horizontal-section md:w-[400%] flex w-[420%] h-full"> 
          {projectImages.map((project) => (
            <div 
              key={project.id}
              className="panel relative flex items-center justify-center w-full h-full"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                {/* Conditional rendering for video vs image - Smaller size */}
                {project.type === "video" ? (
                  <video 
                    className="project-media w-[85vw] h-[65vh] max-w-5xl rounded-2xl object-cover shadow-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={project.imageSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={project.imageSrc} 
                    alt={project.title}
                    className="project-media w-[85vw] h-[65vh] max-w-5xl rounded-2xl object-cover shadow-2xl"
                  />
                )}
                
                <h2 className="project-title flex items-center gap-3 text-xl md:text-3xl font-bold text-black mt-6 z-50 hover:text-gray-600 transition-colors duration-300 cursor-pointer">
                  {project.title} <SlShareAlt className="text-purple-500"/>
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