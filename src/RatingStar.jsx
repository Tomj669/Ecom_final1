import { Star,StarHalf } from "lucide-react";
export default function ReviewStar({ data }) {
    const roundedNumber = data.toFixed(1);
    const intPart = Math.floor(roundedNumber);
    const decPart = roundedNumber - intPart;
    // Create an array with `intPart` length to render full stars
    const starsArray = Array(intPart).fill(0); // An array with `intPart` elements
    
    return (
      <div className="flex p-1">
        {starsArray.map((_, index) => (
          <span className="" key={index}><Star size={16} style={{ fill: "#D97706" }}  className="text-yellow-600"/></span> // Render a star for each full part
        ))}
        {/* Display a half star if the decimal part is 0.5 or close */}
        {decPart >= 0.3 && decPart < 0.8 && <StarHalf size={16} style={{ fill: "#D97706" }}  className="text-yellow-600"/>}
      </div>
    );
  }
  