import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion'

const sections = [
  { title: "Introduction", content: "A brief overview of the course, its objectives, and structure. Duration: 5m." },
  { title: "Section 1: Getting Started", content: "This section covers the basics of setting up your development environment. Duration: 15m." },
  { title: "Section 2: Core Concepts", content: "Learn the key concepts that are foundational to understanding the subject. Duration: 20m." },
  { title: "Section 3: Advanced Techniques", content: "Dive deeper into more complex topics and techniques. Duration: 25m." },
  { title: "Section 4: Practical Applications", content: "Explore real-world examples and case studies to solidify your knowledge. Duration: 30m." },
  { title: "Section 5: Debugging and Testing", content: "Learn how to debug your code and test your solutions effectively. Duration: 10m." },
  { title: "Section 6: Optimization", content: "Techniques to optimize your code for better performance. Duration: 20m." },
  { title: "Section 7: Final Project", content: "Apply everything you've learned in this final hands-on project. Duration: 35m." },
  { title: "Conclusion and Next Steps", content: "A summary of the course and suggestions for further learning. Duration: 10m." }
]

export default function CourseAccordion({data}) {
  
  return (

    <div className='p-4 px-8'>
      <div className='font-bold text-[20px]'>Course content</div>
      <div className='mb-4'>9 sections • 9 lectures • 1h 45m total length FROM BD</div>
      
      <Accordion type="multiple" collapsible className="border border-b-0 px-4">
        {data.map((section, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='font-bold'>{section.title}</AccordionTrigger>
            <AccordionContent>{section.videoUrl}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
