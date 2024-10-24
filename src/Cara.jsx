import * as React from "react"
import { Button } from "./components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Cara({subject}) {
  return (
    <Carousel className="w-full px-2">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/4 max-lg:basis-1/3 max-md:basis-1/2 max-sm:basis-10/12">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{subject + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  className='ml-10 bg-zinc-950 text-white hover:bg-zinc-950 hover:text-white max-sm:hidden' />
      <CarouselNext className='mr-10  bg-zinc-950 text-white hover:bg-zinc-950 hover:text-white  max-sm:hidden' />
      
    </Carousel>
  )
}
