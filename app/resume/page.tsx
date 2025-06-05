"use client";


import Header from "@/components/header";



export default function About() {
  return (
    <>
  <div className="min-h-screen flex flex-col px-4 sm:px-8 pt-20">
  <div className="fixed top-0 left-0 w-full z-50">
    <Header />
  </div>

  <div className="flex justify-center items-center flex-grow">
    <button  
     className="bg-amber-400 text-2xl font-press-start py-2 px-4 rounded-full">
      <a href="/NahelCv.pdf" download="Cv">
       Press Me to Downlaod My Cv
      </a>
    </button>

    
  </div>
</div>

    </>
  );
}
