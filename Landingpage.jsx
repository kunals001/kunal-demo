import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 text-white">
        <div className="textstructer mt-52 px-20 ">
            {["we create", "eye-opening", "presentations"].map((item, index)=>{
                return (
                <div className="markers ">
                  <div className="w-fit flex ">
                    {index === 1 && (<div className="w-[9vw] mr-[0.5vw] h-[5.7vw] relative -top-[1.1vw] bg-red-500 rounded-md"></div>)}
                    <h1 className="  uppercase text-[9vw] leading-[7vw] tracking-tighter font-['Founders_Grotesk'] font-bold">
                      {item}</h1>
                      </div>
                </div>
                );
            })}
        </div>

        <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-10">
          {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>
          <p className="text-md uppercase font-light tracking-tight leading-none">{item}</p>)}

          <div className="start flex px-4 py-2 items-center gap-5 ">
          <div className="px-4 py-2 border-[2px] border-zinc-500 rounded-full uppercase font-light text-sm">
            start the project</div>
            <div className="w-10 h-10 rounded-full border-[2px] border-zinc-500 flex justify-center items-center">
              <span className="rotate-[45deg]">
            <FaArrowUpLong />
              </span>
            </div>
        </div></div> 
    </div>
  )
}

export default Landingpage