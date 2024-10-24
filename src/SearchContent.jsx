import SearchCourseCard from "./SearchCourseCard"
const data=[
    {
      "courseName": "Web Dev Bootcamp",
      "intro": "Master full-stack development with this comprehensive bootcamp in just a few weeks.",
      "author": "John Doe",
      "rating": 4.8,
      "numberOfRatings": 1500,
      "level": "Beginner",
      "price": 199.99,
      "lectures": 120
    },
    {
      "courseName": "JavaScript Basics",
      "intro": "Learn the fundamentals of JavaScript, from syntax to loops and arrays, in this course.",
      "author": "Jane Smith",
      "rating": 4.5,
      "numberOfRatings": 950,
      "level": "Beginner",
      "price": 99.99,
      "lectures": 80
    },
    {
      "courseName": "UI/UX Design",
      "intro": "Explore key principles of UI/UX design and create beautiful, functional interfaces.",
      "author": "Sara Lee",
      "rating": 4.7,
      "numberOfRatings": 700,
      "level": "Intermediate",
      "price": 129.99,
      "lectures": 95
    },
    {
      "courseName": "Data Structures",
      "intro": "Learn essential data structures and algorithms for software development and interviews.",
      "author": "Mark Brown",
      "rating": 4.6,
      "numberOfRatings": 1100,
      "level": "Advanced",
      "price": 179.99,
      "lectures": 150
    },
    {
      "courseName": "Python Masterclass",
      "intro": "Master Python from basic to advanced topics, including web development and automation.",
      "author": "Emily Davis",
      "rating": 4.9,
      "numberOfRatings": 2300,
      "level": "Intermediate",
      "price": 159.99,
      "lectures": 100
    },
    {
      "courseName": "AI Fundamentals",
      "intro": "Get started with artificial intelligence concepts like machine learning and neural networks.",
      "author": "Alan Turing",
      "rating": 4.4,
      "numberOfRatings": 400,
      "level": "Beginner",
      "price": 249.99,
      "lectures": 60
    },
    {
      "courseName": "Full Stack Dev",
      "intro": "Learn to build web applications from scratch using modern full-stack technologies.",
      "author": "Alex Johnson",
      "rating": 4.3,
      "numberOfRatings": 850,
      "level": "Advanced",
      "price": 199.99,
      "lectures": 180
    },
    {
      "courseName": "React Basics",
      "intro": "Discover the power of React to build dynamic and interactive user interfaces.",
      "author": "Lisa White",
      "rating": 4.2,
      "numberOfRatings": 500,
      "level": "Intermediate",
      "price": 129.99,
      "lectures": 85
    },
    {
      "courseName": "ML with Python",
      "intro": "Learn machine learning concepts using Python and build real-world ML models.",
      "author": "Michael Nguyen",
      "rating": 4.9,
      "numberOfRatings": 2100,
      "level": "Advanced",
      "price": 299.99,
      "lectures": 200
    },
    {
      "courseName": "CSS Mastery",
      "intro": "Master advanced CSS techniques to build responsive, modern web designs.",
      "author": "Karen Wilson",
      "rating": 4.5,
      "numberOfRatings": 600,
      "level": "Intermediate",
      "price": 109.99,
      "lectures": 90
    }
  ]
  
export default function SearchContent(){
    return(<div > 
        
            {data.map((data,index)=>(<div> 
                <SearchCourseCard data={data} />
                
            </div>))}
            

        
    </div>)
}