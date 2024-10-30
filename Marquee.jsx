import React from 'react'

function Marquee() {
  return (
    <div className=" w-full py-20 bg-[#004D43] text-white rounded-tl-3xl rounded-tr-3xl">
        <div className="text border-t-2 border-b-2 border-zinc-400 flex gap-10 whitespace-nowrap overflow-hidden">
          <h1 className="text-[24vw] leading-none font-[Founders-Grotesk_X-Condensed] uppercase font-bold -mb-[0.5vw] -mt-[2.5vw]">we are ochi</h1>
          <h1 className="text-[24vw] leading-none font-[Founders-Grotesk_X-Condensed] uppercase font-bold -mb-[0.5vw] -mt-[2.5vw]">we are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee