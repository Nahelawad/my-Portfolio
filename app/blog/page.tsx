"use client";


import Header from "@/components/header";



export default function About() {
  return (
    <>
  <div className="min-h-screen flex flex-col px-4 sm:px-8 pt-20">
  <div className="fixed top-0 left-0 w-full z-50">
    <Header />
  </div>

  <div className="grid place-items-left h-screen font-jersey text-8xl">
    My Blogs
  </div>
</div>

    </>
  );
}
