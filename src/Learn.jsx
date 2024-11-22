import { useParams } from "react-router-dom"

export default function Learn(){ 
    const {courseId} = useParams()
    return(<div> 
        Learn{courseId}
    </div>)
}