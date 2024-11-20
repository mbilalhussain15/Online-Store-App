"use client"
import React, { useState } from 'react'
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import ImageInput from "@/components/FormInputs/ImageInput"
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import generateSlug from '@/lib/generateSlug'
import FormHeader from '@/components/backoffice/FoarmHeader'
import {useForm} from 'react-hook-form'
import { title } from 'process';
import ToggleInput from "@/components/FormInputs/ToggleInput"
import { useRouter } from 'next/navigation';
import ImageUpload from "@/components/FormInputs/ImageUpload"
import ArrayItemsInput from "@/components/FormInputs/ArrayItemsInput"
import generateUserCode from '@/lib/generateUserCode';


export default function NewProductForm({categories,farmers}) {



  const [tags, setTags] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const {register,reset,watch,handleSubmit,formState:{errors}}= useForm({
    defaultValues:{
        isActive:true,
        isWholesale:false
    }
  });
  const router = useRouter();
  function redirect(){
    router.push('/dashboard/products');
  }

  const isActive = watch("isActive");
  const isWholesale = watch("isWholesale");

  async function onSubmit(data) {



    console.log(data);
    const productCode = generateUserCode("LLP",data.title);
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl= imageUrl;
    data.quantity=1
    data.isActive = isActive;
    data.tags = tags;
    data.productCode=productCode;
    console.log(data.buttonTitle)
    makePostRequest(
      setLoading,
      "api/products",
      data,
      "Product",
      reset,
      redirect
    )
    setImageUrl("");

  }
  return (
    <div>
     
    
      <FormHeader title="New Product"/>
       {/* Form */}
       <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
           
          />
           <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
           <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Sale Price (Discounted)"
            name="productSalePrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
           <TextInput
              label="Product Stock"
              name="productStock"
              register={register}
              errors={errors}
              type="number"
              className="w-full"
          />
            <TextInput
              label="Unit of Measurement (eg Killograms)"
              name="unit"
              register={register}
              errors={errors}
              className="w-full"
          />
          
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            options={categories}
            className="w-full"
            
          />
          <SelectInput
            label="Select Farmer"
            name="farmerId"
            register={register}
            errors={errors}
            options={farmers}
            className="w-full"
            
          />
           <ToggleInput
            label="Supports Wholesale Selling"
            name="isWholesale"
            trueTitle="Supported"
            falseTitle="Not Supported"
            register={register}
            errors={errors}
            />
             {
              isWholesale&&(
                <>
                <TextInput
              label="Wholesale Price"
              name="wholesalePrice"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
              isRequired={false}
              
          />
           <TextInput
              label="Minium Wholesale Quantity"
              name="wholesaleQty"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
              isRequired={false}
          />
                </>
              )
             }
         
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
           
          />
            <ArrayItemsInput setItems={setTags} items={tags} itemTitle="Tag" />
           <ImageUpload
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            label="Product Image"
           />
            <ToggleInput
            label="Publish your Product"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            errors={errors}
            />
           
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          loadingButtonTitle="Creating Product please wait..."
        />
      </form>

    </div>
  )
}
