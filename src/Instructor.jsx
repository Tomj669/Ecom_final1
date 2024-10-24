import { useNavigate } from 'react-router-dom'
import {Button} from './components/ui/button'
export default function Instructor (){
    const navigate=useNavigate()
    return(<div className="px-4 ">
        <div className="text-[35px] font-bold"> Manage your  Courses</div>
        <div> You have no courses yet ! </div>
        <Button   onClick={()=>{navigate('/CreateCourse')}} className='bg-purple-600 hover:bg-purple-700 rounded-none mt-4'> Create a new course </Button>
        </div>)
}