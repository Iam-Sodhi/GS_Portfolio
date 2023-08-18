import { useActiveSectionContext } from "@/context/activeSection-context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { SectionName } from "./types";



export function useSectionInView(sectionName:SectionName, threshold=0.75) {
    const {ref,inView}=useInView( {
        threshold: threshold, // or just write threshold,
      });
      const {setActiveSection , timeOfLastClick}=useActiveSectionContext();
      useEffect(()=>{    //useEffect is used when you want to synchronize with the external system
        if(inView && Date.now()-timeOfLastClick>1000){
          setActiveSection(sectionName);;
        }
      },[inView,setActiveSection,timeOfLastClick,sectionName]);  //run when inView gets changed (or setActiveSection )
    
    return {ref};
}

