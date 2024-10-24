import { Link } from 'react-router-dom';
import { Accordion,AccordionContent, AccordionItem, AccordionTrigger  } from './components/ui/accordion';
const categories = [
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Cloud Computing',
  'Cybersecurity',
  'DevOps',
  'Blockchain',
];
import {
  Menu
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."
export default function Sidebar() {
  return (       <Sheet className="w-4">
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        size="small"
       
        className='text-black px-1 shrink-0'
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <div>
        Signup
      </div>
      <div>
        Login
      </div>
      <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div>Categories</div>
            </AccordionTrigger>
              {categories.map((cat,index)=>(<AccordionContent> {cat}</AccordionContent>)) }
          </AccordionItem>
        </Accordion>
      <div>
        Instructor
      </div>
    
    
    </SheetContent>
  </Sheet>
   
  )
}