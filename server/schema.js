import {mongoose} from 'mongoose'

const userschema = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    courses:[{type:mongoose.Schema.Types.ObjectId,ref:"Course"}]
})

const instructorSchema= new mongoose.Schema({
    
    instructorName:{type:String},
    instructorProfession:{type:String},
    instructorDescription:{type:String},
    instructorImage:{type:String},
    instructorCourses:[{type:mongoose.Schema.Types.ObjectId,ref:"Course"}]
})

const courseschema = new mongoose.Schema({
      
      title:{type:String},
      intro:{type:String},
      description:{type:String},
      category:{type:String},
      createdBy:{type: mongoose.Schema.Types.ObjectId, ref:'Instructor'},
      price:{type:String},
      studentCount:{type:String},
      review:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
})

const reviewschema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    review:{type:String},
    rating:{type:Number}
})

const User = mongoose.model("User",userschema)
const Instructor = mongoose.model('Instructor',instructorSchema)
const Review = mongoose.model('Review',reviewschema)
const Course = mongoose.model('Course',courseschema)

export  {User,Instructor,Review,Course};



