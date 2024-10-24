
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
    "rating": 4.8
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

export default function SearchedCourse() {
  return (
    <div className="mb-20">
        <div className="text-[35px] font-bold ml-4">
    Because you searched for  <span className="text-blue-800"> "piano"</span>
  </div>
 
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
    </div>
  )
}



