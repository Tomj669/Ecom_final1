import express from 'express'
import mongoose from 'mongoose'
const app = express()
import cors from 'cors'
const port = 7001
const SECRET = '123123'
import  jwt from 'jsonwebtoken'
import {Instructor, User,Course, Purchase, Review} from './testSchema.js'


mongoose.connect('mongodb+srv://josephtom669:iHZxcCjdpaHAZQhu@cluster0.7ag5c.mongodb.net/udemy?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('connected to mongoose ! ')
}).catch((error)=>{console.log('connection to mongoDb failed ! ')})


app.use(express.json())
app.use(cors())

app.get('/',async (req,res)=>{
    const cat = await Course.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $project: { _id: 1 } // Project only the `_id` field (which is the category)
      }
    ]).then(result => result.map(item => item._id))
    res.send(cat)
})

const authorize = (req, res ,next) => { 
    const token = req.headers['authorization']?.split(' ')[1]
    if(!token){ 
        return res.send('token req !!')
    }
    jwt.verify(token,SECRET,(err,decoded)=>{ 
        if(err){ 
            return res.send('token verification failed')
        }
        req.username = decoded.userName
        req.userId = decoded.userId
        next();
    })

}

const verifyCourseOwnership = async(req,res,next)=>{
  const userId = req.userId
  const user = await User.findById(userId)
  const courseId = req.params.courseId
  if(!user.purchasedCourses.includes(courseId)){ 
    return res.send("Access Denied !")
  }
  next();
}

app.post('/signup',async (req,res)=>{ 
    const {username,email,password} = req.body
    const  userExists = await User.findOne({username})
    const  emailExists = await User.findOne({email})
    if(userExists){
        return res.send('username exists')
    }
    if(emailExists){
        return res.send('emailExists')
    }
   
    const newUser = new User({username,email,password})
    await newUser.save();
    const userId = newUser._id
    const payload = {username,email,userId}
    const token = jwt.sign(payload,SECRET)
    res.json({"message":'user added ! ', token })
})

app.post('/login', async(req,res)=>{ 
    const {username,password} = req.body
    const userExists =await User.findOne({username})
    if(!userExists){
        return res.send('username doesnot exist ! ')

    }
    
    if(req.body.password==userExists.password){
        const payload = {"userName": userExists.username,"email":userExists.email,"userId":userExists._id }
        const token =  jwt.sign(payload,SECRET)
       return res.json({"message":"logged in ", token })
    } else {res.send('inccorect password')}

})

app.get('/authroute',authorize,(req,res)=>{ 
    res.send(req.userId+' from req')
})

app.post('/addcourse',async (req,res)=>{ 
    const {title,description ,intro ,price,category,requirements,userId,sections} = req.body
    const user = await User.findById(userId)
   
    const newCourse = new Course({title,description ,intro ,price,category,requirements,sections,instructorId:user.instructorId})
    await newCourse.save() 
    await Instructor.findByIdAndUpdate(user.instructorId,{
        $push:{instructorCourses:newCourse._id}
    })
    res.send('course added ! ') 
})

app.get('/courses/search' ,async(req,res)=>{
  try {
    const {search,sortBy,order,category,minRating,maxRating,minPrice,maxPrice}= req.query;
    const page =  parseInt(req.query.page)|| 1 
    const limit = parseInt(req.query.limit)||10
    const skip = (page - 1) * limit
    let filter = {}
    if(search){ 
      filter.$or=[
        {title:{$regex:search, $options: 'i'}},
        {description:{$regex:search, $options: 'i'}}
      ]  }
     
      if(category){ 
        filter.category={$regex:category,$options:'i'}
      }

      if(minRating||maxRating){ 
        filter.averageRating ={}
        if(minRating) filter.averageRating.$gte = Number(minRating)
        if(maxRating) filter.averageRating.$lte = Number(maxRating)
      }

      if(minPrice||maxPrice){ 
        filter.price ={}
        if(minPrice) filter.price.$gte = Number(minPrice)
        if(maxPrice) filter.price.$lte = Number(maxPrice)
      }


      let sortOptions = { } 
      if(sortBy){ 
        sortOptions[sortBy] = order === 'desc' ? -1 : 1 
      }
    const courses = await Course.find(filter).sort(sortOptions).populate({path:"instructorId",select:"name"}).skip(skip).limit(limit);
    const totalCount = await Course.countDocuments(filter)
    res.json({"results":courses,"total results" : totalCount ,"total pages": Math.ceil(totalCount/limit)})

    console.log(filter,sortOptions)
    
  } catch (error) {
    console.log(error)
    res.send('error retrieving courses')
    
  }
   
}) 

app.get('/course/:courseId', async(req,res)=>{ 
  const {courseId} = req.params
  
  const course = await Course.findById(courseId).populate('instructorId').populate({path:"reviews",populate:{ path : "userId" ,select: "username"}})
   res.send(course)
})

