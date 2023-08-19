"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/Actions/sendEmail";
import SubmitBtn from "./submitBtn";
import toast from "react-hot-toast"

export default function Contact() {
    const {ref}=useSectionInView("Contact");
    
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{once: true}}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:gautamsodhi88@gmail.com">
          gautamsodhi@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form action={async(formData)=>{
       const {data,error}= await sendEmail(formData);
       if(error){
       // alert(error);  //we are using react-hot-toast to desing the alert message
        toast.error(error);
       return;
       }
       toast.success("Email sent successfully!");

     }} className="mt-10 flex flex-col ">
        {/* to use function in action you also need to modify next.congig.js file */}
        <input
          className="h-14 rounded-lg borderBlack px-4"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 "
          name="message"
          placeholder="Your Message"
          maxLength={5000}
          required
        />
     <SubmitBtn />
      </form>
    </motion.section>
  );
}
