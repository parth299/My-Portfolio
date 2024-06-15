import React from "react";
import phone from './call.png'
import insta from './instaContact.png'

export const Contact = () => {
  return (
    <div className="w-screen h-screen bg-[#000000] flex items-center justify-center lg:bg-transparent" id="contact">
      <div className="contactMe h-[85%] w-4/5 bg-white/15 backdrop-blur-md rounded-xl p-5">
        <div className="getTouch font-pixel text-6xl md:text-8xl text-white px-5 py-2">
          <h1>
            GET IN <span className="hidden md:inline">TOUCH</span>
            <div className="text-right md:text-left md:hidden">TOUCH</div>
          </h1>
        </div>
        <div className="aboutTextarea md:hidden flex justify-center items-center font-pixel text-white py-6">
          <textarea
            className="bg-black opacity-65 p-3"
            placeholder="Enter your project idea...."
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="largeTextarea hidden md:flex items-center justify-center font-pixel text-3xl py-7">
          <textarea
            placeholder="Enter your project idea...."
            className="bg-white backdrop-blur-xl p-3 text-black"
            name=""
            id=""
            cols="40"
            rows="6"
          ></textarea>
        </div>
        <div className="sendMessage flex justify-center items-center">
          <a
            href="mailto:sainiparth299@gmail.com.com?
              &amp;subject=Project Idea 
              &amp;body="
          >
            <button className="font-pixel bg-blue-700 text-white p-2 rounded-xl">
                Send Mail
            </button>
          </a>
        </div>
        <div className="links flex gap-6 pl-7 mt-14 pb-2">
            <a href="tel:9306929954"><img className="w-6 h-6 invert" src={phone} alt="" /></a>
            <a href="https://www.instagram.com/parth.saini_/"><img className="invert w-6 h-6" src={insta} alt="" /></a>
        </div>
        <div className="hidden lg:block pl-6 text-white font-pixel pt-1 font-black">
            CONTACT ME
        </div>
        <div className="hidden lg:block text-right pr-6 text-white mb-2">
        &copy; ParthSaini
        </div>
        <a className="p-8" href="https://visitcount.itsvg.in">
          <img src="https://visitcount.itsvg.in/api?id=Parth&label=Website%20Views&color=1&icon=5&pretty=false" alt="Loading Img"/>
        </a>      
      </div>
    </div>
  );
};
