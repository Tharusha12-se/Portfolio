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
        technologies: ["Java Swing", "Java", "MySQL"],
        description: "Healthcare management system with patient records and appointment scheduling",
        link: "https://github.com/NiumalAtTCG/Ravana-Health-Care-Center.git"
    },
    {
        id: 2,
        title: "Event Lanka",
        imageSrc: "/images/eventlanka.png", 
        type: "image",
        technologies: ["Java", "Firebase", "SqlLite"],
        description: "Event management platform for organizing and discovering local events",
        link: "https://github.com/Tharusha12-se/EventLanka.git"
    },
    {
        id: 3,
        title: "Christ E-Commerce Site",
        imageSrc: "/images/christ.png", 
        type: "image",
        technologies: ["Html", "Css", "JavaScript", "Boostrap", "Java", "MySQL"],
        description: "Full-stack e-commerce platform with secure payment integration",
        link: "https://github.com/Tharusha12-se/christ.git"
    },
    {
        id: 4,
        title: "Chat Room",
        imageSrc: "/images/chatroom.png", 
        type: "image",
        technologies: ["React-Native","Java" ,"MySQL"],
        description: "Real-time chat application with mobile-first design",
        link: "https://github.com/Tharusha12-se/chat_room.git"
    },
    {
        id: 5,
        title: "Employee Management System",
        imageSrc: "/images/employee.png", 
        type: "image",
        technologies: ["React.js", "Boostrap", "Node.js", "Express.js", "MySQL"],
        description: "HR management system with employee tracking and performance analytics",
        link: "https://github.com/Tharusha12-se/Employ-MS.git"
    },
     {
        id: 6,
        title: "Book Store Management System",
        imageSrc: "/images/bookstore.png", 
        type: "image",
        technologies: ["React.js", "Css", "Node.js","Express.js", "MongoDB"],
        description: "Inventory management system for bookstores with sales analytics",
        link: "https://github.com/Tharusha12-se/Book-Store-MS.git"
    },
    {
        id: 7,
        title: "MyPortfolio Website",
        imageSrc: "/images/portfolioo.png", 
        type: "image",
        technologies: ["React.js", "Tailwind Css", "Spline"],
        description: "Modern portfolio website with 3D animations and responsive design",
        link: "https://github.com/Tharusha12-se/Portfolio.git"
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
        const descriptionElement = panel.querySelector(".project-description")

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

        // Description animation
        if(descriptionElement){
            tl.fromTo(descriptionElement, 
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
                0.4
            )
        }
    })

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, [projectImages.length]); 

  // Enhanced Technology color mapping for dark theme
  const getTechColor = (tech) => {
    const colorMap = {
      // Java Technologies
      'Java': 'bg-red-600 hover:bg-red-700',
      'Java Swing': 'bg-red-700 hover:bg-red-800',
      
      // Database Technologies
      'MySQL': 'bg-blue-600 hover:bg-blue-700',
      'SqlLite': 'bg-blue-500 hover:bg-blue-600',
      'MongoDB': 'bg-green-600 hover:bg-green-700',
      
      // Frontend Technologies
      'Html': 'bg-orange-600 hover:bg-orange-700',
      'Css': 'bg-blue-400 hover:bg-blue-500',
      'JavaScript': 'bg-yellow-600 hover:bg-yellow-700',
      'Boostrap': 'bg-purple-600 hover:bg-purple-700',
      'React.js': 'bg-cyan-600 hover:bg-cyan-700',
      'React-Native': 'bg-blue-400 hover:bg-blue-500',
      'Tailwind Css': 'bg-teal-600 hover:bg-teal-700',
      
      // Backend Technologies
      'Node.js': 'bg-green-700 hover:bg-green-800',
      'Express.js': 'bg-gray-700 hover:bg-gray-800',
      
      // Cloud & Services
      'Firebase': 'bg-yellow-700 hover:bg-yellow-800',
      
      // 3D & Graphics
      'Spline': 'bg-purple-500 hover:bg-purple-600',
    };
    
    return colorMap[tech] || 'bg-gray-700 hover:bg-gray-800';
  };

  // Function to handle project navigation
  const scrollToProject = (index) => {
    const panelWidth = 100 / projectImages.length;
    const targetX = -(panelWidth * index);
    
    gsap.to(horizontalRef.current, {
      xPercent: targetX,
      duration: 1,
      ease: "power2.inOut"
    });
  };

  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-black overflow-hidden min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/10 via-transparent to-transparent"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 opacity-0">
          My Projects
        </h2>
        <div 
          ref={titleLineRef}
          className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mx-auto w-0 opacity-0 rounded-full shadow-lg shadow-purple-500/30"
        >
        </div>
        <p className="text-gray-400 text-center mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          A collection of my recent work showcasing full-stack development expertise and innovative solutions
        </p>
      </div>

      {/* Horizontal section */}
      <div ref={triggerRef} className="overflow-hidden opacity-0 h-screen flex items-center ml-4 md:ml-16 lg:ml-24 relative" >
        <div ref={horizontalRef} className="horizontal-section md:w-[700%] flex w-[720%] h-full relative"> 
          {projectImages.map((project) => (
            <div 
              key={project.id}
              className="panel relative flex items-center justify-center w-full h-full px-4"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* Project Media with Dark Theme Enhancements */}
                <div className="relative group cursor-pointer">
                  {project.type === "video" ? (
                    <video 
                      className="project-media w-[90vw] h-[60vh] md:h-[65vh] max-w-6xl rounded-2xl object-cover shadow-2xl border-2 border-gray-700 group-hover:border-purple-500 transition-all duration-500 group-hover:shadow-purple-500/20"
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
                      className="project-media w-[90vw] h-[60vh] md:h-[65vh] max-w-6xl rounded-2xl object-cover shadow-2xl border-2 border-gray-700 group-hover:border-purple-500 transition-all duration-500 group-hover:shadow-purple-500/20"
                    />
                  )}
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end justify-center pb-8">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      View Project
                    </button>
                  </div>
                </div>
                
                {/* Project Content Container */}
                <div className="project-content mt-8 text-center max-w-6xl px-4">
                  {/* Project Title */}
                  <h2 className="project-title text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 hover:text-purple-300 transition-colors duration-300 cursor-pointer">
                    {project.title}
                  </h2>

                  {/* Project Description */}
                  <p className="project-description text-gray-300 text-base md:text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="project-technologies flex flex-col gap-6 items-center">
                    <div className="flex flex-wrap gap-3 justify-center">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className={`px-4 py-3 rounded-xl text-sm md:text-base font-semibold text-white ${getTechColor(tech)} border border-gray-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 backdrop-blur-sm`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* View Project Button */}
                    <a 
                      href={project.link}
                      className="flex items-center gap-3 mt-4 group cursor-pointer inline-block"
                    >
                      <span className="text-gray-400 text-lg group-hover:text-purple-400 transition-colors duration-300 font-semibold">
                        Explore Project
                      </span>
                      <SlShareAlt className="text-purple-500 text-xl group-hover:text-purple-300 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3 bg-black/30 backdrop-blur-lg rounded-full px-4 py-3 border border-gray-700/50">
        {projectImages.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-gray-600 hover:bg-purple-500 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onClick={() => scrollToProject(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-gray-400 text-sm animate-bounce">
        ← Scroll horizontally →
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>

    </section>
  );
}

export default ProjectSection;