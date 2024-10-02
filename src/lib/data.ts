import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
import {FaJava, FaAws, FaPython} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rentItAll from "../../public/RentItAll.png";
import quickTicket from "../../public/QuickTicket1.png";
import cloud from "../../public/Cloud.jpeg";
import portfolioImage from "../../public/Portfolio1.jpg";
import {CgWorkAlt} from "react-icons/cg";
import {
    SiAngular,
    SiAnsible, SiApachekafka,
    SiDocker, SiGit,
    SiGooglecloud, SiGradle, SiJunit5,
    SiMongodb,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiSpringboot, SiTerraform,
    SiTypescript
} from "react-icons/si";
import {FaJs} from "react-icons/fa6";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Master's in Computer Science",
        location: "Indiana University, Bloomington, IN",
        description: "Currently pursuing a Master's degree in Computer Science with a focus on software engineering and cloud technologies.",
        icon: React.createElement(LuGraduationCap),
        date: "August 2023 – May 2025",
    },
    {
        title: "Software Engineer",
        location: "Ford Motor Private Limited, Chennai, India",
        description:
            "Engineered high-performance microservices for an e-commerce platform, improved deployment efficiency by 25%, and led migration to Google Cloud Platform. Integrated Tekton into CI/CD pipelines, enhancing deployment reliability by 40%.",
        icon: React.createElement(CgWorkAlt),
        date: "September 2021 – July 2023",
    },
] as const;

export const projectsData = [
    {
        title: "RentItAll",
        imageUrl: rentItAll,
        description:
            "Developed a full-stack web app using the PERN stack. Integrated JWT authentication and real-time messaging to improve user experience.",
        tags: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
        githubUrl: "https://github.com/Software-Engineering-Spring-2024"
    },
    {
        title: "Quick Ticket",
        imageUrl: quickTicket,
        description:
            "Built the backend for a ticket booking system with Spring Boot and SQL. Streamlined session management with JWT authentication.",
        tags: ["Java", "Spring Boot", "SQL", "Gradle", "Git"],
        githubUrl: ""
    },
    {
        "title": "Portfolio Website",
        "imageUrl": portfolioImage, // Replace with the actual image reference for your portfolio
        "description":
            "Developed a responsive portfolio website using Next.js and Tailwind CSS to showcase my projects and skills.",
        "tags": ["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
        "githubUrl": "https://github.com/praveenandra/portfolio"
    },
    {
        title: "Cloud-Native Java Application",
        imageUrl: cloud,
        description:
            "Implemented a CI/CD pipeline using AWS, Terraform & Ansible to automate deployment and monitoring of a cloud-native Java application.",
        tags: ["AWS", "Terraform", "Ansible", "Java"],
        githubUrl: "https://github.com/PraveenAndra/cloud-java-deployment-automation"
    },
] as const;

// export const skillsData = [
//     { name: "Java", logo: FaJava },
//     { name: "Python", logo: FaPython },
//     { name: "JavaScript", logo: FaJs },
//     { name: "TypeScript", logo: SiTypescript },
//     { name: "Spring Boot", logo: SiSpringboot },
//     { name: "React", logo: SiReact },
//     { name: "Node.js", logo: SiNodedotjs },
//     { name: "PostgreSQL", logo: SiPostgresql },
//     { name: "MongoDB", logo: SiMongodb },
//     { name: "AWS", logo: FaAws },
//     { name: "Google Cloud Platform", logo: SiGooglecloud },
//     { name: "Docker", logo: SiDocker },
//     { name: "Terraform", logo: SiTerraform },
//     { name: "Ansible", logo: SiAnsible },
//     { name: "Git", logo: SiGit },
//     { name: "Kafka", logo: SiApachekafka },
//     { name: "Angular", logo: SiAngular },
//     { name: "JUnit", logo: SiJunit5 },
//     { name: "Gradle", logo: SiGradle },
// ] as const;

export const skillsData = [
    { name: "Java", logo: FaJava, bgGradient: "linear-gradient(135deg, #f89820, #e87f07)" },
    { name: "Python", logo: FaPython, bgGradient: "linear-gradient(135deg, #306998, #2b5b88)" },
    { name: "JavaScript", logo: FaJs, bgGradient: "linear-gradient(135deg, #f7df1e, #e5c40d)" },
    { name: "TypeScript", logo: SiTypescript, bgGradient: "linear-gradient(135deg, #007acc, #005f9e)" },
    { name: "Spring Boot", logo: SiSpringboot, bgGradient: "linear-gradient(135deg, #6db33f, #588b34)" },
    { name: "React", logo: SiReact, bgGradient: "linear-gradient(135deg, #61dafb, #4aaed5)" },
    { name: "Node.js", logo: SiNodedotjs, bgGradient: "linear-gradient(135deg, #68a063, #53804e)" },
    { name: "PostgreSQL", logo: SiPostgresql, bgGradient: "linear-gradient(135deg, #336791, #2a5071)" },
    { name: "MongoDB", logo: SiMongodb, bgGradient: "linear-gradient(135deg, #47A248, #3a823c)" },
    { name: "AWS", logo: FaAws, bgGradient: "linear-gradient(135deg, #FF9900, #e88200)" },
    { name: "Google Cloud Platform", logo: SiGooglecloud, bgGradient: "linear-gradient(135deg, #4285f4, #326fcc)" },
    { name: "Docker", logo: SiDocker, bgGradient: "linear-gradient(135deg, #0db7ed, #0b94c6)" },
    { name: "Terraform", logo: SiTerraform, bgGradient: "linear-gradient(135deg, #623ce4, #4e2fba)" },
    { name: "Ansible", logo: SiAnsible, bgGradient: "linear-gradient(135deg, #EE0000, #c40000)" },
    { name: "Git", logo: SiGit, bgGradient: "linear-gradient(135deg, #f34f29, #d93c1c)" },
    { name: "Kafka", logo: SiApachekafka, bgGradient: "linear-gradient(135deg, #000000, #333333)" },
    { name: "Angular", logo: SiAngular, bgGradient: "linear-gradient(135deg, #DD0031, #b70029)" },
    { name: "JUnit", logo: SiJunit5, bgGradient: "linear-gradient(135deg, #25A162, #1e8550)" },
    { name: "Gradle", logo: SiGradle, bgGradient: "linear-gradient(135deg, #02303A, #021e27)" },
] as const;