
import Appbar from './Appbar'
import Hero from './Hero'
import Cards from './Cards'
import Reviews from './reviews'
import Brands from './Brands'
import LearnersViewing from './LearnersViewing'
import SearchedCourse from './SearchedCourse'
import Footer from './Footer'

function Landing() {


  return (
  <div>
      <Hero/>
         <Cards/>
         <Brands/>
         <Reviews/> 
         <LearnersViewing></LearnersViewing>
         <SearchedCourse/>
  </div>
  
  )
}

export default Landing
