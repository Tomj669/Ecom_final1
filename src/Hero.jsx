var headtext='Sale ends today'
var partext='Start exploring new possibilities for your future. Learn from just ₹449 now.'

const heroData=[{"headtext":'Sale ends today','partext':'Start exploring new possibilities for your future. Learn from just ₹449 now','image':'/public/images/hero.jpg','imageMob':'./src/assets/hero_mob.jpg'},
{"headtext":'Skills that drive you forward','partext':'Technology and the world of work change fast with us, you’re faster. Get the skills to achieve goals and stay competitive.','image':'./src/assets/hero2.jpg','imageMob':'./src/assets/hero2_mob.png'}]

import {ChevronLeft, ChevronRight} from 'lucide-react'
import { Button } from "./components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react'
export default function Hero(){
  var pic=["./public/hero3.jpg","./src/assets/hero2.png"]
  const [index,setIndex] =useState(0)


    return(
    
    
    <div>
        {/* Desktop */}

           <div className="relative  max-md:hidden overflow-hidden">
        <img
          src={heroData[index].image}
          alt="Hero image"
          className="w-full h-auto"
        />
        <div className="absolute  inset-0 flex items-center ml-6 p-4">
          <div className="bg-white shadow-md p-4 sm:p-6 md:p-8 max-w-[450%] sm:max-w-[40%] md:max-w-[40%]">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
              {heroData[index].headtext}
            </h2>
            <p className="text-xs sm:text-sm md:text-base">
              {heroData[index].partext}
            </p>
          </div>
        </div>
        <div className='px-4 absolute top-[44%] w-full flex justify-between'> 
        

        
  

        </div>
      </div> 


                {/* Mobile */}
    <div className="relative overflow-hidden md:hidden">
      <div className="flex flex-nowrap">
        <div className="w-screen flex-shrink-0">
          <div className="h-[250px] relative">
            <img
              className="w-full h-full object-cover"
              src={heroData[index].imageMob}
              alt="Hero image"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 px-4 w-full">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
        {headtext}
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
        {partext}
        </p>
      </div>
{/*       <div className='px-4 absolute top-[30%] w-full flex justify-between '> 
              <Button className='rounded-full  w-12 h-12'><ChevronLeft className='scale-150'/></Button>
              <Button className='rounded-full  w-12 h-12'><ChevronRight className='scale-150'/></Button>
        </div> */}
      
    </div>
    <div className=' md:hidden mt-4 px-4'> <Input  variant='ghost'  className='rounded-[0px] max-w-[777px] bg-gray-100 border-black' placeholder='Search for Anything'></Input></div>
    
   

    </div>
     
       
        
 
    
    )
}