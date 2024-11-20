import React from 'react'
import Link from 'next/link'
import {
  Plus
} from 'lucide-react'
import Heading from '@/components/backoffice/Heading'
export default function PageHeaderButton({heading,linkTitle,href}) {
  return (
    <div className="flex justify-between py-4 mb-4">
    <Heading title={heading}/>
    <Link className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-base px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 space-x-3"
     href={href}><Plus/> <span>{linkTitle}</span></Link>
  </div>
  )
}
