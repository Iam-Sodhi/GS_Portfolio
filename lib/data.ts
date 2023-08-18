import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import teamApp from "@/public/teamApp.png"
import chatMate from "@/public/chatMate.png"
import GS_amazon from "@/public/GS_amazon.png"
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TeamApp",
    description:
      "TeamApp is a file sharing and collaboration Figma UI/UX design. Currently deployed on Webflow.",
    tags: ["Figma", "Webflow", "UI/UX", "Responsive"],
    imageUrl:teamApp,
  },
  {
    title: "ChatMate",
    description:
      "A chat app design to provide a fun and easy way to connect with friends, family, and new people from all over the world. Also deployed on Webflow.",
    tags: ["Figma", "Webflow", "UI/UX", "Responsive"],
    imageUrl: chatMate,
  },
  {
    title: "GS_Amazon",
    description:
      "Amazon clone with the basic features like Authentication,Card Payment using Stripe, Add to Cart & Orders Options.",
    tags: ["React", "Firebase", "CSS", "Authentication" , "Stripe"],
    imageUrl: GS_amazon,
  },
] as const;

export const skillsData = [
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "Figma",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
  "DSA",
  "Webflow",
  
] as const;