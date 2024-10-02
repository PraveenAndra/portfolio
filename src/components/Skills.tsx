"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    return (
        <section
            id="skills"
            ref={ref as React.Ref<HTMLElement>}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        className="relative border rounded-full p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        style={{ background: skill.bgGradient }} // Apply gradient as background
                    >
                        <skill.logo
                            className="h-12 w-12 text-white transition-transform duration-300 transform hover:scale-110"
                            title={skill.name}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
