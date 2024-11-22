import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "./components/ui/button";
import {AspectRatio} from './components/ui/aspect-ratio'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom";


export default function MyLearning(){ 
    const[data,setData]=useState();
    const navigate = useNavigate()

    useEffect(()=>{ 
        axios.get('http://localhost:7000/myLearnings',{
            headers:{ 
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImN5YmVyX2tuaWdodCIsImVtYWlsIjoiY3liZXJfa25pZ2h0QGV4YW1wbGUuY29tIiwidXNlcklkIjoiNjczMzdkYTQ3NTg5ZTY5OTY3YWU3MjRmIiwiaWF0IjoxNzMxNDc0MDE4fQ.UPlbJHNri-ESJ9_VZ7V8BZ6j09qqcdI7WrhKe7u7Ybo'
            }
        }).then((resp)=>{ 
            setData(resp.data)
        })

    },[])
    return( <div className="container mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-6">My Learnings</h2>
    {data && data.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={'/src/assets/CC.jpeg'}
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold mb-2 line-clamp-2">
                {course.title}
              </CardTitle>
              <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button onClick={()=>{navigate('/myLearning/learn/'+course._id)}} className="w-full">View Course</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-600">No courses found.</p>
    )}
  </div>)
}