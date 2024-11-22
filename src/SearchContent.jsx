import { useEffect,useState } from "react"
import SearchCourseCard from "./SearchCourseCard"
import axios from "axios"

export default function SearchContent({data}){

console.log(data)

    return(<div > 
      {(data) ? <div>
        {data.map((data,index)=>(<div> 
                <SearchCourseCard data={data} />
                
            </div>))}
        
            </div> : <div> no data  </div> }
        
        
            

        
    </div>)
}