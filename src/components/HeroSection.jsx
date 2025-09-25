import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"

const HeroSection = () => {
  return (
    <section id="home" className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

        {/* Left Side - Updated Content */}
        <div className="z-40 xl:mb-0 mb-[20%]">
            {/* Career Title */}
            <motion.div
                initial={{opacity:0 , y:80}}
                animate={{opacity:1, y:0}}
                transition={{
                    type:"spring",
                    stiffness: 40,
                    damping:25,
                    delay:0.5,
                    duration:1.5
                }}
                className="mb-4"
            >
                <span className="text-xl md:text-2xl lg:text-3xl text-purple-300 font-semibold">
                    Full Stack Developer
                </span>
            </motion.div>

            {/* Hi, I am */}
            <motion.div
                initial={{opacity:0 , y:80}}
                animate={{opacity:1, y:0}}
                transition={{
                    type:"spring",
                    stiffness: 40,
                    damping:25,
                    delay:0.8,
                    duration:1.5
                }}
                className="mb-2"
            >
                <span className="text-2xl md:text-3xl lg:text-4xl text-gray-300">
                    Hi, I am
                </span>
            </motion.div>

            {/* Name */}
            <motion.h1 
                initial={{opacity:0 , y:80}}
                animate={{opacity:1, y:0}}
                transition={{
                    type:"spring",
                    stiffness: 40,
                    damping:25,
                    delay:1.0,
                    duration:1.5
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            >
                Tharusha<br/>Siriwardhana
            </motion.h1>

            {/* Career Description */}
            <motion.div
                initial={{opacity:0 , y:80}}
                animate={{opacity:1, y:0}}
                transition={{
                    type:"spring",
                    stiffness: 40,
                    damping:25,
                    delay:1.3,
                    duration:1.5
                }}
                className="flex items-center space-x-4"
            >
                {/* Small Profile Image */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white shadow-lg overflow-hidden">
                    {/* You can replace this with an actual image */}
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                        TS
                    </div>
                </div>
                
                {/* Career Info */}
                <div>
                    <p className="text-lg md:text-xl lg:text-2xl text-purple-200 font-medium">
                        Full Stack Software Engineer
                    </p>
                    <p className="text-sm md:text-base text-gray-400 mt-1">
                        Crafting digital experiences with modern technologies
                    </p>
                </div>
            </motion.div>
        </div>

        {/* Right Section - Spline Animation */}
        <Spline
            className="absolute xl:right-[-28%] right-0 top-[-23%] lg:top-0"
            scene="https://prod.spline.design/sV-nYY8ftE-zQeNB/scene.splinecode" 
        />

    </section>
  )
}

export default HeroSection