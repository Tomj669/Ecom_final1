import { useState } from "react"

export default function Axioscard(data){
    const [course,useCourse]=useState(data)
    return(<div style={{color:"green"}} > 
       AOIHSFOAKSFN: LAKSFN:L KNSA:LN
       {(data) ? <div> {data.data[1].title} </div> : <div> hello</div>}
       
    </div>)

}