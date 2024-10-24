
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Signup() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] z-0 relative">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Signup</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to Signup to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Full Name </Label>
              <Input
                id="FullName"
                type="text"
               
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
       
              </div>
              <Input id="password" type="password" required />
            </div>
            
            <Button type="submit" className="w-full  rounded-none bg-purple-600 hover:bg-purple-700">
              Signup
            </Button>
            <Button variant="outline" className="w-full">
              Signup with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account ! {" "}
            <Link href="#" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block mt-2">
        <img src="./src/assets/login.webp" alt="" />
       
    
      </div>
    </div>
  )
}
