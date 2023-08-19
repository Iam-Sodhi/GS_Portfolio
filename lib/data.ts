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
    title: "Student",
    location: "Jalandhar, Punjab",
    description:
      "I started my under graduation as a CSE student in NIT, Jalandhar.ust enjoying learning new technologies & enhancing my programming Skills. ",
    icon: React.createElement(LuGraduationCap),
    //it is ts file not tsx file hence we can' use icon: <LuGraduationCap />
    date: "2022",
  },
  {
    title: "Web Development and Blockchain Enthusiast ",
    location: "NIT Jalandhar | Current",
    description:
      " I've embarked on an enriching journey fueled by my passion for web development and blockchain technology. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
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