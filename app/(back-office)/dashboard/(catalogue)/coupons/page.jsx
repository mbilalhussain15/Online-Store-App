import React from 'react'
import TableActions from '@/components/backoffice/TableActions'
import PageHeaderButton from '@/components/backoffice/PageHeaderButton'

export default function Coupons() {
  return (
    <div>
      <h2>Coupons</h2>
      {/* Heading */}
    <PageHeaderButton heading="Coupons" linkTitle="Add Coupons" href="/dashboard/coupons/new"/>
    <TableActions/>

    <div className='py-8'>
      <h2>Table</h2>
    </div>
    </div>
  )
}
