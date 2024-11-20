import React from 'react'
import TableActions from '@/components/backoffice/TableActions'
import PageHeaderButton from '@/components/backoffice/PageHeaderButton'

export default function Farmer() {
  return (
    <div>
      <h2>Farmer</h2>
      {/* Heading */}
    <PageHeaderButton heading="Farmer" linkTitle="Add Farmer" href="/dashboard/farmers/new"/>
    <TableActions/>

    <div className='py-8'>
      <h2>Table</h2>
    </div>
    </div>
  )
}
