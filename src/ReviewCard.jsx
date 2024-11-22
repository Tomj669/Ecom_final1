import {Avatar,AvatarFallback} from './components/ui/avatar'
export default function ReviewCard({ data }) {
    return (
     
        <div className="flex flex-col space-y-6 w-full"> {/* Use space-y-3 for vertical spacing */}
          <div className="mb-10">{data.review}</div>
          <div className="flex gap-3 items-baseline">
            <Avatar>
              <AvatarFallback className="bg-zinc-800 text-white font-bold">HI</AvatarFallback>
            </Avatar>
            {data.userId.username}
          </div>
          <div className="text-purple-800  "> course: {data.courseId?.title|| " no data "} </div>
        </div>
     
    );
  }
  