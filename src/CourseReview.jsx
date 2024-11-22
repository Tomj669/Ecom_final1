import { Avatar, AvatarFallback } from './components/ui/avatar'
import { Star } from "lucide-react"
import ReviewStar from "./RatingStar"
import { Button } from "./components/ui/button"

const reviews = [
  {
    username: "johnDoe",
    review: "The course was well-structured and easy to follow.",
    rating: 5
  },
  {
    username: "janeSmith",
    review: "Good content but could use more practical examples.",
    rating: 4
  },
  {
    username: "markTaylor",
    review: "Average course, not much new information for experienced learners.",
    rating: 3
  },
  {
    username: "lucyBrown",
    review: "The instructor was very knowledgeable and helpful.",
    rating: 5
  },
  {
    username: "danielGreen",
    review: "The course was a bit too basic for me.",
    rating: 2
  },
  {
    username: "amyClark",
    review: "Enjoyed the course, learned a lot of new concepts.",
    rating: 4
  },
  {
    username: "oliverWhite",
    review: "Could have been more engaging, but overall informative.",
    rating: 3
  },
  {
    username: "miaWalker",
    review: "Loved the hands-on projects, great for beginners.",
    rating: 5
  },
  {
    username: "henryHall",
    review: "Too many theoretical concepts, I prefer more practical sessions.",
    rating: 3
  },
  {
    username: "emmaDavis",
    review: "Excellent course, highly recommend for anyone starting out.",
    rating: 5
  }
]

export default function CourseReview({data,averageRating }) {
  console.log(data)
  return (
    <div className='p-4 px-8'>
      <div className="flex text-base gap-2">
        <Star className="text-yellow-700" />
        <div className="text-[25px] font-bold">{averageRating} course rating - {data.length} ratings</div>
      </div>

      {/* Grid layout for reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-4">
        {data.slice(0,6).map((review, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Avatar className="mr-2 bg-slate-800">
                <AvatarFallback className="bg-gray-900 text-white font-bold text-2xl">{review.userId.username[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="font-bold">{review.userId.username}</div>
            </div>
            <ReviewStar data={review.rating} />
            <div className="mt-2 text-gray-700">{review.review}</div>
          </div>
        ))}
      </div>
      <Button className='rounded-none ml-2'> Show more </Button>
    </div>
  )
}
