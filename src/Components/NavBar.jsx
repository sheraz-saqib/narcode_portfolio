import React from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
const NavBar = () => {
   useGSAP(()=>{
    gsap.from(".navBar", { duration: 1, y: -60, });
   })
  return (
    <nav className='navBar fixed top-0 w-screen h-[6.5rem] '>
    <div className='primaryBgColor h-full flex justify-between items-center px-[4rem] '>
        <div className="logo text-[3rem] text-white">Narcode</div>
        <div className="linkSection w-1/3  ">
            <ul className="navList flex justify-between items-center h-full text-[1.5rem] text-[#A1A1A1] font-medium">
                <li className="navLink active"><a href="">Home</a></li>
                <li className="navLink"><a href="">About</a></li>
                <li className="navLink group relative">
              <a href="#" className="hover:text-white">
                Our Products
              </a>

              {/* Dropdown Menu */}
              <ul className="absolute  primaryBgColor left-0 top-[100%] hidden group-hover:flex flex-col bg-primaryBgColor text-[#A1A1A1] w-[12rem] py-2 rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-700 hover:text-white">
                  <a href="#">Product 1</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 hover:text-white">
                  <a href="#">Product 2</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 hover:text-white">
                  <a href="#">Product 3</a>
                </li>
              </ul>
            </li>
                <li className="navLink"><a href="">Our Services</a></li>
                <li className="navLink"><a href="">Contact</a></li>
                <li className="navLink"><a href="">Blogs</a></li>
            </ul>
        </div>
    </div>
    </nav>

  )
}

export default NavBar
