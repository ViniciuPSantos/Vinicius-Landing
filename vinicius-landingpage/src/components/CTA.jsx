import React from "react";
/*eslint-disable no-unused-vars*/
import { motion } from "framer-motion";
/*eslint-enable no-unused-vars*/
import '../styles/CTA.css'

const CTA = () => {
    return(
        <section className="cta">
            <motion.div
                className="cta-content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="cta-title">Let's go build something <span>amazing</span> together.</h2>
                <p className="cta-subtitle">I'm always open to new collaborations, challenges, or just a good tech talk.</p>

                <motion.a
                    href="mailto:contato.viniciuspsantos28@gmail.com"
                    className="cta-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get in touch
                </motion.a>
            </motion.div>
        </section>
    )
}

export default CTA; 