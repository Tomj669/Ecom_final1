import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import TabWithSubjects from "./TabWithSubjects"
import { useState } from "react";
import MobileAccordion from "./MobileAccordion";




const top = { 
  'subject': ['Web Development', 'Finance', 'Music', 'Health', 'Education'],
  
  'Web Development': ['React', 'MongoDB', 'Web3', 'Node.js', 'JavaScript', ],
  
  'Finance': ['Investing', 'Stock Market', 'Cryptocurrency', 'Personal Finance',],
  
  'Music': ['Classical', 'Rock', 'Jazz', 'Electronic', 'Hip-hop',],
  
  'Health': ['Nutrition', 'Exercise', 'Mental Health', 'Yoga',],
  
  'Education': ['E-learning', 'STEM', 'Languages', 'Teaching',]
};


export default function TabWithCategories()
 {
  const defaultTab=top.subject[0]
const [selectedTab,setSelectedTab]=useState(defaultTab);
  return (
    <div>
      
      <MobileAccordion />


       <Tabs defaultValue={selectedTab} className="max-w-7xl mx-auto max-sm:hidden">
      
      {/* Tab Triggers */}
      <TabsList className="flex justify-start gap-2 mb-[50px]">
        {top.subject.map((subject, index) => (
          <TabsTrigger className='text-[20px]' value={subject} key={index}>
            {subject}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content */}
      {top.subject.map((subject, index) => (
        <TabsContent value={subject} key={index}>
          <TabWithSubjects topics={top[subject]} /> {/* Pass subjects dynamically */}
          
          <Button variant='outline' className='mt-[20px] ml-4 border-black rounded-none font-bold'>
            Show all {subject} Courses
          </Button>
        </TabsContent>
      ))}
      
    </Tabs>
      
    </div>
   
  );
}
