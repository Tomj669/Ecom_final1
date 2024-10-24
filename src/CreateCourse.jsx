import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, Upload, Trash2 } from "lucide-react"

export default function CreateCourse() {
  const [sections, setSections] = useState([{ id: 1, title: '', videoUrl: null }])

  const addSection = () => {
    const newSection = {
      id: sections.length + 1,
      title: '',
      videoUrl: null
    }
    setSections([...sections, newSection])
  }

  const updateSectionTitle = (id, title) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, title } : section
    ))
  }

  const handleVideoUpload = async (id) => {
    // This is a placeholder function. In a real application, you would handle the file upload here.
    // For now, we'll just simulate an upload by setting a dummy URL after a short delay.
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSections(sections.map(section => 
      section.id === id ? { ...section, videoUrl: `https://example.com/video${id}.mp4` } : section
    ))
  }

  const removeSection = (id) => {
    setSections(sections.filter(section => section.id !== id))
  }

  return (<div> 
    <div className="text-[35px] font-bold px-4"> Create a new course </div>
     <form className="space-y-6 p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" className="rounded-md" placeholder="Enter course title" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input id="category" className="rounded-md" placeholder="Enter course category" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="introduction">Introduction</Label>
          <Textarea
            id="introduction"
            className="rounded-md"
            placeholder="Write a brief introduction"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            className="rounded-md"
            placeholder="Provide a detailed description"
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="requirements">Requirements</Label>
          <Textarea
            id="requirements"
            className="rounded-md"
            placeholder="List course requirements"
            rows={3}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sections</h3>
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="space-y-2 border p-4 rounded-md">
              <div className="flex justify-between items-center">
              
           
              </div>
              <div className="flex items-center space-x-2">
                <Input 
                  id={`section${section.id}`} 
                  className="rounded-md flex-grow" 
                  placeholder="Enter section title"
                  value={section.title}
                  onChange={(e) => updateSectionTitle(section.id, e.target.value)}
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex items-center space-x-2"
                  onClick={() => handleVideoUpload(section.id)}
                >
                  <Upload className="h-4 w-4" />
                  <span>{section.videoUrl ? 'Video Uploaded' : 'Upload Video'}</span>
                </Button>
                <Button 
                  type="button" 
                  variant="destructive" 
                  size="icon"
                  onClick={() => removeSection(section.id)}
                  disabled={sections.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove Section</span>
                </Button>
              </div>
              {section.videoUrl && (
                <p className="text-sm text-muted-foreground">Video uploaded: {section.videoUrl}</p>
              )}
            </div>
          ))}
          <Button 
            type="button" 
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={addSection}
          >
            <PlusCircle className="h-4 w-4" />
            <span>Add Section</span>
          </Button>
        </div>
      </div>

      <Button className='bg-purplr-600'>Create Course</Button>
    </form>

  </div>
   
  )
}