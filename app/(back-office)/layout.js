"use client"
import React, { useState } from 'react'
import Sidebar from '@/components/backoffice/Sidebar'
import Navbar from '@/components/backoffice/Navbar'
export default function Layout({children}) {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className='flex'>
      {/* {sidebar} */}
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
      {/* {main body} */}
      <div className='lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen'>
        {/* {Hearder} */}
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
        {/* {Main} */}
        <main className='p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-16 min-h-screen'>{children}</main>

      </div>
      {/* {Main Body} */}
    </div>
  )
}
