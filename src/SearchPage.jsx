import { useState } from "react"
import SearchContent from "./SearchContent"
import SearchMenu from "./SearchMenu"
import { Button } from "./components/ui/button"
import MobileFilter from "./MobileFilter"
import Pagination from "./PaginationComponent"
import PaginationComponent from "./PaginationComponent"
import { useLocation } from "react-router-dom"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export default function SearchPage(){
    const location=useLocation();
    const params= new URLSearchParams(location.search)
    const QQ=params.get('query')
    console.log(QQ)

    const [toggelFilter,setToggleFilter]=useState(1)

    const handleFilterToggle = () =>{ 
        if(toggelFilter==0){
            setToggleFilter(1) 
        }else{ setToggleFilter(0)}
    }
  const searchTearm = 'React'

    return(<div className="p-4 ">
        
        <div className=" max-lg:ml-8  max-sm:ml-4 flex" > 
        
            <Button onClick={()=>{handleFilterToggle()}} variant='ghost' className='  border rounded-none max-lg:hidden '> Filter </Button>

            <MobileFilter  variant='ghost' > Filter </MobileFilter>
            <DropdownMenu>
            <DropdownMenuTrigger> <Button variant='ghost' className='border rounded-none ml-2 '> Sort by  </Button></DropdownMenuTrigger>
            <div className="text-[25px] font-bold ml-[130px] max-md:hidden"> 100 reults for "{QQ}"</div>
            <DropdownMenuContent>
            
              
                <DropdownMenuItem>Most Reviewed</DropdownMenuItem>
                <DropdownMenuItem>Most Relavant</DropdownMenuItem>
                <DropdownMenuItem>Highest Rated</DropdownMenuItem>
                <DropdownMenuItem>Newest</DropdownMenuItem>
              
            </DropdownMenuContent>
            </DropdownMenu>
          

           
        </div> 
        <div className="text-[25px] font-bold p-2 sm:px-8 md:hidden"> 100 reults for "{QQ}"</div>
    
        <div className="flex">
            <div>
                
            </div>
            <div className="max-lg:hidden">
            {(toggelFilter==1) ? <SearchMenu /> : <div></div>}
            </div>
            
              <SearchContent/>
              
        </div>
        <PaginationComponent/>
 
    

        
    </div>)
}