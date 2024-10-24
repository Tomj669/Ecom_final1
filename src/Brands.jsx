import logo1 from './assets/logos/logo1.svg';
import logo2 from './assets/logos/logo2.svg';
import logo3 from './assets/logos/logo3.svg';
import logo4 from './assets/logos/logo4.svg';
import logo5 from './assets/logos/logo6.svg';
import logo6 from './assets/logos/logo5.svg';


const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function Brands(){
    return(<>
    <div className="max-sm:p-12 sm:p-16">
        <div className='text-center mb-8'>
        Trusted by over 16,000 companies and millions of learners around the world
        </div>
        <div className='grid grid-cols-6 max-md:grid-cols-3 gap-6'>
          {logos.map((logo,index)=>(
            <div className='mx-auto'>
               <img  src={logo} alt="" />
            </div>
      
             

 
          )
           
          )}
        </div>
        
        
     
    

    </div>


   
        
        
        
        </>)
}