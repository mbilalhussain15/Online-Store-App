"use client"
import React, { useState } from 'react'
import FormHeader from '@/components/backoffice/FoarmHeader'
import NewFarmerForm from "@/components/backoffice/NewFarmerForm"

export default function NewFarmer() {

  
  return (
    <div>
     
    
      <FormHeader title="New Farmer"/>
       {/* Form */}
       <NewFarmerForm/>

    </div>
  )
}
