import React from 'react'
import portfolioImage from './portfolioImage.png'

export const About = () => {
  return (
    <div className='w-screen z-10 flex items-center justify-center' id='about'>
        <div className="About w-11/12 h-[90%] lg:h-[85%] shadow-2xl rounded-xl bg-[#dcdce4] lg:bg-[#dcdce4] my-16">
          <h1 className='text-black font-pixel md:text-8xl md:pb-5 text-center lg:text-8xl text-6xl p-5 lg:mt-8 md:mt-6 md:p-1'>ABOUT <span className='text-blue-700'>ME</span></h1>
          <div className="imageOnMobile lg:hidden flex items-center justify-center">
            <img className='rounded-2xl w-2/5 h-2/5 grayscale' src={portfolioImage} alt="" />
          </div>
          <div className="about  flex justify-evenly md:py-5 py-10">
           <div className="left  lg:w-4/5">
            <p className='px-2 md:text-[25px] md:px-5 md:pt-4 text-[17px] font-pixel font-bold pl-5 lg:text-2xl lg:p-5 lg:pl-16'>Hello! I'm <span className='text-blue-700'>Parth</span>, a passionate web developer with a focus on front-end development. I specialize in creating visually appealing and user-centric websites, utilizing my skills in HTML, CSS, and JavaScript.I believe in the power of continuous learning and staying updated with the latest industry trends. I enjoy collaborating with others to bring ideas to life. Feel free to explore my portfolio and get in touch for potential collaborations!
          
            <div className='text-blue-700 text-xl font-black mt-4 md:text-3xl'>LETS WORK TOGETHER !</div>
</p>
           </div>
           <div className="right  hidden lg:w-2/5 lg:flex justify-center items-center">
               <img className="w-3/4 h-full rounded-lg grayscale" src={portfolioImage} alt="" />
           </div>
          </div>


          <div className="bottomCV font-pixel">
            <h1 className='text-left pl-5 text-xl lg:pl-16 lg:text-3xl font-black underline'>KNOW MORE ABOUT ME</h1>

            <div className='lg:text-left text-center lg:text-2xl text-white md:py-5 p-8 lg:pl-16 my-2 mb-5'>
              <a href='https://drive.google.com/file/d/1inZS-ePUjxHjc4ykidBNEE7w-qWY2yAm/view?usp=sharing'>
              <button className='rounded-2xl bg-blue-600 md:py-1 px-3 py-2 inline-block'>Download CV</button>
              </a>
            </div>
            
          </div>
        </div>
    </div>
  )
}
