 
 import { Button } from "./components/ui/button"
 export default function Footer(){
     return(

        <footer className="w-scren mt-auto bg-zinc-800 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">
                Top companies choose Udemy Business to build in-demand career skills.
              </h3>
              <div className="flex space-x-4 gap-3">
                <img src="./src/assets/logos/logo5.svg" alt="Company logo" className="h-8" />
                <img src="./src/assets/logos/logo2.svg" alt="Company logo" className="h-8" />
                <img src="./src/assets/logos/logo3.svg" alt="Company logo" className="h-8" />
                <img src="./src/assets/logos/logo4.svg" alt="Company logo" className="h-8" />
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Teach on Udemy</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">About Us</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Contact Us</Button></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Terms of Service</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Privacy Policy</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Cookie Settings</Button></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-700 flex flex-col sm:flex-row justify-between items-center">
            <img className="w-[100px] mb-4 sm:mb-0" src="./src/assets/logos/logo-udemy-inverted.svg" alt="Udemy logo" />
            <div className="text-gray-400 text-sm">© 2024 Udemy, Inc. All rights reserved.</div>
          </div>
        </div>
      </footer>
  

    

)
 }