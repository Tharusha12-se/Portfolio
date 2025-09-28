import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skill = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const categoriesRef = useRef([]);
  const skillsRef = useRef([]);
  const starRef = useRef([]);

  // Skill data organized by category with matching colors
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", color: "bg-gradient-to-r from-red-500 to-red-700", level: 90 },
        { name: "SQL", color: "bg-gradient-to-r from-blue-600 to-blue-800", level: 85 },
        { name: "JavaScript", color: "bg-gradient-to-r from-yellow-400 to-yellow-600", level: 88 },
        { name: "PHP", color: "bg-gradient-to-r from-purple-500 to-purple-700", level: 80 },
      ],
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { name: "Node.js", color: "bg-gradient-to-r from-green-500 to-green-700", level: 85 },
        { name: "Express.js", color: "bg-gradient-to-r from-gray-500 to-gray-700", level: 82 },
        { name: "Bootstrap", color: "bg-gradient-to-r from-purple-500 to-purple-700", level: 90 },
        { name: "Tailwind", color: "bg-gradient-to-r from-cyan-400 to-cyan-600", level: 88 },
      ],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "Android", color: "bg-gradient-to-r from-green-400 to-green-600", level: 85 },
        { name: "React Native", color: "bg-gradient-to-r from-blue-300 to-blue-500", level: 80 },
      ],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", color: "bg-gradient-to-r from-green-400 to-green-600", level: 82 },
        { name: "MySQL", color: "bg-gradient-to-r from-blue-600 to-blue-800", level: 85 },
        { name: "Firebase", color: "bg-gradient-to-r from-yellow-500 to-yellow-700", level: 78 },
        { name: "PostgreSQL", color: "bg-gradient-to-r from-blue-700 to-blue-900", level: 80 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git", color: "bg-gradient-to-r from-orange-500 to-orange-700", level: 90 },
        { name: "EJB", color: "bg-gradient-to-r from-red-400 to-red-600", level: 70 },
        { name: "Hibernate", color: "bg-gradient-to-r from-pink-500 to-pink-700", level: 78 },
        { name: "Java Swing", color: "bg-gradient-to-r from-blue-500 to-blue-700", level: 72 },
      ],
    },
    {
      title: "Soft Skills",
      icon: "🌟",
      skills: [
        { name: "Team Collaboration", color: "bg-gradient-to-r from-indigo-400 to-indigo-600", level: 92 },
        { name: "Communication", color: "bg-gradient-to-r from-teal-400 to-teal-600", level: 88 },
        { name: "Critical Thinking", color: "bg-gradient-to-r from-amber-500 to-amber-700", level: 85 },
        { name: "Adaptability", color: "bg-gradient-to-r from-lime-500 to-lime-700", level: 90 },
      ],
    },
  ];

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
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Categories animation
    gsap.fromTo(
      categoriesRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Skills animation
    gsap.fromTo(
      skillsRef.current,
      { scale: 0, opacity: 0, y: 30 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Progress bars animation
    gsap.fromTo(
      ".progress-bar",
      { width: "0%" },
      {
        width: (i, target) => target.style.width,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Star animation
    starRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.3;

      gsap.to(star, {
        x: `${direction * (40 + index * 10)}`,
        y: `${direction * -20 - index * 3}`,
        rotation: direction * 180,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starRef.current.includes(el)) {
      starRef.current.push(el);
    }
  };

  const addToCategories = (el) => {
    if (el && !categoriesRef.current.includes(el)) {
      categoriesRef.current.push(el);
    }
  };

  const addToSkills = (el) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] py-8 md:py-12 lg:py-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${6 + i * 1.5}px`,
              height: `${6 + i * 1.5}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col items-center">
        <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10 text-center text-white opacity-0">
          My Skills
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-purple-200 mb-8 md:mb-12 text-center max-w-xl">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              ref={addToCategories}
              className="bg-gradient-to-br from-black/30 to-purple-900/20 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-purple-500/20 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0"
            >
              <div className="flex items-center mb-4 sm:mb-5">
                <span className="text-2xl sm:text-3xl mr-2">{category.icon}</span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-300">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} ref={addToSkills} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm sm:text-base text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs sm:text-sm text-purple-300 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${skill.color} transition-all duration-500 progress-bar`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;