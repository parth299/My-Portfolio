import React, { useState } from "react";
import portfolioImage from "./portfolio_image.png";
import twitter from "./twitter.png";
import github from "./github.png";
import linkedin from "./linkedin.png";
import menu from "./menu.png";

export const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuClose, setisMenuClose] = useState(true);

  const [isHidden, setHidden] = useState(true);

  const toggleOpen = () => {
      setMenuOpen(!isMenuOpen);
      setisMenuClose(!isMenuClose);
  }
  const toggleClose = () =>{
    setisMenuClose(!isMenuClose);
    setMenuOpen(!isMenuOpen);
  }

  setTimeout(() => {
    setHidden(false);
  }, 1000);
  

 
    return (
      <>
        {/* MAIN NAVBAR */}
        <nav className=" w-screen bg-white fixed z-[1000] hidden lg:block">
          <ul className="flex text-black items-center justify-evenly p-1">


            {/* IMAGE */}
            <li className="flex items-center font-pixel"> 
              <img className="w-14 h-14 invisible" src={portfolioImage} alt="" />
              <h1>Portfolio</h1>
            </li>
            {/* IMAGE */}



            {/* NAV */}
            <div className="navi flex gap-8 font-pixel font-thin text-sm">
              <a href="#home"><li className="cursor-pointer ">HOME</li></a>
              <a href="#skills"><li className="cursor-pointer ">SKILLS</li></a>
              <a href="#projects"><li className="cursor-pointer ">PROJECTS</li></a>
              <a href="#contact"><li className="cursor-pointer ">CONTACT</li></a>
            </div>
            {/* NAV */}


            {/* LOGOS */}
            <div className="logos flex gap-9">
              <li className="rounded-full overflow-hidden">
                <a href="https://www.twitter.com"><img className=" w-5 h-5 cursor-pointer" src={twitter} alt="" /></a>
              </li>
              <li className="rounded-full overflow-hidden">
                <a href="https://github.com/parth299"><img className=" w-5 h-5 cursor-pointer" src={github} alt="" /></a>
              </li>
              <li className="rounded-full overflow-hidden">
                <a href="https://www.linkedin.com/in/parth-saini-a8272424b/"><img className=" w-5 h-5 cursor-pointer" src={linkedin} alt="" /></a>
              </li>
            </div>
            {/* LOGOS */}


          </ul>
        </nav>
        {/* MAIN NAVBAR */}
        <nav className={`z-50 fixed transition-all w-screen ${isMenuOpen ? 'bg-[#262626]' : 'bg-[#262626]'} font-pixel ${isMenuOpen ? 'opacity-100' :'opacity-100'}  text-white tracking-widest z-50`}>
        <div className="flex justify-between items-center h-16">
          <div className="text-md pl-6 font-black">PORTFOLIO.exe</div>
          <div>
            <button onClick={toggleOpen}>
              <img className="invert w-5 h-5 mr-5" src={menu} alt="Menu" />
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {(
          <div className={`${isHidden ? 'invisible':''} fixed inset-0 bg-[#262626] -translate-y-full z-50 ${isMenuOpen ? 'animate-slide' : ''} ${isMenuClose? 'animate-slideback': ''} `}>
            <div className="p-4">
              {/* Your mobile navigation menu content goes here */}
              <ul className="text-center pt-32 text-white text-3xl">
                <a href="#projects"><li className=" py-6"><button onClick={toggleClose}>PROJECTS</button></li></a>
                <a href="#skills"><li className=" py-6"><button onClick={toggleClose}>SKILLS</button></li></a>
                <a href="#contact"><li className=" py-6"><button onClick={toggleClose}>CONTACT</button></li></a>
                <div className="flex justify-evenly mt-14">
                  <li className="flex justify-center items-center">
                  <a href="https://github.com/parth299"><img className="invert w-7 h-7" src={github} alt="GitHub" /></a>
                </li>
                <li className="flex justify-center items-center">
                  <a href="https://www.linkedin.com/in/parth-saini-a8272424b/"><img className="invert w-7 h-7" src={linkedin} alt="LinkedIn" /></a>
                </li>
                <li className="flex justify-center items-center">
                  <a href="https://www.twitter.com"><img className="invert w-7 h-7" src={twitter} alt="Twitter" /></a>
                </li>
                </div>
                
                {/* Add more menu items as needed */}
              </ul>
              <button className="absolute top-3 right-6" onClick={toggleClose}>X</button>
            </div>
          </div>
        )}
      </nav>
      </>
    );

  
};
