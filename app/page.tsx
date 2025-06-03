"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";



export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      
      <div className="h-16" />

      
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-7xl font-extrabold italic font-press-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Name is
        </motion.h1>

        <motion.h2
          className="text-6xl font-extrabold italic font-press-start mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nahel
        </motion.h2>

        <motion.h2
          className="text-5xl font-extrabold italic font-press-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TypeAnimation
            sequence={["Software Engineer", 1000, "Learner", 1000, "Human", 1000]}
            wrapper="span"
            speed={50}
            className="text-2xl inline-block font-press-start mt-8"
            repeat={Infinity}
          />
        </motion.h2>
      </main>

    </div>
  );
}
