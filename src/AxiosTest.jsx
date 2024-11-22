import axios from 'axios'
import { useEffect, useState } from 'react'
import Axioscard from './AxiosCard'
import CourseCard from './CourseCard'
import {Card} from './components/ui/card'
import { Skeleton } from "./components/ui/skeleton"
 
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from './components/ui/carousel'

export default function AxiosTest(){
    
const [data,setData] = useState()

    useEffect(()=>{
        axios.get('http://localhost:1000/courses').then((resp)=>{
            console.log(resp.data)
            setData(resp.data)
            console.log(resp.data)
        })
        
    },[])
    
return(<div> 

    {(data) ? <div> {data.map((course,index)=>(
        <div> {course.title}</div>
       

    ))}  

<Axioscard data = {data}/>   


<Card className='shadow-none border-0'>
                  <Carousel className="w-full px-2 ">
                <CarouselContent className="-ml-1">
                {data.map((data,index)=>(
                  <CarouselItem className=" pl-1 basis-1/4 max-lg:basis-1/3 max-md:basis-1/2 max-sm:basis-10/12">
                    <div className="py-2"> <CourseCard data={data}> </CourseCard></div>
                    </CarouselItem>
            ))}  
                </CarouselContent>
                <CarouselPrevious  className='ml-10 bg-zinc-950 text-white hover:bg-zinc-950 hover:text-white max-sm:hidden' />
                <CarouselNext className='mr-10  bg-zinc-950 text-white hover:bg-zinc-950 hover:text-white  max-sm:hidden' />
              </Carousel>
        </Card>

    

    
     </div> : <div>

     <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
        hi
        
        
        
        
        
          </div> }
</div>)

}