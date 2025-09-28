import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null); 
  const introRef = useRef(null);
  const starRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Intro animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] py-8 md:py-16">
      
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

      <div className="container mx-auto mt-5 px-4 md:px-8 lg:px-24 h-full flex flex-col items-center justify-center">
        <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 text-center text-white">
          About Me
        </h1>
      </div>

      <div ref={introRef}
        className="relative container mx-auto px-4 md:px-8 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
      >
        
        {/* Image on left with controlled spacing */}
        <div className="w-full md:w-2/5 flex justify-center mb-6 md:mb-0">
          <img 
            className="h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] object-contain mix-blend-lighten" 
            src="images/profile_img.png" 
            alt="profile-img" 
          />
        </div>

        {/* Content on right with controlled spacing */}
        <div className="w-full md:w-3/5 text-center md:text-left max-w-xl lg:max-w-2xl">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-purple-200 tracking-wider mb-4 leading-relaxed">
            Hey there! I'm <span className="text-purple-400">Tharusha Siriwardhana</span>, a passionate and driven 
            undergraduate pursuing a BSc (Hons) in Software Engineering at IIC University.
          </h3>
          
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-purple-200 tracking-wider mb-4 leading-relaxed">
            My passion lies in transforming innovative ideas into scalable, user-centric applications that make 
            a real impact. Whether it's building robust web platforms, creating seamless mobile experiences, or 
            developing efficient database solutions.
          </h3>

          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-purple-200 tracking-wider leading-relaxed">
            With hands-on experience across multiple projects and a strong foundation in software engineering 
            principles, I'm always excited to collaborate on challenging projects.
          </h3>
        </div>
        
      </div>

    </section>
  );
}

export default AboutSection;