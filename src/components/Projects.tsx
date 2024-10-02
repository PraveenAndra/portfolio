"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import SectionHeading from "@/components/SectionHeading";
import {useSectionInView} from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
    return (
        <section ref={ref as React.Ref<HTMLElement>} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}