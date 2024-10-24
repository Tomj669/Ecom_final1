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
const reviewData=[
  {
    "username": "learner123",
    "review": "Great course! The content was well-organized, and the instructor explained everything clearly.",
    "course": "Web Development Bootcamp"
  },
  {
    "username": "codeMaster87",
    "review": "Loved the hands-on projects. Helped me build my portfolio!",
    "course": "JavaScript for Beginners"
  },
  {
    "username": "designPro",
    "review": "Excellent course on UI/UX design. Highly recommend for aspiring designers.",
    "course": "UI/UX Design Fundamentals"
  },
  {
    "username": "techSavvy91",
    "review": "The pace was a bit fast for me, but overall I learned a lot.",
    "course": "Data Structures and Algorithms"
  },
  {
    "username": "pythonista7",
    "review": "The best Python course out there. Very practical and easy to follow.",
    "course": "Python Programming Masterclass"
  },
  {
    "username": "aiGeek99",
    "review": "Fantastic introduction to AI. The real-world examples were super helpful.",
    "course": "Introduction to Artificial Intelligence"
  },
  {
    "username": "devQueen",
    "review": "I enjoyed the course, but I wish there were more advanced topics.",
    "course": "Full Stack Development"
  },
  {
    "username": "jsWizard101",
    "review": "Great for beginners, but intermediate coders might find it too basic.",
    "course": "React for Beginners"
  },
  {
    "username": "mlGenius",
    "review": "Amazing depth and great real-life use cases.",
    "course": "Machine Learning A-Z"
  },
  {
    "username": "frontendGuru",
    "review": "Loved the course! CSS Grid and Flexbox were explained really well.",
    "course": "Advanced CSS and Sass"
  }
]


export default function Reviews() {
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


