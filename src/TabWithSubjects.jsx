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

const data=[
  {
    "courseName": "Web Development Bootcamp",
    "teacher": "John Doe",
    "price": 199.99,
    "rating": 2.5
  },
  {
    "courseName": "JavaScript for Beginners",
    "teacher": "Jane Smith",
    "price": 149.99,
    "rating": 4.5
  },
  {
    "courseName": "UI/UX Design Fundamentals",
    "teacher": "Sara Lee",
    "price": 129.99,
    "rating": 4.7
  },
  {
    "courseName": "Data Structures and Algorithms",
    "teacher": "Mark Brown",
    "price": 179.99,
    "rating": 4.6
  },
  {
    "courseName": "Python Programming Masterclass",
    "teacher": "Emily Davis",
    "price": 159.99,
    "rating": 4.9
  },
  {
    "courseName": "Introduction to Artificial Intelligence",
    "teacher": "Alan Turing",
    "price": 249.99,
    "rating": 4.4
  },
  {
    "courseName": "Full Stack Development",
    "teacher": "Alex Johnson",
    "price": 199.99,
    "rating": 4.3
  },
  {
    "courseName": "React for Beginners",
    "teacher": "Lisa White",
    "price": 129.99,
    "rating": 4.2
  },
  {
    "courseName": "Machine Learning A-Z",
    "teacher": "Michael Nguyen",
    "price": 299.99,
    "rating": 4.9
  },
  {
    "courseName": "Advanced CSS and Sass",
    "teacher": "Karen Wilson",
    "price": 109.99,
    "rating": 4.5
  }
]



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
