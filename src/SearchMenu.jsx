import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Star } from "lucide-react"

export default function SearchMenu() {
  const [priceRange, setPriceRange] = useState([0, 200])

  return (
    <Accordion type="multiple" defaultValue={["price", "category"]} className="md-max:w-full  w-64 overflow-auto">
      <AccordionItem value="price">
        <AccordionTrigger>Price Range</AccordionTrigger>
        <AccordionContent>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={200}
            step={1}
            className="mt-2"
          />
          <div className="flex justify-between mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="category">
        <AccordionTrigger>Category</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-2">
            {["Web Development", "Data Science", "Business", "Design", "Marketing"].map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <label htmlFor={category} className="text-sm">{category}</label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="level">
        <AccordionTrigger>Level</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-2">
            {["Beginner", "Intermediate", "Advanced", "All Levels"].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox id={level} />
                <label htmlFor={level} className="text-sm">{level}</label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="duration">
        <AccordionTrigger>Duration</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-2">
            {["0-2 hours", "3-6 hours", "7-16 hours", "17+ hours"].map((duration) => (
              <div key={duration} className="flex items-center space-x-2">
                <Checkbox id={duration} />
                <label htmlFor={duration} className="text-sm">{duration}</label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="rating">
        <AccordionTrigger>Rating</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-2">
            {[4.5, 4.0, 3.5, 3.0].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox id={`rating-${rating}`} />
                <label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                  {rating}+ <Star className="w-4 h-4 ml-1 fill-yellow-400 text-yellow-400" />
                </label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}