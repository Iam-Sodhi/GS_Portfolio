"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import {motion} from "framer-motion";

const fadeInAnimationVariants={
    initial:{
        opacity:0,
        y:100,
    },
    animate:(index: number)=>{  // here we are using animate as a function so that delay can be made equal to custon value
       return {opacity:1,
        y:0,
        transition:{
            delay: 0.05*index,
        }}}
       
  }
export default function Skills() {
    const {ref}=useSectionInView("Skills");
  return (
    <section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
        <SectionHeading >My Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {
                skillsData.map((skill,index)=>(
                    <motion.li  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                     key={index}
                     variants={fadeInAnimationVariants}
                     initial="initial"
                     whileInView="animate"  //here we are not using animate as we do not want to animate when the page loads
                     viewport={{once:true }}  //so that it animates only once not always even we we scroll from down 
                     custom={index}
                     >{skill}
                     </motion.li>
                ))
            }
        </ul>
    </section>
  )
}
