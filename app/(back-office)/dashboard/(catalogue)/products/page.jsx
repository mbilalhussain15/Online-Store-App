import React from 'react'
import TableActions from '@/components/backoffice/TableActions'
import PageHeaderButton from '@/components/backoffice/PageHeaderButton'

export default function page() {
  return (
    <div>
      <h2>Products</h2>
      {/* Heading */}
    <PageHeaderButton heading="Product" linkTitle="Add Product" href="/dashboard/products/new"/>
    <TableActions/>

    <div className='py-8'>
      <h2>Table</h2>
    </div>
    </div>
  )
}
