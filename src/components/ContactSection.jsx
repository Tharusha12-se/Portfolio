import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { FiX } from "react-icons/fi";

const ContactSection = () => {
    const circleRef = useRef(null)
    const sectionRef = useRef(null)
    const initialTextRef = useRef(null)
    const finalTextRef = useRef(null)

    // EmailJS state
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
                    message: formData.message,
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

    useEffect(() => {
        //register plugin
        gsap.registerPlugin(ScrollTrigger)

        const cleanup = () => {
            ScrollTrigger.getAll().forEach((st) => {
                if (st.vars.trigger === sectionRef.current) {
                    st.kill(true)
                }
            })
        }

        cleanup()

        //set initial state
        gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" })
        gsap.set(initialTextRef.current, { opacity: 1 })
        gsap.set(finalTextRef.current, { opacity: 0 })

        //create main timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: 0.5,
                anticipatePin: 1,
                fastScrollEnd: true,
                preventOverlaps: true,
                invalidateOnRefresh: true,
            }
        })

        //initial state to mid zoom (0-50%)
        tl.to(
            circleRef.current,
            {
                scale: 5,
                backgroundColor: "#9333EA",
                ease: "power1.inOut",
                duration: 0.5,
            },
            0,
        )

        //fade out initial text during first half
        tl.to(
            initialTextRef.current,
            {
                opacity: 0,
                ease: "power1.out",
                duration: 0.2,
            },
            0.1,
        )

        //Mid -zoom to final state (50% - 100%)
        tl.to(
            circleRef.current,
            {
                scale: 17,
                backgroundColor: "#E9D5FF",
                boxShadow: "0 0 50px 20px  rgba(233, 213, 255, 0.3)",
                ease: "power2.inOut",
                duration: 0.5,
            },
            0.5,
        )

        //fade in final text
        tl.to(
            finalTextRef.current,
            {
                opacity: 1,
                ease: "power2.in",
                duration: 0.2,
            },
            0.7,
        )

        //return cleanup
        return cleanup

    }, [])

    return (
        <>
            {/* Alert Notification */}
            {showAlert && (
                <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-60 px-6 py-3 rounded-lg shadow-lg ${
                    alertType === "success" 
                        ? "bg-green-500 text-white" 
                        : "bg-red-500 text-white"
                }`}>
                    {alertMessage}
                </div>
            )}

            <section ref={sectionRef} className="flex items-center justify-center bg-black relative"
                style={{ overscrollBehavior: "none" }}>

                <div ref={circleRef}
                    className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex justify-center items-center relative
                    transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100">

                    <p ref={initialTextRef}
                        className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center text-center">
                        SCROLL DOWN
                    </p>

                    <div ref={finalTextRef}
                        className="text-center relative flex flex-col items-center justify-center opacity" >

                        <h1 className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07]
                        md:font-bold text-sm sm:text-base leading-none mb-5">
                            Let's Build Something Amazing Together
                        </h1>

                        <p className="text-black lg:w-[40rem] w-[20rem] absolute lg:mt-5 sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068]">
                            Full-stack developer specializing in end-to-end web solutions. Expert in creating scalable applications with clean architecture, 
                            responsive design, and seamless user experiences across all platforms.
                        </p>

                        <button 
                            onClick={openContactForm}
                            className="px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all 
                            duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap">
                            Contact Me
                        </button>

                    </div>

                </div>

            </section>

            {/* Contact Form Modal */}
            {contactFormOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={closeContactForm}>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
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
                                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    id="contact-name" 
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"/>
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    id="contact-email" 
                                    name="email"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"/>
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea 
                                    rows="4" 
                                    id="contact-message" 
                                    name="message"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"/>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed">
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default ContactSection;