import ReviewStar from "./RatingStar"
import { Button } from "./components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Add_cart,Remove_cart } from "./redux/cartSlice"


import { useDispatch ,useSelector} from "react-redux"
export default function CartCourseCard({data}){
   
    const dispatch=useDispatch()
    
    return(<div className="flex border-b-2 ml-4 max-sm:ml-0 justify-between p-1 "> 
                <div className="">

                <div className="p-4 min-w-[250px] min-h-[150px] max-sm:hidden"> 
                            <img className="w-[250px] h-[150px] " src="./src/assets/CC.jpeg" alt="" />

                    </div> 

                    {/* Desktop caourse pic */}
                    <div className="p-4 min-w-fit min-h-fit sm:hidden"> 
                 
                            <img className="max-w-[75px] max-h-[75px] " src="./src/assets/CC.jpeg" alt="" />
                    
                    </div>

                    
                </div>
                

                    <div className=" p-2 w-full     "> 
                                <div className="flex justify-between">
                                <div className="font-bold text-[20px]"> {data.courseName}</div>
                                <div  className=" font-bold mr-2  ">  ${data.price}</div>
                 </div>
                                
                                
                                
                                <div className='flex text-base '> <div className="font-bold text-[14px] "> {data.rating} </div><ReviewStar  data={data.rating}/> </div>
                                <div className='text-[12px] text-zinc-700'> {data.level} . <span> {data.lectures} Lectures</span></div>
                                <div onClick={()=>{dispatch(Remove_cart(data)); console.log(data)}} className="text-blue-600 w-fit cursor-pointer"> Remove</div>
                        </div>
                        {/* mobile check out button  */}
                      
                       

    </div>)
}