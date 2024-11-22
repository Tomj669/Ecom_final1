import ReviewStar from "./RatingStar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import React, { useState } from 'react';
import { Heart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "./components/ui/button";
import { Add_cart,Remove_cart } from "./redux/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




export default function CourseCard({data}) {
  const dispatch=useDispatch()
  const cart = useSelector((state)=> state.cart)
  const navigate = useNavigate()
 
  
 
    return (
     
      <HoverCard openDelay={0} closeDelay={0}  >
        <HoverCardTrigger asChild>
        <div className="border rounded-lg  shadow-xl hover:shadow-md transition-shadow duration-300 cursor-pointer">
      <div  onClick={()=>{navigate(`/course/${data._id}`)}} className="aspect-video overflow-hidden rounded-t-lg">
        <img
          className="h-full w-full object-cover"
          src="/src/assets/CC.jpeg"
          alt={data.title}
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg line-clamp-2 h-[55px] w-[250px]">{data.title}</h3>
        <p className="text-sm text-gray-600">{data.instructorId?.name}</p>
        <div className="flex items-center space-x-1">
          <span className="text-sm font-medium">{data.averageRating}</span>
          <ReviewStar data={data.averageRating || 0} />
        </div>
            <div className="flex justify-between pr-2"> <p className="font-bold text-lg">${data.price}</p> 
            <div className="flex gap-4">
              
            <Button  className=' rounded-full  w-9 h-9 bg-white text-gray-800 border border-gray-800 ' ><Heart strokeWidth={2} /> </Button> 
            <Button onClick={()=>{dispatch(Add_cart(data)); console.log(cart.items)} } className='bg-purple-700 rounded-none hover:bg-purple-800' > Add to cart </Button>
            </div>
            

         </div>
        
        
      </div>
    </div>
        </HoverCardTrigger>
        <HoverCardContent 
          side="right" 
          align="start" 
          className=" bg-white border rounded-md shadow-lg relative"
          sideOffset={10}
        >

          <div className="absolute w-3 h-3 bg-white border-l border-b" />
          <p className="text-sm text-gray-700 relative z-10">
            {data.title}
          </p>

        </HoverCardContent>
      </HoverCard>
   
    );
  }
  