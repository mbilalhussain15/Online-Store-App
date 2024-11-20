import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ThemeSwitcherBtn from '@/components/ThemeSwitcher'

import { AlignJustify, Bell, Sun,LayoutDashboard,Settings,LogOut,X } from 'lucide-react';

export default function Navbar({setShowSideBar, showSideBar}) {
  return (
    <div className='flex items-center justify-between shadow-md bg-slate-100
     dark:bg-slate-800 text-slate-50 h-20 py-8 fixed top-0 w-full px-8 z-50 sm:pr-[20rem]'>
      {/* <Link href={"/dashboard"} className='sm:hidden'>Logo </Link> */}
      <button
        onClick={()=> setShowSideBar(!showSideBar)}
       className='text-lime-700 dark:text-lime-500'><AlignJustify /></button>
      <div className='flex space-x-3'>
      
      <ThemeSwitcherBtn/>

        {/* for notification */}
        <DropdownMenu>
          <DropdownMenuTrigger  className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
          {/* <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"> */}
          <Bell className='text-lime-700 dark:text-lime-500' />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">20</div>
        {/* </button> */}
          </DropdownMenuTrigger>
          <DropdownMenuContent className='py-2 px-4 pr-8'>
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>

            <div className='flex items-center space-x-2 '>
              <Image src='/profile.JPG' alt="User Profile" width={200} height={200} className='w-8 h-8 rounded-full'/>
              <div className='flex flex-col space-y-1'>
                <p> Yellow Seweet Corn Stock out</p>
                <div className="flex items-center space-x-2">
                  <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock out</p>
                  <p>Dec 12 2024 - 12:04 PM</p>
                </div>

              </div>
            <button><X/></button>
            </div>
           
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
           <button className='flex items-center space-x-2'>
           <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
           </button>
            </DropdownMenuItem>
           
          </DropdownMenuContent>
        </DropdownMenu>



       {/* for profile */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            {/* <Button> */}
        
              <Image src='/profile.JPG' alt="User Profile" width={200} height={200} className='w-8 h-8 rounded-full'/>
            {/* </Button> */}
          </DropdownMenuTrigger>
          <DropdownMenuContent className='py-2 px-4 pr-8'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
            <button className='flex items-center space-x-2'>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
            </button>
            </DropdownMenuItem>

            <DropdownMenuItem>
            <button className='flex items-center space-x-2'>
            <Settings className="mr-2 h-4 w-4" />
            <span>Edit Profile</span>
            </button>
            </DropdownMenuItem>

            <DropdownMenuItem>
           <button className='flex items-center space-x-2'>
           <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
           </button>
            </DropdownMenuItem>
           
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
