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


const sections = [
    { title: "Introduction", content: "A brief overview of the course, its objectives, and structure. Duration: 5m." },
    { title: "Section 1: Getting Started", content: "This section covers the basics of setting up your development environment. Duration: 15m." },
    { title: "Section 2: Core Concepts", content: "Learn the key concepts that are foundational to understanding the subject. Duration: 20m." },
    { title: "Section 3: Advanced Techniques", content: "Dive deeper into more complex topics and techniques. Duration: 25m." },
    { title: "Section 4: Practical Applications", content: "Explore real-world examples and case studies to solidify your knowledge. Duration: 30m." },
    { title: "Section 5: Debugging and Testing", content: "Learn how to debug your code and test your solutions effectively. Duration: 10m." },
    { title: "Section 6: Optimization", content: "Techniques to optimize your code for better performance. Duration: 20m." },
    { title: "Section 7: Final Project", content: "Apply everything you've learned in this final hands-on project. Duration: 35m." },
    { title: "Conclusion and Next Steps", content: "A summary of the course and suggestions for further learning. Duration: 10m." }
]

var intro = 'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps'

export default function CoursPage (data) {
    const dispatch = useDispatch()
    console.log(data)
    return (
        <div className="bg-gray-100">

            {/* Desktop View */}
            <div className='bg-zinc-800 p-6 px-12 flex justify-between max-md:hidden'>
                <div className='text-white flex flex-col gap-4'>
                    <CourseBreadcrumb />
                    <div className='text-white text-[36px] font-bold leading-tight'>
                        The Complete 2024 Web Development Bootcamp
                    </div>
                    <div className='text-gray-300 text-[22px] mb-2'>
                        {intro}
                    </div>
                    <div className='flex items-center gap-2 text-lg'>
                        <ReviewStar data={2} />
                        <span className='text-blue-400'>(12,424 ratings)</span>
                        <span className='text-white'>• 1313 Students</span>
                    </div>
                    <div className="text-white text-lg">
                        Created by Author
                    </div>
                    <div className='flex gap-2 items-center text-lg text-white'>
                        English <Globe size={16} />
                    </div>
                    <div className='font-bold text-[30px] mt-2'>
                        $299
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
                    The Complete 2024 Web Development Bootcamp
                </div>
                <div className='text-gray-700 text-[20px] mb-2'>
                    {intro}
                </div>
                <div className='flex items-center gap-2 text-lg'>
                    <ReviewStar data={2} />
                    <span className='text-blue-700'>(12,424 ratings)</span>
                    <span>• 1313 Students</span>
                </div>
                <div className="text-gray-700 text-lg">
                    Created by Author
                </div>
                <div className='flex gap-2 items-center text-lg text-gray-700'>
                    English <Globe size={16} />
                </div>
                <div className='font-bold text-[30px] text-gray-800 mt-2'>
                    $299
                </div>
                <div className='flex gap-4 mt-4'>
                    <Button className="bg-purple-800 text-white rounded-lg hover:bg-purple-900">
                        Add to cart
                    </Button>
               
                </div>
            </div>

            <CourseAccordion />

            {/* Requirements Section */}
            <div className='p-4 px-8 bg-white'>
                <div className='font-bold text-[20px] mb-2'>Requirements</div>
                <div className='text-gray-700'>
                    This course is designed for all level of learners interested in acquiring Leadership skills at a junior, middle or senior level.
                    No prior knowledge of the subject is required.
                    Experience or familiarity with examples of leading or managing teams or projects would be helpful to relate to, but it is not a prerequisite.
                </div>
            </div>

            {/* Description Section */}
            <div className='p-4 px-8 bg-white'>
                <div className='font-bold text-[20px] mb-2'>Description</div>
                <div className='text-gray-700'>
                    Leadership is critical to our everyday lives. At work, at home, with colleagues or friends, leadership can be used to create positive situations and experiences wherever you are.
                    <br /><br />
                    Effective leaders in the workplace don’t have to be in management positions—rather they are able to use their leadership skills to help all of their colleagues follow their lead to higher morale and better outcomes for their organization.
                </div>
            </div>

            <AboutInstructor />
            <CourseReview />
        </div>
    )
}
