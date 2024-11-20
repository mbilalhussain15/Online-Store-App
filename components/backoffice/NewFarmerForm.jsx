"use client"
import React, { useState } from 'react'
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SubmitButton from '@/components/FormInputs/SubmitButton'
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import {useForm} from 'react-hook-form'
import { useRouter } from 'next/navigation';
import ToggleInput from "@/components/FormInputs/ToggleInput"
import ImageUpload from "@/components/FormInputs/ImageUpload"
import generateUserCode from "@/lib/generateUserCode"

export default function NewFarmerForm({user}) {

  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [imageUrl,setImageUrl]= useState("")
  const [loading, setLoading] = useState(false);
  const {register,reset,watch,handleSubmit,formState:{errors}}= useForm({
    defaultValues:{
        isActive:true,
        ...user
    }
  });
  const router = useRouter();
  function redirect(){
    router.push('/dashboard/farmers');
  }

  const isActive = watch("isActive");
  async function onSubmit(data) {
  {/* 
      id = autogenerated
      title
      code= autogenerated
      description
      validity date
      */}

  

    const code = generateUserCode("LFF",data.name);
    data.code = code;
    data.userId=user?.id
    data.imageUrl = imageUrl;
    data.isActive = isActive;
    console.log("ImageUrl= "+data.imageUrl);
    makePostRequest(
      setLoading,
      "api/farmers",
      data,
      "Farmer Profile",
      reset,
      redirect
    )
    setImageUrl("");
    // if (isUpdate) {
    //   // Update request
    //   makePutRequest(
    //     setLoading,
    //     `api/categories/${initialData.id}`,
    //     data,
    //     "Category",
    //     redirect,
    //     reset
    //   );
    // } else {
    //   makePostRequest(setLoading, "api/categories", data, "Category", reset);
    // }
  }
  return (
    <div>
     
    
    
       {/* Form */}
       <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Farmer's Full Name"
            name="name"
            register={register}
            errors={errors}
            className="w-full"
          />
        <TextInput
            label="Farmer's Phone"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
           <TextInput
            label="Farmer's Email Address"
            name="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Contact Person Phone"
            name="contactPersonPhone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label="Farmer's Payment Terms"
            name="terms"
            register={register}
            errors={errors}
            isRequired={false}
            
            
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
          <ImageUpload
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            label="Profile Image"
           />
          <ToggleInput
            label="Farmer Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            errors={errors}
            />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Farmer"
          loadingButtonTitle="Creating Farmer  please wait..."
        />
      </form>

    </div>
  )
}