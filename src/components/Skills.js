import React from "react";
import tailwind from "./tailwind.png";
import cImage from "./c.png";
import cpp from "./c++.png";
import jsImage from "./javascript.png";
import reactImage from "./react.png";
import cssImage from "./css.png";

export const Skills = () => {
  return (
    <div className="z-50 w-screen h-screen overflow-hidden flex justify-center items-center bg-no-repeat bg-cover bg-center bg-black lg:bg-[#000000]" id="skills">
      <div className="skills lg:bg-white/25 bg-white/20 backdrop-blur-md w-10/12 lg:w-11/12 h-4/5 lg:backdrop-blur-2xl rounded-lg flex items-center justify-center">
        
        <div className="aboutSkills w-full flex justify-evenly">
          <div className="right hidden lg:block lg:w-4/6 text-3xl">
            <p className="text-8xl mb-10 font-pixel text-blue-500">SKILLS</p>
            <p className=" font-robot sm:text-2xl sm:leading-10 text-white">I am proficient in C, C++, Java, and possess intermediate skills in
            React and JavaScript. Leveraging Tailwind CSS, I design responsive
            and visually appealing user interfaces. With expertise in
            problem-solving and over 150 Data Structures and Algorithms
            questions solved, I bring a strong foundation in software
            development. Committed to staying current, I continuously update my
            skills to reflect the latest industry advancements, making me a
            versatile and effective developer.</p>
          </div>
          <div className="">
            <div className="lg:hidden text-white text-center text-5xl font-pixel font-black"><p>SKILLS</p></div>
            <div className="left grid grid-cols-2 gap-7 py-8 lg:py-2 font-pixel text-white">
              <div className="text-center">
                <img
                  className=" w-28 h-28 border rounded-full p-5 hover:rotate-[360deg] transition-all duration-1000"
                  src={tailwind}
                  alt=""
                />
                <div className="pt-1">TAILWIND</div>
              </div>
              <div className="text-center">
                <img
                  className=" w-28 h-28 border rounded-full p-5 hover:rotate-[360deg] transition-all duration-1000"
                  src={cImage}
                  alt=""
                />
                <div className="pt-1">C Programming</div>
              </div>
              <div className="text-center">
                <img
                  className=" w-28 h-28 border rounded-full p-5 hover:rotate-[360deg] transition-all duration-1000"
                  src={cpp}
                  alt=""
                />
                <div className="pt-1">C++</div>
              </div>
              <div className="text-center">
                <img
                  className=" w-28 h-28 border rounded-full p-5 hover:rotate-[360deg] transition-all duration-1000"
                  src={reactImage}
                  alt=""
                />
                <div className="pt-1">React</div>
              </div>
              <div className="text-center">
                <img
                  className=" w-28 h-28 border rounded-full p-5 hover:rotate-[360deg] transition-all duration-1000"
                  src={jsImage}
                  alt=""
                />
                <div className="pt-1">Javascript</div>
              </div>
              <div className="text-center">
                <img
                  className=" w-28 h-28 border rounded-full p-5 hover:rotate-[360deg] transition-all duration-1000"
                  src={cssImage}
                  alt=""
                />
                <div className="pt-1">CSS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
