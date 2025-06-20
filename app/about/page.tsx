"use client";


import Header from "@/components/header";
import { motion } from "framer-motion";


export default function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col px-4 sm:px-8">
        <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>


        <div className="h-45"/>

        <div className="text-4xl sm:text-6xl lg:text-7xl font-press-start mt-10 text-left ml-7 ">
          <motion.h4
            
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WHO AM I
          </motion.h4>
        </div>
        
       


  

<div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-10 px-4">

   <motion.p
            className="text-1xl sm:text-xl md:text-3xl font-jersey mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
              >
            Hey, my name is Nahel — a recent Software Engineering graduate from the University of Northampton with a passion for building things that actually work and help people.I am an
            Enthusiastic and highly committed person with hands-on experience in full-stack web development, 
            mobile app prototyping, and UI design. Strong foundation in JavaScript, Kotlin, and Next.js 
            with a passion for building scalable and user-centric applications. 
            Currently seeking junior software developer roles or web development roles to apply and expand my skills in a professional environment.
            Feel free to contact me anytime and I will be happy to help .
          </motion.p>

  <motion.img
  src="/Me.jpg"
  alt="Nahel"
  className="rounded-xl shadow-lg w-auto h-auto object-cover md:w-1/3 max-w-xs transition-all duration-300 hover:scale-110 mb-43"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
/>

</div>


<div className="text-4xl  flex flex-col items-start gap-10 mt-10 px-4 font-press-start mb-10 max-w-md ">

<motion.p
            
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>
Technical Skills
</motion.p>
</div>



<motion.div  
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>

<div className="flex justify-items-center items-center gap-30 font-jersey  py-10">
<div className="bg-amber-400 mb-23 text-center w-63 rounded-lg text-4xl -mt-2 hover:scale-110 cursor-pointer">
Web development
</div>

<div className="bg-amber-400 mb-23 text-center w-63 rounded-lg text-4xl -mt-2 hover:scale-110 cursor-pointer">
UI/UX
</div>

<div className="bg-amber-400 mb-23 text-center w-63 rounded-lg text-4xl -mt-2 hover:scale-110 font cursor-pointer">
DevOps
</div>
</div>

</motion.div>



       
</div>


    </>
  );
}
