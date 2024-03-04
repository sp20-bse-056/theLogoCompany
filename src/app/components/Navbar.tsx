"use client";
import React, { useState } from "react";
import { Menu } from "./ui/navbar-menu";
import { MenuItem } from "./ui/navbar-menu";
import { HoveredLink } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    
    return (
        <>
            <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
                
            </div>
            <div className="flex justify-evenly bg-white text-black shadow-sm top-0 fixed w-full">
            <div className="text-white flex items-center ">
                <link rel="stylesheet" href="#Contact" /> <img className=" h-20 w-24" src="/Pic-for-website/hero2.png" alt="" />
            </div>
                <div>
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Home" />  
                </Link>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Portfolio" />  
                </Link>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4"> 
                        <HoveredLink href="/Logo-design">Logo Design</HoveredLink>
                        <HoveredLink href="/Stationary-Design">Stationary Design</HoveredLink>
                        <HoveredLink href="/Social Media">Social Media</HoveredLink>
                        <HoveredLink href="/Marketing-Design">Marketing Design</HoveredLink>
                        <HoveredLink href="/Web-Design">Web Design</HoveredLink>
                    </div>
                </MenuItem>
              

                <MenuItem setActive={setActive} active={active} item="How It Works">
                    <div className="flex flex-col space-y-4"> 
                        
                         <HoveredLink href="/Our Process">Our Process</HoveredLink>
                        <HoveredLink href="/Money Back Guarantee">Money Back <br /> Guarantee</HoveredLink>
                        <HoveredLink href="/FAQs">FAQs</HoveredLink>
                    </div>
                </MenuItem>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Reviews" />  
                </Link>




            </Menu>
        
            </div>
            <div className="text-black  mt-5">
            <Link href="#contact">
                    <MenuItem setActive={setActive} active={active} item="Contact" />  
                </Link>
            </div>
            {/* after navbar , right button */}
            <div className=" text-white flex  items-center "><button  className="  hover:bg-white hover:text-black hover:border-2 hover:border-solid hover:border-orange-600 rounded-full w-60 bg-orange-600 border p-2">BEGIN YOUR ORDER </button></div>

            
            </div>
        </>
    );
}

export default Navbar;
