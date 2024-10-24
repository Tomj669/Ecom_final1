import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import TabWithSubjects from "./TabWithSubjects"
  const top = { 
    'subject': ['Web Development', 'Finance', 'Music', 'Health', 'Education'],
    
    'Web Development': ['React', 'MongoDB', 'Web3', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
    
    'Finance': ['Investing', 'Stock Market', 'Cryptocurrency', 'Personal Finance', 'Economics'],
    
    'Music': ['Classical', 'Rock', 'Jazz', 'Electronic', 'Hip-hop', 'Pop'],
    
    'Health': ['Nutrition', 'Exercise', 'Mental Health', 'Yoga', 'Medicine'],
    
    'Education': ['E-learning', 'STEM', 'Languages', 'Teaching', 'Higher Education']
  };
  

  export default function MobileAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full sm:hidden px-4 ">
        {top.subject.map((subject,index)=>(<div>
            <AccordionItem value={subject}>
          <AccordionTrigger>{subject}</AccordionTrigger>
          <AccordionContent className='pt-4'>
          <TabWithSubjects topics={top[subject]}></TabWithSubjects>
          </AccordionContent>
        </AccordionItem>


        </div>))}
   
      
      </Accordion>
    )
  }
  