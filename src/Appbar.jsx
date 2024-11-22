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

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Avatar,AvatarFallback,AvatarImage } from "./components/ui/avatar"
import CartButton from "./CartButton"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { Heart } from "lucide-react"
import UserDropDownMenu from './UserDropDownMenu'



export default function Appbar(){
  
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)


  console.log(isLoggedIn+'from redux')
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault() // Prevent the default form submission
      navigate(`/search?search=${encodeURIComponent(search)}`)
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
  const [categories,setCategories] = useState( [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Machine Learning',
  ])
  
  useEffect(()=>{ 
    axios.get('http://localhost:7001/')
    .then((resp) => {
      console.log(resp.data);
      setCategories(resp.data)
    })
    .catch((error) => {
      console.error(error);
    });
  
  },[])


    return(<div className="" >
                {/* Desktop */}
            <div className="flex justify-between shadow-md p-2 max-md:hidden  " >
                <div onClick={()=>{navigate('/')}}className="min-w-[80px] p-2 ">
                    <img src={logoimage} alt="" /> 
                </div>
                <DropdownMenu modal= {false}>
                  <DropdownMenuTrigger><Button variant='ghost'  className='wrapper-button  hover:bg-white hover:text-purple-800'>Category</Button></DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className='border rounded-none mt-1'>
                   
                   
                                <div className="w-[200px]  ">
                        {categories.map((cat,index)=>(<div> <Button onClick={()=>{navigate('/search?category='+cat)}}  variant='ghost'> {cat} </Button></div>))}
                        
                        
                        </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Input onKeyDown={handleKeyDown} value={search} onChange={(e)=>{setSearch(e.target.value)}} variant='ghost'  className='rounded-full bg-gray-100 border-black' placeholder='Search for Anything'></Input>
                
                
                <div className="flex  "> 
                <Button  onClick={()=>{navigate('/instructor')}} variant='ghost'  className='wrapper-button  hover:bg-white hover:text-purple-800'>Instructor</Button>
                {(isLoggedIn) ?  <Button  onClick={()=>{navigate('/myLearning')}} variant='ghost'  className='wrapper-button  hover:bg-white hover:text-purple-800'>My Learnings</Button> : <div> </div>}
                <CartButton  cartLength={cart.items.length}> </CartButton>
                
                  <Button  className=" hover:bg-white mr-4 mt-[3px]" variant='ghost'> 
                  <Heart className="self-baseline"></Heart>

                  </Button>
                

                <div> {(isLoggedIn) ? <div >
                  <UserDropDownMenu/>
                
                                
                  
                    </div> :    <div className="flex">
                <Button  onClick={()=>{navigate('/login')}}variant='ghost'  className='wrapper-button  border rounded-[0px] hover:text-black font-bold'> Login </Button>
                <Button  onClick={()=>{navigate('/signup')}}variant='ghost'  className='wrapper-button ml-2 border rounded-[0px] hover:text-black font-bold'> Signup</Button>
 </div>}

                </div>

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