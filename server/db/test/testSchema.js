import mongoose from 'mongoose'

const sectionSchema = new mongoose.Schema({
    title: { type: String },
    videoUrl: { type: String}
});


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: {type:String},
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    wishlistCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    instructorId:{type: mongoose.Schema.Types.ObjectId, ref:'Instructor'}
});

const User = mongoose.model('User', userSchema);

const instructorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    profession:String,
    profilePicture: { type: String},
    instructorCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

 const  Instructor = mongoose.model('Instructor', instructorSchema);

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    intro:String,
    description: String,
    requirements: String,
    category: String,
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    sections:[ sectionSchema ],
    instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },
    avgRating: Number,
    reviews: [{type: mongoose.Schema.Types.ObjectId,ref:"Review"}],
   
    isPublished: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    averageRating: { type: Number,default:0}
});

const Course = mongoose.model('Course', courseSchema);




const purchaseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }],
    purchaseDate: { type: Date, default: Date.now },
    pricePaid: { type: Number, required: true },
    isCompleted: { type: Boolean, default: false }
});

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String },
    createdAt: { type: Date, default: Date.now },
  

});

const Review = mongoose.model('Review', reviewSchema);

const Purchase = mongoose.model('Purchase', purchaseSchema);

export {User,Instructor,Purchase,Course,Review}
