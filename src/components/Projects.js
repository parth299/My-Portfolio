import React from "react";
import { ProjectItem } from "./ProjectItem";
import vocalize from "./vocalize.png";
import newsClub from "./newsClub.png";
import cloudJot from './cloudJot.png'
import rightIcon from './rightProject.png'

export const Projects = () => {
  return (
    <div className="w-screen h-screen bg-transparent flex items-center justify-center" id="projects">
      <div className="main w-[90%] bg-white shadow-2xl rounded-xl h-[80%]">
        <div className="heading text-5xl text-center p-4 font-pixel font-black lg:text-7xl lg:my-5">
          PROJECTS
        </div>
        <div className="lg:hidden ItemsBox h-[90%] w-full flex overflow-auto no-scrollbar">
          <div className="box-1 h-[90%] min-w-[90%] flex items-center justify-center mx-4">
            <ProjectItem
              image={vocalize}
              title="VOCALIZE - TEXT TO SPEECH CONVETER"
              about="This webiste takes text intput from the user and convert it into speech.  This is a react application which uses windows synthesiser."
            />
          </div>
          <div className="box-2 h-[90%] min-w-[90%]  flex items-center justify-center mx-4">
            <ProjectItem
              image={newsClub}
              title="NEWSCLUB APP"
              about="A website which uses fetch api from newsapi.org to present you the latest news in just one click. In future we can make certain changes in out which let us fetch only specific news."
            />
          </div>
          <div className="box-3 h-[90%] min-w-[90%]  flex items-center justify-center mx-4">
            <ProjectItem
                image={cloudJot}
                title="CLOUD JOT"
                about="The full stack application with features like login, sign up which lets you stores your own notes on the cloud."
              />
          </div>
        </div>
        <div className="img lg:hidden flex justify-center p-4">
          <img className=" w-5 h-5" src={rightIcon} alt="" />
        </div>
        <div className="hidden lg:block h-[80%]">
          <div className="box flex justify-evenly items-center">
            <div className="hover:scale-105 transition-transform duration-500">
              <ProjectItem
                image={vocalize}
                title="VOCALIZE - TEXT TO SPEECH "
                about="This webiste takes text intput from the user and convert it into speech."
              />
            </div>

            <div className="hover:scale-105 transition-transform duration-500">
              <ProjectItem
                image={newsClub}
                title="NEWSCLUB APP"
                about="A website which uses fetch api from newsapi.org to present you the latest news in just one click"
              />
            </div>
            <div className="hover:scale-105 transition-transform duration-500">
              <ProjectItem
                image={cloudJot}
                title="Cloud Jot"
                about="The full stack application with features like login, sign up o stores your own notes on the cloud."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
