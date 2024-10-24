var logoimage='https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg'
import { Button } from "./components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart,Search} from "lucide-react"
import { useNavigate } from "react-router-dom"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  
import Sidebar from "./Sidebar"
const categories = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Machine Learning',
    'Artificial Intelligence',
    'Cloud Computing',
    'Cybersecurity',
    'DevOps',
    'Blockchain',
  ];
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Avatar,AvatarFallback,AvatarImage } from "@radix-ui/react-avatar"
import CartButton from "./CartButton"
import { useSelector } from "react-redux"
import { useState } from "react"


export default function Appbar(){
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault() // Prevent the default form submission
      navigate(`/search?query=${encodeURIComponent(search)}`)
    }
  }

  const handlecategory = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault() // Prevent the default form submission
      navigate(`/search?query=${encodeURIComponent(category)}`)
    }
  }
  
  
  const [search,setSearch]=useState()
  const navigate = useNavigate()
  const cart = useSelector((state)=>state.cart)
  


    return(<div className="" >
                {/* Desktop */}
            <div className="flex justify-between shadow-md p-2 max-md:hidden  " >
                <div onClick={()=>{navigate('/')}}className="min-w-[80px] p-2 ">
                    <img src={logoimage} alt="" /> 
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger><Button variant='ghost'  className='wrapper-button  hover:bg-white hover:text-purple-800'>Category</Button></DropdownMenuTrigger>
                  <DropdownMenuContent>
                   
                   
                                <div className="w-[200px]  ">
                        {categories.map((cat,index)=>(<div> <Button onClick={()=>{navigate('/search')}}  variant='ghost'> {cat} </Button></div>))}
                        
                        
                        </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <NavigationMenu >

</NavigationMenu>

                <Input onKeyDown={handleKeyDown} value={search} onChange={(e)=>{setSearch(e.target.value)}} variant='ghost'  className='rounded-full bg-gray-100 border-black' placeholder='Search for Anything'></Input>
                <Button  onClick={()=>{navigate('/instructor')}} variant='ghost'  className='wrapper-button  hover:bg-white hover:text-purple-800'>Instructor</Button>
                <CartButton  cartLength={cart.items.length}> </CartButton>
                <div className="flex">
                <Button  onClick={()=>{navigate('/login')}}variant='ghost'  className='wrapper-button  border rounded-[0px] hover:text-black font-bold'> Login </Button>
                <Button  onClick={()=>{navigate('/signup')}}variant='ghost'  className='wrapper-button ml-2 border rounded-[0px] hover:text-black font-bold'> Signup</Button>
                
                                </div>
                
          
            </div>

                {/* Mobile */}

          
             <div className="flex justify-between shadow-md p-2 md:hidden">
                <Sidebar></Sidebar>
                <div  onClick={()=>{navigate('/')}} className="min-w-[80px] p-2 ">
                    <img src={logoimage} alt="" /> 
                </div>
                <div>
                <CartButton  cartLength={cart.items.length}> </CartButton>
                <Button variant='ghost'  className='wrapper-button  hover:bg-white hover:text-purple-800'> <Search /> </Button>
                     </div>
                
            </div>




    </div>
    
    )
}