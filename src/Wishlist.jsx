import CourseCard from "./CourseCard"
import axios from "axios"
import { useEffect , useState } from "react"
export default function Wishlist(){ 
const [data,setData]=useState()

useEffect(()=>{
    axios.get('http://localhost:7000/courses/search?search=python&sortBy=price')
    .then((resp)=>{
        setData(resp.data) 
        console.log(data)    
    })
    .catch((error)=>{console.log(error)
    })
},[])



    return(<div> 
        <div className="p-4 text-[35px] font-bold"> Your Wishlist </div>
         
        {(data) ? <div className="flex flex-wrap justify-between gap-6 mt-2">  {data.map((data,index)=>(
          <CourseCard  data={data}> </CourseCard>
    ))} </div> : <div> no data  </div>  }
     
        
      


    </div>)
}