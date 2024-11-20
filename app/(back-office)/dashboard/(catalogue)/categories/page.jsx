import React from 'react'
import TableActions from '@/components/backoffice/TableActions'
import PageHeaderButton from '@/components/backoffice/PageHeaderButton'

export default function page() {
  return (
    <div>
      <h2>Categories</h2>
      {/* Heading */}
    <PageHeaderButton heading="Category" linkTitle="Add Category" href="/dashboard/categories/new"/>
    <TableActions/>

    <div className='py-8'>
      <h2>Table</h2>
    </div>
    </div>
  )
}
