
import { useState } from "react"
import CartCourseCard from "./CartCourseCard"
import SearchCourseCard from "./SearchCourseCard"
import { Button } from "./components/ui/button"
import { useDispatch,useSelector } from "react-redux"
export default function CartPage(){
  const dispatch= useDispatch()
  const cart = useSelector((state)=>state.cart)
  const [cartData,setCartData]=useState(cart.items)

    return(<div className=" w-full h-full flex justify-center max-md:block "> 
<div>
    
        <div className="font-bold px-8 max-md:px-5"> 
            <div className="text-[30px] max-md:hidden ">Shopping Cart </div>


            <div className=" text-[16px] font-semibold md:hidden mt-4 " > 
                        Total: <span className="font-bold text-[20px]"> $100 </span>
                     
                        
                        </div>
            
            
            
            </div>
            <div >
                
            <div className="flex max-md:block z-1 ">
                
                        <div>
                        <div className="px-8 max-md:px-5 text-[18px] font-semibold"> {cart.length} course in cart </div>
                        {cart.items.map((data,index)=>(<div> 
                             
                <CartCourseCard data={data} />    
            </div>))}

                        </div>
                        <div className="px-20 text-[18px] font-semibold max-md:hidden"> 
                        Total:
                        <div  className="font-bold text-[35px]">  $ 100 </div>
                        <Button className='bg-purple-700 hover:bg-purple-800 rounded-none w-[250px] mt-2'> Check Out </Button>
                        </div>

                        
            </div>
            {/* Mobile check out button  */}
            <div className="md:hidden fixed w-full bottom-0 p-4 shadow-xl  bg-zinc-200 z-50 " > <Button className='shadow-xl w-full bg-purple-600 rounded-none hover:bg-purple-700'> Check out </Button></div>
          
       
            </div>
         
</div>


    </div>
    
    
    )
}