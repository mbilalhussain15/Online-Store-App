import React from 'react'
import LargeCard from './LargeCard'
import { stat } from 'fs'

export default function LargeCards() {
    const orderStates= [
        {
            perioid: "Today Orders",
            sales: 11000,
            color: "bg-green-600"
        },
        {
            perioid: "Yesterday Orders",
            sales: 12000,
            color: "bg-blue-600"
        },
        {
            perioid: "This Month",
            sales: 31000,
            color: "bg-orange-600"
        },
        {
            perioid: "All-Time Sales",
            sales: 15000,
            color: "bg-purple-600"
        }, 
    ]
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
     {
        orderStates.map((item,i)=>{
            return(
                <LargeCard className="bg-green-600" data={item} key={i}/>
            )
        })
     }
    </div>
  )
}
