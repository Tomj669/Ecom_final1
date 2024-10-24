import { useDispatch, useSelector } from "react-redux"
import { Remove_cart, Add_cart } from "./redux/cartSlice"
import { Button } from "./components/ui/button"

const item= [ {
    "courseName": "Data Structures",
    "intro": "Learn essential data structures and algorithms for software development and interviews.",
    "author": "Mark Brown",
    "rating": 4.6,
    "numberOfRatings": 1100,
    "level": "Advanced",
    "price": 179.99,
    "lectures": 150
  }]
export default function ReduxTest() {
    const dispatch=useDispatch()
    const cart = useSelector((state) => state.cart) // Corrected line
    return (
        <div> 
          
            {JSON.stringify(cart.items)}
            <Button onClick={()=>dispatch(Add_cart(item))}> ADD </Button>
            <Button onClick={()=>dispatch(Remove_cart(item))}> Remove </Button>
          
        </div>
    )
}
