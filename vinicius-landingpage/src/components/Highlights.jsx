import React from "react";
/*eslint-disable no-unused-vars*/
import { motion } from "framer-motion";
/*eslint-enable no-unused-vars*/
import '../styles/Highlights.css';

const highlights = [
    "💡 I build clean, scalable front-end and back-end solutions.",
    "🧠 Focused on performance, maintainability, and user experience.",
    "🚀 Currently improving in Spring Boot, React, and modern APIs.",
];

const Highlights = () => {
    return(
        <section className="highlights">
            <div className="highlights-container">
                {highlights.map((text, index) => (
                    <motion.p
                        key={index}
                        className="highlight-item"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: index * 0.2}}
                        viewport={{once: true}}
                    >
                        {text}
                    </motion.p>
                ))}
            </div>
        </section>
    )
}

export default Highlights;