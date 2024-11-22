import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import {User,Instructor,Section,Lesson,Purchase,Course,Review} from './testSchema.js'


const app = express()
const port= 1000
app.use(express.json());
app.use(cors())


app.get('/courses',async (req,res)=>{
    try{
        const { search, sort } = req.query;

        const query = {}
        if(search){
            query.title = { $regex:search, $options: 'i' }
        }

        let sortOption = {};
        if(sort){
            const [sortField, sortOrder] = sort.split(':');
            sortOption[sortField] = sortOrder === 'desc' ? -1 : 1; // 1 for ascending, -1 for descending
        }
        const courses = await Course.find(query).sort(sortOption).populate('instructorId', 'name' )
        res.json(courses)

    }catch(erre){
            console.log('error while fetching ')
    }
  
})

app.post('/signup',async (req,res)=>{
    try
    {const {name,email,password}=req.body
    const newUser = new User({name,email,password})
    await newUser.save();
    
    res.send("account created ! ") 
}
    catch(error){
        console.log( 'error creating user !' )
    }
})

app.post('/createReview', async (req, res) => {
    try {
        const { userId, courseId, rating, review } = req.body;

        // Create a new review
        const newReview = new Review({ userId, courseId, rating, review });
        await newReview.save();

        // Calculate average rating
        const reviews = await Review.find({ courseId }); // Get all reviews for this course
        const averageRating = reviews.length 
            ? (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1) 
            : 0;

        // Update the course's average rating
        await Course.findByIdAndUpdate(courseId, { averageRating }, { new: true });

        res.status(201).json(newReview);
    } catch (error) {
        console.log('Error creating review:', error);
        res.status(500).json({ message: 'Error creating review' });
    }
});


app.get('/review',async(req,res)=>{ 
    const {courseId} = req.body
    const reviews = await Review.find( {courseId})
    res.send(reviews)
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })




mongoose.connect('mongodb+srv://josephtom669:iHZxcCjdpaHAZQhu@cluster0.7ag5c.mongodb.net/newtest?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('connected to mongoose ! ')
})


async function addTestData() {
    try {
        // Create an instructor
        const instructor = await Instructor.create({
            name: "John Doe",
            bio: "Experienced instructor in web development.",
            profilePicture: "profile.jpg",
            socialLinks: ["https://twitter.com/johndoe"]
        });

        // Create a course
        const course = await Course.create({
            title: "JavaScript Basics",
            description: "Learn the fundamentals of JavaScript.",
            requirements: ["Basic computer skills"],
            category: "Programming",
            price: 50,
            instructorId: instructor._id,
            isPublished: true
        });

        // Add course to instructor's courses
        instructor.instructorCourses.push(course._id);
        await instructor.save();

        // Create sections
        const section1 = await Section.create({
            courseId: course._id,
            title: "Introduction to JavaScript",
            summary: "An overview of JavaScript fundamentals."
        });

        const section2 = await Section.create({
            courseId: course._id,
            title: "JavaScript Basics",
            summary: "Detailed exploration of JS syntax and features."
        });

        // Add sections to course
        course.sections.push(section1._id, section2._id);
        await course.save();

        // Create lessons for each section
        const lesson1 = await Lesson.create({
            sectionId: section1._id,
            title: "What is JavaScript?",
            content: "JavaScript is a programming language used for web development.",
            videoURL: "https://example.com/video1",
            isFreePreview: true
        });

        const lesson2 = await Lesson.create({
            sectionId: section2._id,
            title: "Variables and Data Types",
            content: "Learn about variables and data types in JavaScript.",
            videoURL: "https://example.com/video2"
        });

        // Add lessons to sections
        section1.lessons.push(lesson1._id);
        section2.lessons.push(lesson2._id);
        await section1.save();
        await section2.save();

        // Create a user and make a purchase
        const user = await User.create({
            name: "Jane Smith",
            email: "jane@example.com",
            password: "password123",
            accountType: "student",
            purchasedCourses: [course._id]
        });

        await Purchase.create({
            userId: user._id,
            courseId: course._id,
            pricePaid: course.price,
            isCompleted: false
        });

        console.log("Test data added successfully");
    } catch (error) {
        console.error("Error adding test data:", error);
    }
}


