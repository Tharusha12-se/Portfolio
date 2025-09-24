import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoPlayBackCircleOutline } from "react-icons/io5";
const ProgessBar = () => {

    const progessBarRef = useRef(null)
    const progessFillRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(progessFillRef.current, {
            width: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3,
                onUpdate: (self) => {
                    const progress = self.progress.toFixed(2)

                    if(progress > 0.75){
                        gsap.to(progessFillRef.current, {backgroundColor: "#7E22CE", duration: 0.5,})
                    }else if(progress > 0.5){
                        gsap.to(progessFillRef.current, {backgroundColor: "#A855F7", duration: 0.5,})
                    }else if(progress > 0.1){
                        gsap.to(progessFillRef.current, {backgroundColor: "#B53389", duration: 0.5,})
                    }else{
                        gsap.to(progessFillRef.current, {backgroundColor: "#C54BBC", duration: 0.5,})
                    }
                }
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if(trigger.vars.trigger === document.body){
                    trigger.kill()
                }
            })
        }

    })

  return (
    <div ref={progessBarRef} className="fixed top-0 left-0 w-full h-[5px] bg-gray-800 z-50">
        <div
        ref={progessFillRef}
        className="h-full w-0 bg-[#A1045a] transition-colors duration-300"
        style={{width: "0%"}}
         />
    </div>
  )
}

export default ProgessBar