import { Link } from 'react-router-dom';
import SearchMenu from './SearchMenu';

import {
  Menu
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."
export default function MobileFilter() {
  return (      
    <div className='lg:hidden'>
          <Sheet className="w-4">
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        className='text-black border rounded-none px-4'
      >
        Filter
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <SearchMenu/>

    </SheetContent>
  </Sheet>
   


    </div>
    
    
  
  )
}