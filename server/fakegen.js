import {faker} from "@faker-js/faker"
import mongoose from "mongoose"
import { Instructor,Course,User } from "./schema.js"



const data = [
    // Courses for Major
    {
        title: "Advanced Marketing Strategies",
        intro: "Learn cutting-edge marketing techniques for global reach.",
        description: "Explore advanced marketing methodologies to optimize international branding and outreach.",
        category: "Marketing",
        createdBy: new mongoose.Types.ObjectId("671dbbe2de335e3a0b44adff"), // Major's _id
        price: "99.99",
        studentCount: "1500",
        review: []
    },
    {
        title: "Digital Content Creation",
        intro: "Master the essentials of content creation for digital platforms.",
        description: "A complete guide to creating impactful digital content and campaigns.",
        category: "Digital Media",
        createdBy: new mongoose.Types.ObjectId("671dbbe2de335e3a0b44adff"),
        price: "89.99",
        studentCount: "800",
        review: []
    },

    // Courses for Franz
    {
        title: "Regional Leadership",
        intro: "Gain skills to lead regional teams effectively.",
        description: "Strategies and tools for optimizing regional operations and team management.",
        category: "Leadership",
        createdBy: new mongoose.Types.ObjectId("671dbbe2de335e3a0b44ae00"), // Franz's _id
        price: "79.99",
        studentCount: "1200",
        review: []
    },
    {
        title: "Efficient Paradigm Shifting",
        intro: "Shift organizational paradigms with minimal disruption.",
        description: "A comprehensive course on navigating and implementing paradigm shifts.",
        category: "Business Strategy",
        createdBy: new mongoose.Types.ObjectId("671dbbe2de335e3a0b44ae00"),
        price: "69.99",
        studentCount: "650",
        review: []
    },

    // Courses for Clair
    {
        title: "Human-Centric Optimization",
        intro: "Enhance productivity by focusing on human elements.",
        description: "Techniques to optimize processes with a focus on human-centered designs.",
        category: "Human Resources",
        createdBy:new mongoose.Types.ObjectId("671dbbe2de335e3a0b44ae01"), // Clair's _id
        price: "75.00",
        studentCount: "920",
        review: []
    },
    {
        title: "Workplace Efficiency",
        intro: "Maximize efficiency within your teams.",
        description: "A deep dive into practices for boosting productivity and efficiency.",
        category: "Productivity",
        createdBy:new mongoose.Types.ObjectId("671dbbe2de335e3a0b44ae01"),
        price: "85.00",
        studentCount: "870",
        review: []
    },

    // Courses for Bailee
    {
        title: "Innovative Solution Design",
        intro: "Learn to create forward-thinking solutions for modern problems.",
        description: "A course on creative problem-solving and solution-oriented designs.",
        category: "Innovation",
        createdBy:new mongoose.Types.ObjectId("671dbbe2de335e3a0b44ae02"), // Bailee's _id
        price: "95.00",
        studentCount: "540",
        review: []
    },
    {
        title: "Client-Oriented Communication",
        intro: "Enhance client interactions with targeted communication.",
        description: "Practical techniques for impactful communication with clients.",
        category: "Communication",
        createdBy:new mongoose.Types.ObjectId("671dbbe2de335e3a0b44ae02"),
        price: "50.00",
        studentCount: "430",
        review: []
    },

    // Courses for Jess
    {
        title: "Research Methodologies",
        intro: "Learn effective research methods for your field.",
        description: "A detailed guide to research methods and data analysis.",
        category: "Research",
        createdBy:new mongoose.Types.ObjectId("671dbbe2de335e3a0b44ae03"), // Jess's _id
        price: "60.00",
        studentCount: "380",
        review: []
    },
    {
        title: "Data-Driven Decision Making",
        intro: "Make informed decisions using data analysis.",
        description: "Techniques for leveraging data in decision-making processes.",
        category: "Data Science",
        createdBy:new mongoose.Types.ObjectId("671dbbe2de335e3a0b44ae03"),
        price: "70.00",
        studentCount: "540",
        review: []
    }
];


async function createFakeInstructor(num){
    const instructor = []
        for ( let i=0; i<num; i++){
            instructor.push({
                instructorName:faker.person.firstName(),
                instructorProfession:faker.person.jobTitle(),
                instructorDescription:faker.lorem.sentence(),
                instructorimage:faker.image.avatar(),
                instructorCourses:[] 
            })
    
        }
        console.log(instructor)
        try{
            Instructor.insertMany(instructor)
        console.log('instructors added to mongobd !')
        
        } catch { 
            console.log('erroe while adding to the database ')
        
        }
        
        
    
    }
    async function createFakeCourse(num) {
        const courses = [];
        const instructors = await Instructor.find();
    
       
            for (let i = 0; i < num; i++) { // Create 2 courses for each instructor
                courses.push({
                    title: faker.commerce.productName(),
                    intro: faker.lorem.sentence(),
                    description: faker.lorem.paragraph(),
                    category: faker.commerce.department(),
                    createdBy: null, // Reference the instructor's ID directly
                    price: faker.commerce.price(),
                    studentCount: faker.string.numeric({min: 0, max: 1000}), // Random student count
                    review: [] // Initialize empty array for future reviews
                });
            }
      
    
        try {
           
            await Course.insertMany(courses); // Use await to handle asynchronous insertion
            console.log(courses)
            console.log('Courses added to MongoDB!');
        } catch (error) {
            console.error('Error while adding to the database:', error);
        } 
    }
    

    async function addInstToCourses() {
        try {
            const courses = await Course.find();
            const instructorIds = courses.map(course => course.createdBy);
    
            // Iterate through each instructor
            for (const instructorId of instructorIds) {
                const instructor = await Instructor.findById(instructorId);
                if (instructor) {
                    // Find courses created by this instructor
                    const instructorCourses = courses.filter(course => course.createdBy.equals(instructorId)).map(course => course._id);
                    
                    // Add unique course IDs to the instructor's instructorCourses array
                    instructor.instructorCourses.push(...instructorCourses);
                    await instructor.save();
                }
            }
    
            console.log('Courses added to instructors');
        } catch (error) {
            console.error('Error adding courses to instructors:', error);
        }
    }

    mongoose.connect('mongodb+srv://josephtom669:iHZxcCjdpaHAZQhu@cluster0.7ag5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
        console.log('Connected to MongoDB');
       
        createFakeCourse(10)
     
       
    }).catch(error => console.error('Error connecting to MongoDB:', error));
    
