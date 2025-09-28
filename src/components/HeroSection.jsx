import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="h-screen bg-gradient-to-b from-violet-900 to-black flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-24 relative overflow-hidden"
        >
            {/* Left Side - Updated Content */}
            <div className="z-40 w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                {/* Career Title */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 0.5,
                        duration: 1.5,
                    }}
                    className="mb-2"
                >
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-300 font-semibold">
                        Full Stack Developer
                    </span>
                </motion.div>

                {/* Hi, I am */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 0.8,
                        duration: 1.5,
                    }}
                    className="mb-1 sm:mb-2"
                >
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300">
                        Hi, I am
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.0,
                        duration: 1.5,
                    }}
                    className="text-3xl sm:text-4xl mt-5 md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent leading-tight"
                >
                    Tharusha<br />Siriwardhana
                </motion.h1>

                {/* Career Description */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.3,
                        duration: 1.5,
                    }}
                    className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
                >
                    {/* Small Profile Image */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white shadow-lg overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                            TS
                        </div>
                    </div>

                    {/* Career Info */}
                    <div>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-200 font-medium">
                            Full Stack Software Engineer
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-1">
                            Crafting digital experiences with modern technologies
                        </p>
                    </div>
                </motion.div>

                {/* Download CV */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.3,
                        duration: 1.5,
                    }}
                    className="mt-6 sm:mt-8 flex justify-center md:justify-start"
                >
                    <button
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://github.com/Tharusha12-se/Portfolio/tree/main/public/Tharusha.pdf";
                            link.download = "Tharusha.pdf";
                            link.click();
                        }}
                        className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 lg:px-8 lg:py-4 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-600 hover:to-purple-700 hover:text-white transition-all duration-500 text-sm sm:text-base"
                    >
                        Download CV
                    </button>
                </motion.div>
            </div>

            {/* Right Section - Spline Animation */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative h-full">
                <motion.div
                    className="w-full h-full flex items-center justify-center md:justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 1.5 }}
                >
                    <Spline
                        className="w-auto h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl absolute md:static transform scale-100 sm:scale-110 md:scale-120 lg:scale-130 xl:scale-140"
                        scene="https://prod.spline.design/sV-nYY8ftE-zQeNB/scene.splinecode"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;