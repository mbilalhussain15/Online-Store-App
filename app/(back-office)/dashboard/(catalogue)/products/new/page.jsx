import React from 'react'
import NewProductForm from "@/components/backoffice/NewProductForm"
import getData from "@/lib/getData1"

export default async function NewProduct() {

  const categoriesData =  await getData("categories");
  const usersData =  await getData("users");
  const farmerData = usersData.filter((user)=> user.role ==="FARMER")
  const farmers =  farmerData.map((farmer)=>{
    return{
      id:farmer.id,
      title:farmer.name
    };
  });

  const categories =  categoriesData.map((category)=>{
    return{
      id:category.id,
      title:category.title
      
    };
  });

  console.log(categories);
  return <NewProductForm categories ={categories} farmers = {farmers}/>
}
