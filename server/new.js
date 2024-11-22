    import mongoose from "mongoose";
    import { User,Instructor,Course } from "./schema.js";
    mongoose.connect('mongodb+srv://josephtom6699:BqJdzcklftSOV8yH@ecom.7isry.mongodb.net/ecom?retryWrites=true&w=majority&appName=ecom').then(async() => {
       
    
    
    
    console.log('Connected to MongoDB');

       const courses =  await Course.find({})
       const instructors =  await Instructor.find({})

       for( const key in courses) {
        for(const instkey in instructors){
                        if(courses[key].createdBy == '671dbbe2de335e3a0b44adff'){
                            let  i=0
                            console.log(i++)
                        }
           
         }
        
       }
    
     
       
    }).catch(error => console.error('Error connecting to MongoDB:', error));


