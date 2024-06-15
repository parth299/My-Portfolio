import { useEffect, useState } from 'react';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000)
  }, [])

  return (
    <>
      
      <div className={`flex items-center justify-center text-7xl bg-black font-pixel text-white font-bold h-screen w-screen transition-all opacity-100 duration-700 ${isLoading ? "" :  "h-0"}`}>
        {isLoading && (<Typewriter 
          words={["Loading...", "Coding..."]}
        />)}
      </div>
      
      
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
