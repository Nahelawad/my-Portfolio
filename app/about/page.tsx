"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
  
        <Header />

       
        <div className="h-16" />

        
        <main className="flex-grow px-4 py-8 overflow-auto">
          <motion.h1
            className="text-1xl sm:text-xl md:text-2xl font-extrabold italic font-press-start mt-23"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Enthusiastic and highly motivated Software Engineering graduate with hands-on experience in full-stack web development, mobile app prototyping, and UI design. Strong foundation in JavaScript, Kotlin, and Next.js with a passion for building scalable and user-centric applications. Currently seeking junior software developer roles to apply and expand my skills in a professional environment. Feel free to contact me anytime and I will be happy to help 😊
          </motion.h1>
        </main>

      </div>
    </>
  );
}
