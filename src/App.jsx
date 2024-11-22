
import Appbar from './Appbar'
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
import AxiosTest from './AxiosTest'
import Wishlist from './Wishlist'
import MyLearning from './MyLearning'
import Learn from './Learn'




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
          <Route path='/course/:courseId' element={<CoursePage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/createcourse' element={<CreateCourse/>}/>
          <Route path='/instructor' element={<Instructor/>}/>
          <Route path='/axios' element={<AxiosTest/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/mylearning' element={<MyLearning/>}/>
          <Route path="/mylearning/learn/:courseId" element = {<Learn/>}/>
        </Routes>
        </div>
         </div>
         <Footer/> 
  </div>
    
    </BrowserRouter>

  
  )
}

export default App
