"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function About() {

    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After earning my Bachelor&#39;s degree in Electronics & Communication Engineering, I transitioned into software development to pursue my passion for technology. I gained hands-on experience working on full-stack applications using 
                <span className="font-medium">React, Node.js, Spring Boot, and PostgreSQL</span>
                , along with cloud technologies like 
                <span className="font-medium"> AWS</span> and
                <span className="font-medium"> Google Cloud</span>
                . I enjoy architecting scalable systems and optimizing deployment pipelines to improve efficiency.
                Currently, I am pursuing a Master&#39;s in Computer Science at Indiana University, where I am deepening my knowledge of cloud-native development, CI/CD pipelines, and DevOps.
                I am seeking new challenges in software engineering roles to leverage my skills and passion for problem-solving.
            </p>

            <p>
                <span className="italic">When I&#39;m not coding</span>, I love unwinding by playing video games, watching movies, and exploring the latest in technology. I&#39;m also passionate about learning new skills, whether it&#39;s related to software development or picking up something fun and creative.
            </p>
        </motion.section>
    );
}