app.post( '/purchase' ,authorize,async (req,res) => { 
  const errors = [ ] 
  const userId = req.userId
  const cart = req.body.cart
  const user = await User.findById(userId)
  const purchases = []
  let total = 0 

  for(const courseId of cart ){ 
    const courseExists = await Course.findById(courseId)
    const coursePurchased = user.purchasedCourses.includes(courseId)
  
    if(!courseExists){ 
      errors.push('course with ID ' + courseId + " does not exisits")
      continue
    }
    if(coursePurchased){ 
      errors.push('course with ID'+ courseId + ' is already  purchased by ' + userId )
      continue
    }

      purchases.push(courseId)
      total = total + courseExists.price 

  }

  
  if(errors.length>0){ 
    return res.json({errors})
  }
 

 const newPurchase =  new Purchase({
  userId:userId,
  courseId:purchases,
  pricePaid:total,
  isCompleted:true
 })

 await newPurchase.save()
 await User.findByIdAndUpdate(userId,{$push:{purchasedCourses:{$each:purchases}}})
 console.log(" courses " + purchases + " purshased !! ")
 res.send(" courses " + purchases + " purshased !! ")


} )




/*  const addnewCourses = async() => { 
    const courses= [
      {
        "title": "HTML & CSS Basics",
        "description": "Learn the fundamentals of HTML and CSS, the building blocks of web development. This course covers basic HTML structure, styling with CSS, and creating simple, responsive websites.",
        "intro": "Start building websites with HTML & CSS!",
        "price": 55.00,
        "category": "Web Development",
        "requirements": "A computer with internet access.",
        "userId": "67337d9a7589e69967ae7247",
        "instructorId": "67338ededd1ee76362156762",
        "sections": [
          { "id": 1, "title": "Introduction to HTML", "videoUrl": "https://example.com/video401.mp4" },
          { "id": 2, "title": "Styling with CSS", "videoUrl": "https://example.com/video402.mp4" },
          { "id": 3, "title": "Responsive Design Basics", "videoUrl": "https://example.com/video403.mp4" },
          { "id": 4, "title": "Building a Simple Webpage", "videoUrl": "https://example.com/video404.mp4" },
          { "id": 5, "title": "Next Steps in Web Development", "videoUrl": "https://example.com/video405.mp4" }
        ]
      },
      {
        "title": "JavaScript for Beginners",
        "description": "Get introduced to JavaScript, the programming language of the web. Learn basic programming concepts, functions, and how to make interactive elements on your website.",
        "intro": "Make your websites interactive with JavaScript!",
        "price": 65.00,
        "category": "Web Development",
        "requirements": "Basic knowledge of HTML and CSS.",
        "userId": "67337d9a7589e69967ae7247",
        "instructorId": "67338ededd1ee76362156762",
        "sections": [
          { "id": 1, "title": "Introduction to JavaScript", "videoUrl": "https://example.com/video411.mp4" },
          { "id": 2, "title": "Variables and Data Types", "videoUrl": "https://example.com/video412.mp4" },
          { "id": 3, "title": "Functions and Control Flow", "videoUrl": "https://example.com/video413.mp4" },
          { "id": 4, "title": "DOM Manipulation", "videoUrl": "https://example.com/video414.mp4" },
          { "id": 5, "title": "JavaScript Events", "videoUrl": "https://example.com/video415.mp4" }
        ]
      },
      {
        "title": "React.js Essentials",
        "description": "Learn the essentials of React.js, a popular JavaScript library for building user interfaces. This course covers components, props, state, and creating dynamic single-page applications.",
        "intro": "Master the basics of React.js!",
        "price": 75.00,
        "category": "Web Development",
        "requirements": "Basic JavaScript knowledge.",
        "userId": "67337d9a7589e69967ae7247",
        "instructorId": "67338ededd1ee76362156762",
        "sections": [
          { "id": 1, "title": "Introduction to React", "videoUrl": "https://example.com/video421.mp4" },
          { "id": 2, "title": "Components and Props", "videoUrl": "https://example.com/video422.mp4" },
          { "id": 3, "title": "Managing State", "videoUrl": "https://example.com/video423.mp4" },
          { "id": 4, "title": "React Router Basics", "videoUrl": "https://example.com/video424.mp4" },
          { "id": 5, "title": "Building a Simple React App", "videoUrl": "https://example.com/video425.mp4" }
        ]
      },
      {
        "title": "Node.js for Back-End Development",
        "description": "Learn how to use Node.js to build server-side applications. This course covers Express, routing, middleware, and connecting to databases for back-end web development.",
        "intro": "Create powerful back-end applications with Node.js!",
        "price": 80.00,
        "category": "Web Development",
        "requirements": "Basic understanding of JavaScript.",
        "userId": "67337d9a7589e69967ae7247",
        "instructorId": "67338ededd1ee76362156762",
        "sections": [
          { "id": 1, "title": "Introduction to Node.js", "videoUrl": "https://example.com/video431.mp4" },
          { "id": 2, "title": "Setting Up Express", "videoUrl": "https://example.com/video432.mp4" },
          { "id": 3, "title": "Routing and Middleware", "videoUrl": "https://example.com/video433.mp4" },
          { "id": 4, "title": "Connecting to a Database", "videoUrl": "https://example.com/video434.mp4" },
          { "id": 5, "title": "Deploying a Node.js App", "videoUrl": "https://example.com/video435.mp4" }
        ]
      },
      {
        "title": "Full-Stack Web Development Overview",
        "description": "Get an overview of full-stack web development. This course covers the basics of front-end and back-end development, databases, and deployment, providing a solid foundation to build complete web applications.",
        "intro": "Become a full-stack developer!",
        "price": 95.00,
        "category": "Web Development",
        "requirements": "Basic HTML, CSS, and JavaScript knowledge.",
        "userId": "67337d9a7589e69967ae7247",
        "instructorId": "67338ededd1ee76362156762",
        "sections": [
          { "id": 1, "title": "Introduction to Full-Stack Development", "videoUrl": "https://example.com/video441.mp4" },
          { "id": 2, "title": "Front-End Essentials", "videoUrl": "https://example.com/video442.mp4" },
          { "id": 3, "title": "Back-End Basics", "videoUrl": "https://example.com/video443.mp4" },
          { "id": 4, "title": "Working with Databases", "videoUrl": "https://example.com/video444.mp4" },
          { "id": 5, "title": "Deploying Your Full-Stack App", "videoUrl": "https://example.com/video445.mp4" }
        ]
      }
    ]
    

for(const course of courses){ 
  const newCourse = new Course(course)
  await newCourse.save()
  await Instructor.findByIdAndUpdate(course.instructorId,{ 
    $push:{instructorCourses:newCourse._id}
  })
}
      
} 
 */

