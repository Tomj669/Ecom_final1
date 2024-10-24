import  TabWithCategories  from "./TabWithCategories"
import Tab2 from "./TabWithSubjects"
import { Tabstwo } from "./components/ui/tabs2"
import { Button } from "./components/ui/button"
export default function Cards({data}){
    return(
    
    <div className="">
        <div className="  p-4  ">
<h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
            All the skills you need in one place
            </h2>
        <p className="text-sm sm:text-base md:text-lg">From critical skills to technical topics, Udemy supports your professional development.</p>

        </div>
        <TabWithCategories/>
        
      
        
    </div>)
}