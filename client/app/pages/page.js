"use client";

// import { useCallback } from "react";
// import Particles from "react-particles";
// import { tsParticles } from "tsparticles-engine";
// import { loadFireworksPreset } from "tsparticles-preset-fireworks";
// //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
// import particlesConfig from "../config/particles-config";

// const Page = () => {
//   const options = {
//     preset: "fireworks",
//   };
//   const customInit = async() =>{
//     await loadFireworksPreset(tsParticles)
//   }



//   return (
//     <div className="bg-white">
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <p>helllo</p>
//       <div className="z-[-10]">
//       <Particles
//       options={options} 
//       init={customInit}
//       params={particlesConfig}
//       >
        
//       </Particles>
//       </div>
//     </div>
//   );
// };

// export default Page;

import React, { useEffect } from 'react'
import {Fireworks} from 'fireworks-js'

const Page = () => {
  useEffect(() =>{
    const container = document.querySelector('.container');
    const fireworks = new Fireworks(container,{})

    fireworks.start()
  },[])
  return (
    <div >
      <div className='container bg-transparent relative w-full h-screen z-[10]'></div>
      <div className='absolute z-100 top-0 left-0 w-full'>
      <p className='bg-transparent'>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p className='bg-red-500'>hello</p>
      <p className='bg-red-500'>hello</p>
      <p className='bg-red-500'>hello</p>
      <p className='bg-red-500'>hello</p>
      <p className='bg-red-500'>hello</p>
      <p className='bg-red-500'>hello</p>
      <p className='bg-red-500'>hello</p>
      <p className='bg-red-500'>hello</p>
      <p className='bg-red-500'>hello</p>
      <p>hello</p>
      <p>hello</p>

      </div>
    </div>
  )
}

export default Page
