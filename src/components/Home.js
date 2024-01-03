import React from "react";
import { ParticlesBg } from "./ParticlesBg";
import { Typewriter, Cursor } from "react-simple-typewriter";
import mouseIcon from "./mouse-cursor.png";
import github from './github.png'

export const Home = () => {
  return (
    <>
      <div id="home"
        className={`home-div h-screen w-screen flex justify-center items-center text-white overflow-hidden bg-[#000000] lg:bg-transparent lg:bg-none bg-no-repeat bg-cover`}
      >
        <div className="hidden lg:block">
          <ParticlesBg />
        </div>

        <div className="lg:hidden homePage lg:w-11/12 w-full h-full backdrop-brightness-50 text-white px-2 py-44 text-center pl-6">
          <div className="right font-thin font-pixel tracking-wider">
            <div className="hi text-8xl font-black py-1">HI ,</div>
            <div className="Iam text-8xl font-black py-1">I AM</div>
            <div className="parth text-blue-700 text-8xl font-black font-dance py-1">
              PARTH
            </div>
            <div className="typer text-4xl px-2 py-3 font-thin">
              I AM A
              <span className="">
                <Typewriter
                words={[" DEVELOPER ...", " LEARNER ..."]}
                loop={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              <Cursor />
              </span>
              
            </div>
          </div>
          <div className="icon lg:hidden flex justify-center mt-16 animate-bounce">
            <button>
              <a href="#about"><img className="invert w-7 h-7" src={mouseIcon} alt="" /></a>
            </button>
          </div>
        </div>
        <div className="right hidden lg:flex w-4/5 h-4/5 xl:w-3/5 text-2xl text-white z-50 flex-col justify-center tracking-widest pl-28 font-pixel ">
          <h3 className="text-6xl">Hi, I am </h3>
          <h1 className="text-9xl">Parth Saini</h1>
          <p className="text-5xl pt-7">
            And I am 
            <span className="text-blue-500">
            <Typewriter
                words={[" Front End Developer", " Passionate Learner"]}
                loop={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              </span>
              <Cursor />
          </p>
        </div>
        <div className="left hidden xl:flex h-4/5 w-2/5 justify-center items-center flex-col">
          <img className="invert h-3/5 w-3/5" src={github} alt="" />
          <a href="#contact"><button className="bg-blue-600 p-2 rounded-lg font-pixel mt-6">Contact Me</button></a>
        </div>
      </div>
    </>
  );
};
