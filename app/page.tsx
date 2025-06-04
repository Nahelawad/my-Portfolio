"use client"


import Header from "@/components/header";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


import { TypeAnimation } from "react-type-animation";



export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      
      <div className="h-16" />

      
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-12">

        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold italic font-press-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        Hello,My Name is Nahel I am a
        </motion.h1>

       

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold italic font-press-start mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TypeAnimation
            sequence={["Software Engineer", 1000, "Learner", 1000, "Human", 1000]}
            wrapper="span"
            speed={50}
            className="inline-block font-press-start mt-4 sm:mt-6 md:mt-8"
            repeat={Infinity}
          />
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>

          <div className=" flex space-x-4 mt-23">

            <FaGithub className="text-yellow-400 text-3xl hover:text-white hover:scale-110 transition-transform cursor-pointer"/>
            <FaInstagram className="text-yellow-400 text-3xl hover:text-white hover:scale-110 transition-transform cursor-pointer"/>
            <FaLinkedin className="text-yellow-400 text-3xl hover:text-white hover:scale-110 transition-transform cursor-pointer"/>
            <MdOutlineMail className="text-yellow-400 text-3xl hover:text-white hover:scale-110 transition-transform cursor-pointer"/>

        </div>

        </motion.div>

        

        
      </main>

    </div>
  );
}
