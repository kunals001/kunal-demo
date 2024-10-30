import React from 'react'

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl">
        <h1 className="text-[4vw] font-['Neue Montreal'] leading-[4vw]">Ochi is a strategic presentation agency for 
            forward-thinking businesses that need to raise funds, sell products, 
            explain complex ideas, and hire great people.</h1>

            <div className="border-t-[1px] mt-[4vw] border-[#5c6737] flex ">
                <div className="w-1/2">
                   <h1 className="text-[4.2vw] font-['Neue_Montreal']">Our approach:</h1>
                   <button className="text-[1.3vw] bg-zinc-800 px-[3vw] py-[0.8vw] rounded-full mt-10  text-white uppercase flex items-center gap-[0.5vw]">Read Me
                       <div className="w-[0.7vw] h-[0.7vw] bg-[#fff] rounded-full mt-[3px]"></div>
                   </button>
               </div>
               <div className="w-1/2 h-[70vh] bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] rounded-3xl mt-[2vw] "></div>
            </div>
            

    </div>
  )
}

export default About