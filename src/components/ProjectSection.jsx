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

  // Project data with technologies
  const projectImages = [
    {
        id: 1,
        title: "Rawana Health Care Center",
        imageSrc: "/images/Rawana.mp4", 
        type: "video",
        technologies: ["Java Swing", "Java", "MySQL"]
    },
    {
        id: 2,
        title: "Event Lanka",
        imageSrc: "/images/project-2.png", 
        type: "image",
        technologies: ["Java", "Firebase", "SqlLite"]
    },
    {
        id: 3,
        title: "Christ E-Commerce Site",
        imageSrc: "/images/project-3.png", 
        type: "image",
        technologies: ["Html", "Css", "JavaScript", "Boostrap", "Java", "MySQL"]
    },
    {
        id: 4,
        title: "Chat Room",
        imageSrc: "/images/project-4.png", 
        type: "image",
        technologies: ["React-Native","Java" ,"MySQL"]
    },
    {
        id: 5,
        title: "Employee Management System",
        imageSrc: "/images/thumbnail.png", 
        type: "image",
        technologies: ["React.js", "Boostrap", "Node.js", "Express.js", "MySQL"]
    },
     {
        id: 6,
        title: "Book Store Management System",
        imageSrc: "/images/thumbnail.png", 
        type: "image",
        technologies: ["React.js", "Css", "Node.js","Express.js", "MongoDB"]
    },
    {
        id: 7,
        title: "MyPortfolio Website",
        imageSrc: "/images/thumbnail.png", 
        type: "image",
        technologies: ["React.js", "Tailwind Css", "Spline"]
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

    // Fixed image animation - including technologies
    const panels = gsap.utils.toArray(".panel")
    panels.forEach((panel, i) => {
        const mediaElement = panel.querySelector(".project-media")
        const imageTitle = panel.querySelector(".project-title")
        const technologiesElement = panel.querySelector(".project-technologies")

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
        
        // Media animation
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

        // Technologies animation
        if(technologiesElement){
            tl.fromTo(technologiesElement, 
                {
                    y: 20,
                    opacity: 0
                }, 
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4
                }, 
                0.3
            )
        }
    })

  }, [projectImages.length]); 

  // Fixed Technology color mapping for your specific technologies
  const getTechColor = (tech) => {
    const colorMap = {
      // Java Technologies
      'Java': 'bg-red-500',
      'Java Swing': 'bg-red-600',
      
      // Database Technologies
      'MySQL': 'bg-blue-600',
      'SqlLite': 'bg-blue-500',
      'MongoDB': 'bg-green-500',
      
      // Frontend Technologies
      'Html': 'bg-orange-500',
      'Css': 'bg-blue-400',
      'JavaScript': 'bg-yellow-500',
      'Boostrap': 'bg-purple-600',
      'React.js': 'bg-cyan-500',
      'React-Native': 'bg-blue-300',
      'Tailwind Css': 'bg-teal-500',
      
      // Backend Technologies
      'Node.js': 'bg-green-600',
      'Express.js': 'bg-gray-600',
      
      // Cloud & Services
      'Firebase': 'bg-yellow-600',
      
      // 3D & Graphics
      'Spline': 'bg-purple-500',
    };
    
    return colorMap[tech] || 'bg-gray-600';
  };

  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0">
          My Projects
        </h2>
        <div 
          ref={titleLineRef}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto w-0 opacity-0"
        >
        </div>
      </div>

      {/* Horizontal section - Updated width for 7 projects */}
      <div ref={triggerRef} className="overflow-hidden opacity-0 h-screen flex items-center ml-8 md:ml-16 lg:ml-24" >
        <div ref={horizontalRef} className="horizontal-section md:w-[700%] flex w-[720%] h-full"> 
          {projectImages.map((project) => (
            <div 
              key={project.id}
              className="panel relative flex items-center justify-center w-full h-full"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                {/* Project Media */}
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
                
                {/* Project Content Container */}
                <div className="project-content mt-6 text-center">
                  {/* Project Title */}
                  <h2 className="project-title text-2xl md:text-4xl font-bold text-black mb-4 hover:text-gray-600 transition-colors duration-300 cursor-pointer">
                    {project.title}
                  </h2>

                  {/* Technologies Used - Stacked layout like reference image */}
                  <div className="project-technologies flex flex-col gap-3 items-center">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className={`px-4 py-2 rounded-lg text-sm md:text-base font-semibold text-white ${getTechColor(tech)} border border-white/20 shadow-lg`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Share Icon positioned to the right */}
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-gray-600 text-sm">View Project</span>
                      <SlShareAlt className="text-purple-500 text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default ProjectSection;