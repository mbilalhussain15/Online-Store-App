"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import logo from '../../public/logo.png'
import Image from 'next/image';
import {LayoutGrid, Slack,Users2, Truck, Warehouse,UserSquare2,User,ExternalLink,Settings,LogOut,ChevronRight,
  Boxes,
  LayoutList,
  SendToBack,
  ScanSearch,
  MonitorPlay,
  ChevronDown,
  CircleDollarSign,
  Building2
} from 'lucide-react'
import { usePathname } from 'next/navigation';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Layout from '@/app/(back-office)/layout';

export default function Sidebar({showSideBar,setShowSideBar}) {
  const pathname= usePathname();

  const [openMenu,setOpenMenu]= useState(false);

  const sideBarLink =[
    {
      title:"Customers",
      icon: Users2,
      href: "/dashboard/customers"
    },
    {
      title:"Orders",
      icon: Truck,
      href: "/dashboard/orders"
    },
    {
      title:"Markets",
      icon: Warehouse,
      href: "/dashboard/markets"
    },
    {
      title:"Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers"
    },
    {
      title:"Staff",
      icon: User,
      href: "/dashboard/staff"
    },
    {
      title:"Online Store",
      icon: ExternalLink,
      href: "/"
    },
    {
      title:"Community",
      icon: Building2,
      href: "/dashboard/community"
    },
    {
      title:"Wallet",
      icon: CircleDollarSign,
      href: "/dashboard/wallet"
    },
    {
      title:"Tasks",
      icon: CircleDollarSign,
      href: "/dashboard/task"
    },
    {
      title:"Settings",
      icon: Settings,
      href: "/dashboard/settings"
    },
  ];

  const catalogueLink =[
    {
      title:"Products",
      icon: Boxes,
      href: "/dashboard/products"
    },
    {
      title:"Categories",
      icon: LayoutList,
      href: "/dashboard/categories"
    },
    {
      title:"Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons"
    },
    {
      title:"Store banner",
      icon: MonitorPlay,
      href: "/dashboard/banners"
    },
    
  ]

  return (
    <div className={showSideBar? "sm:block mt-20 sm:mt-0 shadow-md bg-slate-100 dark:bg-slate-800 space-y-6 w-64 h-screen dark:text-slate-300 text-slate-800  fixed left-0 top-0 overflow-y-scroll"
      : "hidden sm:block mt-20 sm:mt-0 shadow-md bg-slate-100 dark:bg-slate-800 space-y-6 w-64 h-screen dark:text-slate-300 text-slate-800  fixed left-0 top-0 overflow-y-scroll"
      }>
      <Link
      onClick={()=> setShowSideBar(false)}
       className='px-6 py-4' href="/dashboard">
        <Image src={logo} alt='logo'className='' width={70} height={70}/>
        </Link>
      <div className='space-y-3 flex flex-col mt-14'>
      <Link
      onClick={()=> setShowSideBar(false)}
       href="/dashboard" className={pathname==='/dashboard'
              ?"flex items-center space-x-3 px-6 py-2 border-l-4 border-lime-500 text-lime-500"
              :"flex items-center space-x-3 px-6 py-2" }>
        <LayoutGrid/>
        <span>Dashboard</span>
        </Link>


        <Collapsible className=' px-6 py-2'>
          <CollapsibleTrigger
            onClick={()=> setOpenMenu(!openMenu)}
          >
            <div className='flex items-center space-x-6 py-2'>
            <div className="flex items-center space-x-3">
              <Slack/>
              <span>Catalogue</span>
            </div>
            {openMenu ? <ChevronDown/> : <ChevronRight/>}
          </div>
          
          </CollapsibleTrigger>
          <CollapsibleContent className='rounded-lg px-3 py-3 pl-6 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 text-slate-800'>
          {
               catalogueLink.map((item,i)=>{
                const Icon= item.icon
                return (
                 
                    <Link
                    onClick={()=> setShowSideBar(false)}
                     key={i} href={item.href} className={pathname=== item.href
                      ?"flex items-center space-x-3 py-1  text-lime-500 text-sm"
                      :"flex items-center space-x-3 py-1" }>
                      <Icon className='w-4 h-4'/>
                      <span>{item.title}</span>
                    </Link>
                
                )
              })
             }
          </CollapsibleContent>
        </Collapsible>



       

        
        
        {
          sideBarLink.map((item,i)=>{
            const Icon = item.icon
            return (
             
              <Link
              onClick={()=> setShowSideBar(false)}
               key={i} href={item.href} className={item.href == pathname
              ?"flex items-center space-x-3 px-6 py-2 border-l-4 border-lime-500 text-lime-500"
              :"flex items-center space-x-3 px-6 py-2" }>
              <Icon/>
              <span>{item.title}</span>
              </Link>
            )
          })
        }
        <div className="px-6 py-2">
          <button className='bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3'>
            <LogOut/>
          <span>Logout</span>
          </button>
        </div>



       
      
      </div>
    </div>
  )
}