app.post('/addReview' , authorize, async(req,res)=>{ 
  try {
    
   const userId = req.userId
   const {courseId,review,rating} = req.body
   const courseExists = await Course.findById(courseId)
   const coursePurchased = await User.findOne({_id:userId,purchasedCourses:{$in:[courseId]}})
  
   const reviewExists = await Review.findOne({courseId,userId})
   console.log(courseExists)
   
   if(!coursePurchased){ 
    return res.status(400).send('user has not purchased the course !  ')
   }

  
   if(!courseExists){ 
    return res.status(400).send('course doesnot exist! ')
   }

   if(reviewExists){ 
    return res.status(400).send(" user already has a review on course ! ")
   }

   if(!userId||!courseId||!review||!rating){ 
    return res.status(400).json({message: " missing field ! "})
   }

   const newReview = new Review({ userId,courseId , review ,rating })
   await newReview.save()
   await Course.findByIdAndUpdate(courseId,{ 
    $push: { reviews : newReview._id }
   })

    // Calculate the new average rating
    const reviews = await Review.find({ courseId });
    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    const avgRating = totalRating / reviews.length;

    await Course.findByIdAndUpdate(courseId , {averageRating:avgRating})
   
   
   res.send('review added ')
   return console.log("review added successfully ! ")
   
    
  } catch (error) {
     console.log(error)
     return res.send('error')
    
  }

})

app.post('/deleteReview',authorize,async(req,res)=>{ 
  const userId = req.userId
  const {reviewId} = req.body 
  const reviewExists = await Review.findById(reviewId)
  if(reviewExists && reviewExists.userId.toString()== userId){ 
    await Review.findByIdAndDelete(reviewId)
    
    await Course.findByIdAndUpdate(reviewExists.courseId,{$pull:{reviews:reviewId}},
      {new:true})
    return res.send("review deleted")
  }else{ res.send("error deleting course ! ")}



})

app.get('/reviews' , async (req,res)=>{ 
  const review = await Review.find().populate([{path:"courseId",select:"title"},{path:"userId",select:"username"}])

  res.send(review)
})

app.post('/addInstructor',async(req,res)=>{ 
  const {bio,profession,name,userId} = req.body
  /* const userId = req.userId */
  const newInstructor = new Instructor({ bio,profession,name })
  await newInstructor.save()
  await User.findByIdAndUpdate(userId,{"instructorId":newInstructor._id})
  res.send(" instructor added successfully")
})

app.get('/myLearnings',authorize,async (req,res)=>{ 
  const userId=req.userId
  const myLearnings = await User.findById(userId).populate('purchasedCourses')
  res.send(myLearnings.purchasedCourses)

})

app.listen(port,()=>{
    console.log('listening on port ' + port )
})

