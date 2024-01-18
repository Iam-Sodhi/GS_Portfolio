import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import CodersRealm from "@/public/CodersRealm.png"
import chatMate from "@/public/chatMate.png"
import musicLibrary from "@/public/musicLibrary.png"
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
    title: "ChatMate",
    description:
      "This is a realtime chat application with features of one-to-one video callings, chattings and other discord like features.",
    tags: ["Next.js", "Typescript", "Socket.io", "Prisma","Tailwind CSS", "MySQL"],
    imageUrl: chatMate,
    url:"https://chatmate-gsodhi.vercel.app/"
  },
  {
    title: "CodersRealm",
    description:
      "This is a coding platform that is like a leetcode clone using Firebase for authentication and database.",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Typescript"],
    imageUrl:CodersRealm,
    url:"https://coders-realm.vercel.app/"
  },
  {
    title: "Music Player",
    description:
      "A group OOPS project where you immerse yourself in an enhanced music experience, managing playlists and enjoying a visualizer for each track.",
    tags: ["C++", "OOPS", "SFML GUI"],
    imageUrl: musicLibrary,
    url:"https://github.com/Iam-Sodhi/Music-Player"
  },
  {
    title: "GS_Amazon",
    description:
      "Amazon clone with the basic features like Authentication,Card Payment using Stripe, Add to Cart & Orders Options.",
    tags: ["React", "Firebase", "CSS", "Authentication" , "Stripe"],
    imageUrl: GS_amazon,
    url:"https://amazon-gs.onrender.com/"
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