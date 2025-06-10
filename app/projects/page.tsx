"use client";

import Header from "@/components/header";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>



<motion.div  
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>

  <div className=" md:flex flex-row min-h-screen items-center justify-center pt-24 px-4 gap-x-[120px]">
          <div className="w-100 h-100 bg-amber-400 rounded-lg shadow-md flex items-center justify-center font-press-start hover:scale-110">
            <p className="text-amber-50 pb-70">SHOPPAY</p>
          </div>
          <div className="w-100 h-100 bg-amber-400 rounded-lg shadow-md flex items-center justify-center font-press-start hover:scale-110">
            <p className="text-amber-50 pb-70">AL AHLY STORE</p>
          </div>
          <div className="w-100 h-100 bg-amber-400 rounded-lg shadow-md flex items-center justify-center font-press-start hover:scale-110">
            <p className="text-amber-50 pb-70">TWEET ME</p>
          </div>
  </div>


  
</motion.div>

      

    </>
  );
}
