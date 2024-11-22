import CourseBreadcrumb from './CourseBreadcrumb'
import ReviewStar from './RatingStar'
import { Button } from './components/ui/button'
import { Globe } from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import AboutInstructor from './AboutInstructor'
import CourseReview from './CourseReview'
import CourseAccordion from './CourseAccordion'
import { Add_cart } from './redux/cartSlice'
import { useDispatch } from 'react-redux'
import React ,{ useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



var intro = 'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps'
 
export default function CoursPage () {
    const dispatch = useDispatch()
    const [data,setData] = useState()

    const {courseId} = useParams()
    useEffect(()=>{      
        axios.get(`http://localhost:7000/course/${courseId}`).then((resp)=>(setData(resp.data)))

    },[courseId]) 
    console.log(courseId)
    return (<> 
     {(data)?<div>     <div className="bg-gray-100">
            
                 
            {/* Desktop View */}
            <div className='bg-zinc-800 p-6 px-12 flex justify-between max-md:hidden'>
                <div className='text-white flex flex-col gap-4'>
              
                    <div className='text-white text-[36px] font-bold leading-tight'>
                        {data.title}
                    </div>
                    <div className='text-gray-300 text-[22px] mb-2'>
                    {data.intro}
                    </div>
                    <div className='flex items-center gap-2 text-lg'>
                        <ReviewStar data={data.averageRating} />
                        <span className='text-blue-400'>({data.reviews.length} ratings)</span>
                        <span className='text-white'>• 1313 Students FROM DB REQ </span>
                    </div>
                    <div className="text-white text-lg">
                        Created by   {data.instructorId.name}
                    </div>
                 
                
                    <div className='font-bold text-[30px] mt-2'>
                        $ {data.price}
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='w-[300px] h-[200px] rounded overflow-hidden'>
                        <img src="./src/assets/CC.jpeg" alt="Course Cover" className="w-full h-full object-cover" />
                    </div>
                    <div className='flex gap-4 mt-6'>
                        <Button  onClick={()=>{dispatch(Add_cart(data))}} className="bg-purple-800 rounded-none hover:bg-purple-900 ">
                            Add to cart
                        </Button>
                    
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className='p-4 px-8 flex flex-col gap-4 md:hidden bg-white'>
                <div className='flex justify-center'>
                    <img src="./src/assets/CC.jpeg" alt="Course Cover" className="rounded-lg w-full object-cover" />
                </div>
                <div className='text-black text-[30px] font-bold leading-tight'>
                    {data.title}
                </div>
                <div className='text-gray-700 text-[20px] mb-2'>
                    {data.intro}
                </div>
                <div className='flex items-center gap-2 text-lg'>
                    <ReviewStar data={2} />
                    <span className='text-blue-700'>(12,424 ratings) TO BE ADDED TO DB !!</span>
                    <span>• 1313 Students TO BE ADDED TO DB !!</span>
                </div>
                <div className="text-gray-700 text-lg">
                    Created by Author
                </div>
                <div className="text-gray-700 text-lg">
                   {data.instructorId.name}
                </div>
                <div className='flex gap-2 items-center text-lg text-gray-700'>
                    English TO BE ADDED TO DB !!!  <Globe size={16} />
                </div>
                <div className='font-bold text-[30px] text-gray-800 mt-2'>
                    ${data.price}
                </div>
                <div className='flex gap-4 mt-4'>
                    <Button className="bg-purple-800 text-white rounded-lg hover:bg-purple-900">
                        Add to cart
                    </Button>
               
                </div>
            </div>

            <CourseAccordion data ={data.sections} />

            {/* Requirements Section */}
            <div className='p-4 px-8 bg-white'>
                <div className='font-bold text-[20px] mb-2'>Requirements</div>
                <div className='text-gray-700'>
                    {data.requirements}
                    
                </div>
            </div>

            {/* Description Section */}
            <div className='p-4 px-8 bg-white'>
                <div className='font-bold text-[20px] mb-2'>Description</div>
                <div className='text-gray-700'>
                  {data.description}
                </div>
            </div>

            <AboutInstructor data = {data} />
            <CourseReview data={data.reviews} averageRating={data.averageRating} />
        </div>  </div> : <div> no data ! </div> }
    </>
       
    
    )
}
