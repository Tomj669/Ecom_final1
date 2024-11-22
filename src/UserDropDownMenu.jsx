import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"

  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  export default function UserDropDownMenu() {
    return (
      <DropdownMenu modal = {false}>
        <DropdownMenuTrigger asChild>
            <Button variant = ' ghost '> 
            <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>

            </Button>
        
          
        </DropdownMenuTrigger>
        <DropdownMenuContent className="overflow-auto" align= 'end'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
        
            <DropdownMenuItem>
              
              <span>Profile</span>
           
            </DropdownMenuItem>

                  
            <DropdownMenuItem>
              
              <span>My learnings </span>
           
            </DropdownMenuItem>

                  
            <DropdownMenuItem>
              
              <span>Cart</span>
           
            </DropdownMenuItem>

                  
            <DropdownMenuItem>
              
              <span>Wishlist</span>
           
            </DropdownMenuItem>

                  
            <DropdownMenuItem>
              
              <span>Purshace history </span>
           
            </DropdownMenuItem>
      
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
            <span>Log out</span>
           
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  