"use client"; 
import Link from "next/link";
import React, { useState } from "react";
import { Menu,X } from "lucide-react";



const Header = () =>{
    const [navOpen,setNavOpen]=useState(false);
    return(
        <>
        <div className="w-full h-2 sticky top-0 mt-10">
        <div className="container mx-auto px-4 h-full">
            <div className="hidden md:flex gap-x-6 text-yellow-500 text-3xl font-bold font-mono ">

                <Link href="/">

                <h2 className="hidden md:flex gap-x-6 text-yellow-500 text-3xl font-bold mt-4 font-press-start italic ">
                    Nahel
                    </h2>  
                
                </Link>
                   

                <ul className="hidden md:flex gap-x-6 text-yellow-500 ml-100 space-x-4 mt-4 font-bold">
                    <li className="hover:text-white hover:underline transition duration-200">
                        <Link href="/about">
                        <p className="font-press-start">
                            About 
                        </p>
                        </Link>
                    </li>

                    <li className="hover:text-white hover:underline transition duration-200">
                        <Link href="/about">
                        <p className="font-press-start">
                            Resume
                        </p>
                        </Link>
                    </li>

                    <li className="hover:text-white hover:underline transition duration-200">
                        <Link href="/about">
                        <p className="font-press-start">
                            Projects
                        </p>
                        </Link>
                    </li>

                    <li className="hover:text-white hover:underline transition duration-200">
                        <Link href="/about">
                        <p className="font-press-start ">
                            Contact
                        </p>
                        </Link>
                    </li>
                </ul>           
            </div>
        </div>
        </div>   


        <div className="md:hidden text-white" onClick={()=>setNavOpen(!navOpen)}>
            {
                navOpen? <X size={30}/>:<Menu size={30}/>
            }
        </div>     
        </>
    )
}

export default Header;