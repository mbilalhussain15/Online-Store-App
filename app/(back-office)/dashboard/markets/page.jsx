import React from 'react'
import TableActions from '@/components/backoffice/TableActions'
import PageHeaderButton from '@/components/backoffice/PageHeaderButton'

export default function Market() {
  return (
    <div>
      <h2>Market</h2>
      {/* Heading */}
    <PageHeaderButton heading="Market" linkTitle="Add Market" href="/dashboard/markets/new"/>
    <TableActions/>

    <div className='py-8'>
      <h2>Table</h2>
    </div>
    </div>
  )
}
