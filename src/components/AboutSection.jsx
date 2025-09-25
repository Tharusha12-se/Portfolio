import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null); 
  const introRef = useRef(null);
  const starRef = useRef([]);
  const iconsRef = useRef([]);

  // Technology data
  const technologies = [
    { name: "HTML5", color: "bg-orange-500", abbrev: "HT" },
    { name: "CSS3", color: "bg-blue-500", abbrev: "CS" },
    { name: "Bootstrap", color: "bg-purple-500", abbrev: "BS" },
    { name: "Java", color: "bg-red-500", abbrev: "JV" },
    { name: "PHP", color: "bg-purple-400", abbrev: "PH" },
    { name: "Tailwind CSS", color: "bg-cyan-400", abbrev: "TW" },
    { name: "React", color: "bg-blue-400", abbrev: "RC" },
    { name: "React Native", color: "bg-blue-300", abbrev: "RN" },
    { name: "Node.js", color: "bg-green-500", abbrev: "NJ" },
    { name: "JavaScript", color: "bg-yellow-400", abbrev: "JS" },
    { name: "MySQL", color: "bg-blue-600", abbrev: "MY" },
    { name: "MongoDB", color: "bg-green-400", abbrev: "MG" },
    { name: "PostgreSQL", color: "bg-blue-700", abbrev: "PG" },
    { name: "Firebase", color: "bg-yellow-500", abbrev: "FB" },
    { name: "SQLite", color: "bg-gray-400", abbrev: "SQ" }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current, 
      { y: 100, opacity: 0 },
      {
        y: -300,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Intro animation
    gsap.fromTo(
      introRef.current,
      {y:100, opacity: 0, filter: "blur(10px)" },
      {
        y: -400,
        opacity:1,
        filter : "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        }
      }
    )

    // Icons animation
    gsap.fromTo(
      iconsRef.current,
      {
        scale: 0,
        opacity: 0,
        y: 50
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Star animation
    starRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1; 
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); 

  const addToStars = (el) => {
    if (el && !starRef.current.includes(el)) {
      starRef.current.push(el);
    }
  }

  const addToIcons = (el) => {
    if (el && !iconsRef.current.includes(el)) {
      iconsRef.current.push(el);
    }
  }

  return (
    <section ref={sectionRef} className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]">
      
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(10)].map((_, i) => (
          <div 
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-8 text-center text-white opacity-0">
          About Me
        </h1>

       
      </div>

      <div ref={introRef}
        className="absolute lg:bottom-[-12rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row 
        flex-col justify-between lg:px-24 px-5 items-center opacity-0 gap-4 md:gap-6"> {/* Reduced gap */}
        
        {/* Image on left */}
        <img className="lh:h-[40rem] md:h-[35rem] h-[30rem] mix-blend-lighten"
          src="images/profile_img.png" alt="profile-img" />

        {/* Content on right with minimal gap */}
        <div className="lg:max-w-[55rem] max-w-[27rem] md:mt-20 sm:mt-[-42rem] mt-[-32rem] ml-4 md:ml-6"> {/* Added left margin */}
          <h3 className="text-sm md:text-2xl font-bold text-purple-200 z-50 tracking-wider mb-6"> 
            I deliver robust, production-ready websites and web apps with speed and precision.
            Every project is backed by clean code, clear communication, and a commitment to
            getting it done, on time, every time.
          </h3>
          
          {/* Technology icons displayed below the text */}
          <div className="flex flex-wrap gap-3 mt-6">
            {technologies.map((tech) => (
              <span 
                key={tech.name}
                className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium text-white ${tech.color} border border-white/20`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        
      </div>

    </section>
  );
}

export default AboutSection;