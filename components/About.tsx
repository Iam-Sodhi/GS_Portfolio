"use client"
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
 const {ref}=useSectionInView('About');
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
    ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a B.Tech student at NIT, Jalandhar, specializing in{" "}
        <span className="font-medium">Computer Science and Engineering.</span>,
        A dedicated web developer and programmer, I am passionate about crafting
        dynamic and user-friendly digital experiences. Proficient in tools like{" "}
        <span className="font-medium">
          Webflow and Figma,I blend creativity with technical
          expertise.Furthermore,
        </span>{" "}
        <span className="italic">
          I actively engage in competitive programming,
        </span>{" "}
        continuously honing my problem-solving skills and algorithmic thinking.
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. Additionally, I am enthusiastic
        about{" "}
        <span className="font-medium">Web 3 and blockchain innovation.</span>
      </p>
      <p></p>
    </motion.section>
  );
}
