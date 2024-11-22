import express from 'express'
const app =express()
const port = 3000
import  mongoose from 'mongoose'
import {User,Course,Instructor} from './schema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'mykey123'



mongoose.connect('mongodb+srv://josephtom6699:BqJdzcklftSOV8yH@ecom.7isry.mongodb.net/ecom?retryWrites=true&w=majority&appName=ecom').then(() => {
    console.log('Connected to MongoDB');
   
 
   
}).catch(error => console.error('Error connecting to MongoDB:', error));




app.use(express.json());

const Authentication = (req ,res ,next ) => {
    const  token = req.headers['authorization']?.split(' ')[1];

    if(!token){
        res.send('no token')
    }

    jwt.verify(token,SECRET_KEY,(err,decoded)=>{
        if(err) res.send('error')
        req.userId = decoded.id;
        next();
    })
} 


app.get('/users' , async(req,res)=>{ 
    try {
        const users=await User.find({})
        res.json(users)

        
    } catch (error) {
        res.send('erroe macha')
        
    }
 

})

app.get ('/courses',(req,res)=>{
    const courses = Course.find({})
        res.json(courses)
})

app.post('/signup', async(req,res)=>{
    const {username,email,password}= req.body

    try {
        const exisnts = await User.findOne({username : username})
        if(exisnts){
            res.send('username exisnts ')
            
        }else{
            const hashedPassowrd = await bcrypt.hash(password, 10)
            const newuser= new User({ username,email,password:hashedPassowrd})
            const token = jwt.sign({username,password},SECRET_KEY)
            await newuser.save();
            res.json({message: 'logged in ', token }) 
        }
        
    } catch (error) {
        res.send('error signing up ')
        
    }
})

app.post('/login', async(req,res)=>{
    const {username,password}= req.body
 
 try {
    const user = await User.findOne({username:username})
    if(user){
        const isPasswordVaild = await bcrypt.compare(password,user.password)
        if(isPasswordVaild){
            const token = jwt.sign({username,password},SECRET_KEY)
            res.json({message:'logged in ',token} )
        } else { 
            res.send('password inccorect ! ')
        }
    } else { 
         res.send('usename doesnt exist ! ')
    }
    
 } catch (error) {
    return res.send('error')
    
    
 }

})

app.listen(port,()=>{
    console.log('listening on port 3000')
})
