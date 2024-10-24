import ReviewStar from "./RatingStar"
import {Button} from './components/ui/button'
import { AspectRatio } from "@/components/ui/aspect-ratio"
export default function SearchCourseCard({data}){
    return(<div className="flex border-b-2 ml-4 max-sm:ml-0"> 
         <div className="p-4 min-w-[250px] min-h-[150px] max-sm:hidden"> <img className="w-[250px] h-[150px] " src="./src/assets/CC.jpeg" alt="" /></div> 
        <div className="p-4 min-w-fit min-h-fit sm:hidden"> <img className="w-[75px] h-[75px] " src="./src/assets/CC.jpeg" alt="" /></div>
        <div className=" p-4 max-w-[550px]"> 
            <div className="font-bold text-[20px]"> {data.courseName}</div>
            <div > {data.intro}</div>
            <div className='text-[14px]'> {data.author}</div>
            <div className='flex text-base '> <div className="font-semibold "> {data.rating} </div><ReviewStar  data={data.rating}/> </div>
            <div className='text-[15px]'> {data.level} . <span> {data.lectures} Lectures</span></div>
       
             </div>
             <div  className="py-4 font-bold">  ${data.price}</div>
           

           
        



    </div>)
}