import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CourseCard from "./CourseCard"





export default function TabWithSubjects({topics}) {
  
   
  return (<div>
    
<Tabs defaultValue={topics[0]} className="max-w-7xl mx-auto   ">
<TabsList className="flex justify-start gap-4 shadow-none border-0 mb-[30px] px-4 overlay-hidden">

    {topics.map((subject,index) => (<div>
      <TabsTrigger className='button-tab  data-[state=active]:bg-zinc-800 data-[state=active]:text-white' value={subject}>{subject}</TabsTrigger>
    </div>))}
      </TabsList>
      {topics.map((subject,index) => (<div>
        <TabsContent value={subject}>
        <Card className='shadow-none border-0 '>
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
      </TabsContent>
    </div>))}
      
    
      
    </Tabs>



  </div>
    
  )
}
