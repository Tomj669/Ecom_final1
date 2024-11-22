import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
const app = express()
const port =2000

import {User,Course,Instructor} from './schema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'mykey123'

app.use(express.json());
app.use(cors())

mongoose.connect('mongodb+srv://josephtom669:iHZxcCjdpaHAZQhu@cluster0.7ag5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to MongoDB');
   
 
   
}).catch(error => console.error('Error connecting to MongoDB:', error));


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

app.get('/', async(req, res) => {
    const users = await User.find();
    const courses = await Course.find()
  res.send(courses)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})