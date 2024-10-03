"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./Project"
import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";

type ProjectProps = (typeof projectsData)[number];
export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    const handleClick = (project:ProjectProps) => {
        console.log("Hello");
        window.open(project.githubUrl, "_blank"); // Open the GitHub URL in a new tab
    };

    return (
        <section ref={ref as React.Ref<HTMLElement>} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <div key={index} onClick={() => handleClick(project)} className="cursor-pointer mb-8">
                        <React.Fragment key={index}>
                            <Project {...project} />
                    </React.Fragment>
                    </div>
                    ))}
            </div>
        </section>
    );
}
