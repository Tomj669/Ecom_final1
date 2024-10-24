import { useNavigate } from "react-router-dom"
import { Button } from "./components/ui/button"
import { ShoppingCart } from "lucide-react"
export default function CartButton({ cartLength }) {
    const navigate = useNavigate()
    return (
        <div className="relative inline-block mr-4">
            <Button onClick={()=>{navigate('/cart')}} variant='ghost' className=" hover:bg-white ">
                <ShoppingCart/>
            </Button>
            {cartLength > 0 && ( // Only show the badge if there are items in the cart
                <span className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartLength}
                </span>
            )}
        </div>
    )
}
