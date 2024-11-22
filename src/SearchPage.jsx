import { useEffect, useState } from "react"
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

  import axios from 'axios'
import SearchCourseCard from "./SearchCourseCard"
  

export default function SearchPage(){
    const location=useLocation();
    const params= new URLSearchParams(location.search)

   
  



 const  [data,setData]=useState([])

    useEffect(() => {
        axios.get(`http://localhost:7000/courses/search?`+params)
            .then((resp) => {
                
                if(JSON.stringify(resp.data)!=JSON.stringify(data)){ 
                    setData(resp.data)
                    
                }
            })
            .catch((error) => {
                console.log('Error searching for courses:', error)
            })
    }, [params]) 

    const [toggelFilter,setToggleFilter]=useState(1)

    const handleFilterToggle = () =>{ 
        if(toggelFilter==0){
            setToggleFilter(1) 
        }else{ setToggleFilter(0)}
        


    }
 

    return(<div className="p-4">
        
        <div className=" max-lg:ml-8  max-sm:ml-4 flex" > 
        
            <Button onClick={()=>{handleFilterToggle()}} variant='ghost' className='  border rounded-none max-lg:hidden '> Filter </Button>

            <MobileFilter  variant='ghost' > Filter </MobileFilter>
            <DropdownMenu>
            <DropdownMenuTrigger> <Button variant='ghost' className='border rounded-none ml-2 '> Sort by  </Button></DropdownMenuTrigger>
            <div className="text-[25px] font-bold ml-[130px] max-md:hidden"> {data.length} reults found"</div>
            <DropdownMenuContent>
            
              
                <DropdownMenuItem>Most Reviewed</DropdownMenuItem>
                <DropdownMenuItem>Most Relavant</DropdownMenuItem>
                <DropdownMenuItem>Highest Rated</DropdownMenuItem>
                <DropdownMenuItem>Newest</DropdownMenuItem>
              
            </DropdownMenuContent>
            </DropdownMenu>
          

           
        </div> 
        <div className="text-[25px] font-bold p-2 sm:px-8 md:hidden"> 100 reults for "{}"</div>
    
        <div className="flex">
            <div>
                
            </div>
            <div className="max-lg:hidden">
            {(toggelFilter==1) ? <SearchMenu /> : <div></div>}
            </div>
            
            {(data) ? <div>
        {data.map((data,index)=>(<div> 
                <SearchCourseCard data={data}/>
                
            </div>))}
        
            </div> : <div> no data  </div> }
              
        </div>
        <PaginationComponent/>
 
    

        
    </div>)
}