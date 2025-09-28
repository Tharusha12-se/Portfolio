import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Header = () => {
    // Menu open close
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const [contactFormOpen, setContactFormOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");

    // Form data state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const openContactForm = () => setContactFormOpen(true);
    const closeContactForm = () => setContactFormOpen(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("Form submitted:", formData);
            await emailjs.send(
                "service_5bu0vpb",
                "template_475322h",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    to_name: "Tharusha",
                    to_email: "sltharusha4@gmail.com",
                    message: formData.message + " | " + formData.name + " | " + formData.email,
                    // Additional fields for better email formatting
                    subject: `New Contact Message from ${formData.name}`,
                    date: new Date().toLocaleString(),
                    client_email: formData.email,
                    client_name: formData.name
                },
                "fmrUEoC7oUTOpSp2D"
            );
            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });
            showAlertMessage("success", "Your message has been sent successfully!");
            closeContactForm();
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            showAlertMessage("danger", "Something went wrong! Please try again.");
        }
    };

    return (
        <header className="absolute w-full z-50 transition-all duration-300 lg:px-24 px-10">
            {/* Alert Notification */}
            <AnimatePresence>
                {showAlert && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-60 px-6 py-3 rounded-lg shadow-lg ${
                            alertType === "success" 
                                ? "bg-green-500 text-white" 
                                : "bg-red-500 text-white"
                        }`}
                    >
                        {alertMessage}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main header container with same padding as hero section */}
            <div className="flex items-center justify-between h-16 md:h-20 w-full">
                
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                        duration: 1.2
                    }}
                    className="flex items-center">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
                        TS
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                        Portfolio
                    </span>
                </motion.div>

                

                {/* Social icon Desktop */}
                <div className="md:flex hidden items-center space-x-5">
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        href="https://linkedin.com/in/your-profile" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                        <FiLinkedin className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        href="https://twitter.com/your-profile" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                        <FiTwitter className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        href="https://github.com/your-profile" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                        <FiGithub className="w-5 h-5" />
                    </motion.a>

                    {/* Hire me */}
                    <motion.button
                        onClick={openContactForm}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.6,
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                        }}
                        className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-600 hover:to-purple-700 hover:text-white transition-all duration-500">
                        Hire Me
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <motion.button 
                        whileTap={{scale: 0.7}}
                        onClick={toggleMenu}
                        className="text-gray-300">
                        {isOpen ? <FiX className="w-6 h-6"/> : <FiMenu className="w-6 h-6"/>}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div 
                initial={{opacity:0, height:0}}
                animate={{
                    opacity:isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0, 
                }}
                transition={{duration:0.5}}
                className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5 mx-10 lg:mx-24">

                <nav className="flex flex-col space-y-3">
                    {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                        <a key={item} 
                            className="text-gray-800 dark:text-gray-300 font-medium py-2 hover:text-violet-600 transition-colors"
                            onClick={toggleMenu}
                            href={`#${item.toLowerCase()}`}>
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-5 mb-4">
                        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FiTwitter className="w-5 h-5 text-gray-800 dark:text-gray-300"/>
                        </a>
                        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <FiLinkedin className="w-5 h-5 text-gray-800 dark:text-gray-300"/>
                        </a>
                        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FiGithub className="w-5 h-5 text-gray-800 dark:text-gray-300"/>
                        </a>
                    </div>
                    <button 
                        onClick={() => {
                            toggleMenu();
                            openContactForm();
                        }}
                        className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 text-white font-bold hover:from-violet-700 hover:to-purple-700 transition-all duration-300">
                        Contact Me
                    </button>
                </div>
            </motion.div>

            {/* Contact form */}
            <AnimatePresence>
                {contactFormOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeContactForm}>

                        <motion.div 
                            initial={{scale: 0.8, opacity:0, y:30}}
                            animate={{scale:1, opacity:1, y:0}}
                            exit={{scale:0.8, opacity:0, y:30}}
                            transition={{
                                type:"spring",
                                damping: 30,
                                stiffness: 200,
                                duration: 0.8,
                            }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
                            onClick={(e) => e.stopPropagation()}>

                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
                                    Get In Touch
                                </h1>
                                <button onClick={closeContactForm}>
                                    <FiX className="w-5 h-5 text-gray-800 dark:text-gray-300 font-extrabold" />
                                </button>
                            </div>

                            {/* Input Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                                        Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"/>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        placeholder="Your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"/>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <textarea 
                                        rows="4" 
                                        id="message" 
                                        name="message"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"/>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{scale:1.03}}
                                    whileTap={{scale:0.97}}
                                    className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed">
                                    {isLoading ? "Sending..." : "Send Message"}
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header;