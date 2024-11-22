import Cara from "./Cara"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"



import { Card, CardContent } from "@/components/ui/card"
import ReviewCard from "./ReviewCard"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Reviews() {
   const [reviewData,setReviewData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:7000/reviews').then((resp)=>{
     setReviewData(resp.data)
    })

  },[])
  return (
    <div className="mb-20">
        <div className="text-[35px] font-bold ml-4">
    Reviews from our <span className="text-purple-800"> Learners </span>
  </div>
 
  <Carousel className="w-full px-2 ">
      <CarouselContent className="-ml-1">
 
          {reviewData.map((data,index)=>(
        <CarouselItem className="pl-1 basis-1/4 max-lg:basis-1/3 max-md:basis-1/2 max-sm:basis-10/12">
            <div className="p-1">
              <Card className=''>
                <CardContent className="flex aspect-square items-center justify-center p-6">

                  <ReviewCard data={data}></ReviewCard>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
   ))}
          
          
 
        
      </CarouselContent>
      <CarouselPrevious  className='ml-10 bg-zinc-950 text-white hover:bg-zinc-950 hover:text-white max-sm:hidden' />
      <CarouselNext className='mr-10  bg-zinc-950 text-white hover:bg-zinc-950 hover:text-white  max-sm:hidden' />
    </Carousel>
 

    </div>

  )
}


