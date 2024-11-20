import React from 'react'
import SmallCard from './SmallCard'
import { stat } from 'fs'
import {ShoppingCart,Loader2,RefreshCcw,CheckCheck} from 'lucide-react'
export default function SmallCards() {
    const orderStatus= [
        {
            title: "Today Orders",
            number: 70,
            iconBg: "bg-green-600",
            icon: ShoppingCart
        },
        {
            title: "Orders Pendings",
            number: 50,
            iconBg: "bg-blue-600",
            icon: Loader2
        },
        {
            title: "Order Processing",
            number: 100,
            iconBg: "bg-orange-600",
            icon: RefreshCcw
        },
        {
            title: "Orders Delivered",
            number: 300,
            iconBg: "bg-purple-600",
            icon: CheckCheck
        }, 
    ]
   
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
     {
        orderStatus.map((data,i)=>{
            return(
                <SmallCard className="bg-green-600" data={data} key={i}/>
            )
        })
     }
    </div>
  )
}
