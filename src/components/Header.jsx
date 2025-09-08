import {motion} from "framer-motion";
import { a } from "framer-motion/client";
const Header = () => {
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.3,
                duration: 1.2
            }}
             className="flex items-center">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100
                flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
                    M
                </div>

                <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100
                bg-clip-text text-transparent">
                    MiladiCode
                </span>

            </motion.div>

            {/* Dekstop navigation */}

            <nav className="lg:flex hidden space-x-8">
                {["Home", "About", "Project", "Experince", "Contact"].map((item, index) => (
                    <motion.a key={item}
                    initial={{opacity:0 ,y: -20}}
                    animate={{opacity:1 , y:0}}
                    transition={{
                        type:"spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.7 + index * 0.2,
                    }}
                    className="relative text-gray-800 dark:text-gray-200 hover:violet-600
                    dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                    href="">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 
                        group-hover:w-full transition-all duration-300"></span>
                    </motion.a>
                ))}
            </nav>

            {/* Social icon Dekstop */}

        </div>
    </header>
  )
}

export default Header