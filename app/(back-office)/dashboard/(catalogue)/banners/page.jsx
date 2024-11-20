import React from 'react'
import TableActions from '@/components/backoffice/TableActions'
import PageHeaderButton from '@/components/backoffice/PageHeaderButton'

export default function Banner() {
  return (
    <div>
      <h2>Banner</h2>
      {/* Heading */}
    <PageHeaderButton heading="Banner" linkTitle="Add Banner" href="/dashboard/banners/new"/>
    <TableActions/>

    <div className='py-8'>
      <h2>Table</h2>
    </div>
    </div>
  )
}
