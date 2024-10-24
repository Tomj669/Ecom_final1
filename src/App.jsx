
import Appbar from './Appbar'
import Hero from './Hero'
import Cards from './Cards'
import Reviews from './reviews'
import Brands from './Brands'
import LearnersViewing from './LearnersViewing'
import SearchedCourse from './SearchedCourse'
import Footer from './Footer'
import Landing from './Landing'
import SearchPage from './SearchPage'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import CoursePage from './CoursePage'
import CartPage from './CartPage'
import CreateCourse from './CreateCourse'
import Instructor from './Instructor'




function App() {


  return (
    <BrowserRouter>
    <div className=' min-h-screen flex flex-col'>
      <Appbar />
      <div>
        <div className='max-w-7xl mx-auto'>
        <Routes>
          <Route path='/' element={<Landing/>}/> 
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/course' element={<CoursePage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/createcourse' element={<CreateCourse/>}/>
          <Route path='/instructor' element={<Instructor/>}/>
         
        </Routes>
        </div>
         </div>
         <Footer/> 
  </div>
    
    </BrowserRouter>

  
  )
}

export default App
