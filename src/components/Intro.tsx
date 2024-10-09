"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import {useSectionInView} from "@/lib/hooks";
import {useActiveSectionContext} from "@/context/active-section-context";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref as React.Ref<HTMLElement>}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src=""
                            alt="Praveen's portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
            >
                {/* First Line with Scrolling Effect */}
                <motion.div
                    className="font-bold"
                    animate={{
                        x: [0, 100, 0], // Scroll effect - move right then back
                    }}
                    transition={{
                        duration: 3, // Duration for the full animation
                        repeat: Infinity, // Repeat indefinitely
                        ease: "linear", // Linear scrolling
                        delay: 0.1, // Small delay to start after load
                    }}
                >
                    Hello, I&#39;m Satya Sai Praveen.
                </motion.div>

                {/* Second Line with Scrolling Effect */}
                <motion.div
                    className="font-bold"
                    animate={{
                        x: [0, 100, 0], // Scroll effect - move right then back
                    }}
                    transition={{
                        duration: 3.5, // Slightly longer duration for uneven scrolling
                        repeat: Infinity, // Repeat indefinitely
                        ease: "linear", // Linear scrolling
                        delay: 0.5, // Delayed start to make it scroll after the first line
                    }}
                >
                    I&#39;m a <span className="font-bold">full-stack developer.</span>
                </motion.div>

                {/* Third Line with Scrolling Effect */}
                <motion.div
                    className="italic"
                    animate={{
                        x: [0, 100, 0], // Scroll effect - move right then back
                    }}
                    transition={{
                        duration: 4, // Even longer duration for the third line
                        repeat: Infinity, // Repeat indefinitely
                        ease: "linear", // Linear scrolling
                        delay: 1, // Longer delay for an uneven start
                    }}
                >
                    I enjoy building web applications.
                </motion.div>
            </motion.h1>


            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/Satya_Sai_Praveen_Resume.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                </a>

                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://www.linkedin.com/in/satyasaipraveenandra/"
                    target="_blank"
                >
                    <BsLinkedin/>
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/praveenandra"
                    target="_blank"
                >
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    );
}