async function popCourse(){
    const id = '672072f750dfb9bbc09a1978'
    const courseId = new  mongoose.Types.ObjectId(id)
    const course = await Course.findById(courseId)
    .populate('instructorId') 
    if(!course){
        console.log(' no course with ID found')
    }
    else{

        console.log(course.instructorId.bio)
    }
}

 async function test(){
    const  courses= await Course.find()
    console.log(courses)
 }



 const seedDatabase = async () => {
    try {
        // Clear existing data
        await User.deleteMany({});
        await Instructor.deleteMany({});
        await Course.deleteMany({});
        await Section.deleteMany({});
        await Lesson.deleteMany({});

        // Sample categories
        const categories = ['Programming', 'Design', 'Marketing', 'Business', 'Health'];

        // Create 5 instructors
        const instructors = await Instructor.insertMany([
            { name: 'Alice Johnson', bio: 'Expert in JavaScript', profilePicture: 'url_to_pic1', socialLinks: ['linkedin.com/in/alice', 'twitter.com/alice'] },
            { name: 'Bob Smith', bio: 'Graphic Design Specialist', profilePicture: 'url_to_pic2', socialLinks: ['linkedin.com/in/bob', 'twitter.com/bob'] },
            { name: 'Charlie Brown', bio: 'Digital Marketing Guru', profilePicture: 'url_to_pic3', socialLinks: ['linkedin.com/in/charlie', 'twitter.com/charlie'] },
            { name: 'Diana Prince', bio: 'Health and Wellness Coach', profilePicture: 'url_to_pic4', socialLinks: ['linkedin.com/in/diana', 'twitter.com/diana'] },
            { name: 'Edward Norton', bio: 'Business Strategist', profilePicture: 'url_to_pic5', socialLinks: ['linkedin.com/in/edward', 'twitter.com/edward'] }
        ]);

        // Create 2 courses for each instructor
        for (const instructor of instructors) {
            const courses = await Course.insertMany([
                {
                    title: `${instructor.name}'s JavaScript Course`,
                    description: 'Learn the basics of JavaScript.',
                    requirements: ['Basic computer skills'],
                    category: categories[Math.floor(Math.random() * categories.length)],
                    price: 49.99,
                    instructorId: instructor._id,
                    isPublished: true
                },
                {
                    title: `${instructor.name}'s Advanced JavaScript Course`,
                    description: 'Master advanced topics in JavaScript.',
                    requirements: ['Basic knowledge of JavaScript'],
                    category: categories[Math.floor(Math.random() * categories.length)],
                    price: 79.99,
                    instructorId: instructor._id,
                    isPublished: true
                }
            ]);

            await Instructor.updateOne(
                { _id: instructor._id },
                { $push: { instructorCourses: { $each: courses.map(course => course._id) } } }
            );

            // Create sections and lessons for each course
            for (const course of courses) {
                const section = await Section.create({
                    courseId: course._id,
                    title: 'Introduction',
                    summary: 'Introduction to the course content.'
                });

                await Lesson.insertMany([
                    {
                        sectionId: section._id,
                        title: 'Getting Started',
                        content: 'Learn how to set up your environment.',
                        videoURL: 'url_to_video1',
                        resources: ['resource1.pdf', 'resource2.pdf'],
                        isFreePreview: true
                    },
                    {
                        sectionId: section._id,
                        title: 'Variables and Data Types',
                        content: 'Understanding variables and data types in JavaScript.',
                        videoURL: 'url_to_video2',
                        resources: ['resource3.pdf', 'resource4.pdf'],
                        isFreePreview: false
                    }
                ]);
            }
        }

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } } 

   async function addsection(courseId,sectionData,lessonData){
    const newSection = new Section({
        courseId:courseId,
        title:sectionData.title,
        summary:sectionData.summary
    })
    const savedSection = await newSection.save()
    
    const lessonPromises = lessonData.map( async (lesson) =>{ 
        const newLesson = new Lesson({
            sectionId: savedSection._id,
            title:lesson.title,
            content:lesson.content,
            videoURL:lesson.videoURL,
            resources:lesson.resources,
            isFreePreview:lesson.isFreePreview

        })
        return newLesson.save()
    })

    const savedLesson = await Promise.all(lessonPromises)

    await Course.findByIdAndUpdate(courseId,{
        $push:{ sections:savedSection._id}})

   }




 
