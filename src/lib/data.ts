import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaAws } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rentItAll from "../../public/RentItAll.png";
import quickTicket from "../../public/QuickTicket1.png";
import cloud from "../../public/Cloud.jpeg";

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
        icon: React.createElement(FaJava),
        date: "September 2021 – July 2023",
    },
] as const;

export const projectsData = [
    {
        title: "RentItAll",
        imageUrl: rentItAll,
        description:
            "Developed a full-stack web app using the PERN stack for managing 100+ listings and monthly transactions. Integrated JWT authentication and real-time messaging to improve user experience.",
        tags: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
    },
    {
        title: "Quick Ticket",
        imageUrl: quickTicket,
        description:
            "Built the backend for a ticket booking system with Spring Boot and SQL. Reduced response times by 25% and streamlined session management with JWT authentication.",
        tags: ["Java", "Spring Boot", "SQL", "Gradle", "Git"],
    },
    {
        title: "Cloud-Native Java Application",
        imageUrl: cloud,
        description:
            "Implemented a CI/CD pipeline using AWS, Terraform, and Ansible to automate deployment and monitoring of a cloud-native Java application.",
        tags: ["AWS", "Terraform", "Ansible", "Java"],
    },
] as const;

export const skillsData = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "Spring Boot",
    "React",
    "Node.js",
    "Express",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Google Cloud Platform",
    "Docker",
    "Terraform",
    "Ansible",
    "Git",
    "Kafka",
    "Angular",
    "JUnit",
    "Gradle",
] as const;
