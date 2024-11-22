
export default function AboutInstructor({data}){
    return(
    
    
    <div className="p-4 px-8 ">
        
        <div className="font-bold text-[20px]">
        About Instructor
        </div>
        <div className="font-bold">
        {data.instructorId.name}
        </div>
        <div className="font-bold">{data.instructorId.bio} </div>
      

        <div className=" w-24 h-24 rounded-full mt-2 bg bg-green-400"> 
        <img  className=' rounded-full' src="./src/assets/CC.jpeg" alt="" />
         </div>
         <div>
         {data.instructorId.profession} 
         </div>
       
        
        
        
    </div>)
}