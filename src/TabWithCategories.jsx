import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import TabWithSubjects from "./TabWithSubjects"
import { useState,useEffect } from "react";
import MobileAccordion from "./MobileAccordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CourseCard from "./CourseCard";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton"


export default function TabWithCategories()
 {
  const [data,setData] = useState()
  const [categories,setCategories] = useState([])
  const [selectedTab,setSelectedTab]=useState();


  useEffect(()=>{ 
    axios.get('http://localhost:7001/')
    .then((resp) => {
      setCategories(resp.data)
      setSelectedTab(resp.data[0])
      console.log(resp.data[0])
    })
    .catch((error) => {
      console.error(error);
    });
  
  },[])

  useEffect(()=>{
    axios.get(`http://localhost:7001/courses/search?category=${selectedTab}`).then((resp)=>{
      
        setData(resp.data.results)
        
      
        console.log(selectedTab + " form ")
      
    })
    
},[selectedTab])  





  return (
    <div>
      
      <MobileAccordion />


       <Tabs value={selectedTab} onValueChange={setSelectedTab} className="max-w-7xl mx-auto max-sm:hidden">
      
      {/* Tab Triggers */}
      <TabsList className="flex justify-start gap-2 ">
        {categories.slice(0,9).map((subject, index) => (
          <TabsTrigger className='text-[20px]' value={subject} key={index}>
            {subject}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content */}
      {categories.map((subject, index) => (
        <TabsContent value={subject} key={index}>

          {(data) ? <div> <Card className='shadow-none border-0'>
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
        </Card> </div> :
        
        <div className="flex justify-between p-4">
        {Array(4).fill().map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>}


           
          
          
          <Button variant='outline' className='mt-[20px] ml-4 border-black rounded-none font-bold'>
            Show all {subject} Courses
          </Button>
        </TabsContent>
      ))}
      
    </Tabs>
      
    </div>
   
  );
}
