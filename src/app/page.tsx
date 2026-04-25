"use client"

import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Certifications from "@/components/Certificates";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay: 100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh()
  }, []);
  return (
    <main>
      <Hero />
      <Certifications />
      <Projects />
      <Skills />
      <About />
      <Contact />
      
    </main>
  );
}