
import './index.css';

import React, { useState, useEffect } from 'react';


function RotatingText() {
  // Texts to rotate
  const texts = ["Jun Nur Mustaqeem","An Aspiring Engineer","A Student"];
  // Current text index
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Change text every 3 seconds
    const intervalId = setInterval(() => {
      setIndex(currentIndex => (currentIndex + 1) % texts.length);
    }, 3000);
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);


  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div >
        <div className = {`transition-all duration-1000 ease-in-out animate-moveUp absolute`} >

        {texts[index]}
        </div>

    </div>

    

  );
}


function NavBar() {

  return(
    <>
      <div className="font-helvetica text-[#F7EEFF] pt-8 pl-5 w-[34%] leading-none fixed">
        <div className='hover:text-purple-700 transition-colors ease-in-out duration-500'>About</div>
        <div> Skills </div>
        <div>Projects </div>
        <div>Resume</div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="bg-[#17082A] min-h-screen m-0 p-0">
      <NavBar/>

      <>
      <div className = "pt-36 object-center text-[#FDFDFD]">
          <div className = "pl-10 text-3xl font-helvetica hover:text-purple-700 transition-colors ease-in-out duration-500">Hi <span>ssss</span>! I'm</div>
          <div className = "pl-10 pt-8 pb-20 text-5xl font-bold"><RotatingText/></div>
          <div className = "pl-10 pt-10 text-3xl text-purple-500 font-bold font-helvetica animate-moveUp">Learn More</div>
      </div></>

      <>
      <div className="h-48 w-52 border-8 border-[#FDFDFD] mt-60 mx-auto rounded-lg">
      </div> 
      {/* IMAGE Of ME OR SOMETHING ABOVE */}


      {/* about me box  */}
      <div className="h-fit w-52 bg-[#FDFDFD] mx-auto mt-8">
        <div className="text-[#000000] p-4 font-bold text-xl">About Me</div>
        <div className="text-[#000000] pl-4 pr-4 text-xs font-helvetica">
            <p className = "mb-2">  I’m a Grade 11 high school student from Toronto! I’m passionate about learning software and hardware development on all spectrums. 
              My current focuses include web development and DSA!</p>
            
            <p className = "mb-2">  
            In my spare time I also:
              </p>

           <p className = "mb-2">  
            <ul className ="list-disc pl-4">
              <li className>debate in the Ontario Ethics Bowl</li>
              <li>lead and participate in hackathons</li>
              <li>plan events with Student Council</li>
              <li>tutor students in STEM</li>
              <li>help organize and speak in assemblies</li>
              <li>cry over Codeforces problems</li>
            </ul>

           
              </p>  

              <p className = " pb-4">  
              I also enjoy reading webnovels until far too late, and crocheting if I find the time!
              </p>  
      
        </div>

      {/* skills section  */}

      </div>
      
      </>

      <>
      <div className = "text-white font-bold text-3xl ml-14 mt-16">My Skills</div> 
      <div className = "pt-8 h-fit w-full pb-8">

        <div className = "bg-[#ECF0F1] text-2xl hover:text-3xl w-[40%] h-16 hover:w-[50%] ml-14 pb-4 transition-all ease-in-out rounded-tr-3xl hover:rounded-tr-xl rounded-tl-xl hover:rounded-tl-3xl rounded-bl-2xl hover:rounded-bl-sm rounded-br-xl hover:rounded-br-3xl ">

          <div className="p-4 font-bold text-[#333232]">Soft Skills</div>
        </div>


      </div>
    
      </>
      {/* 
      
       */}
  
    
    </div>
  );
}

export default App;
