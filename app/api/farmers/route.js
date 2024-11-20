import {NextResponse} from "next/server"
import db from "../../../lib/db";
import { data } from "autoprefixer";

export async function POST(request){
    try{
        // userId,
        // code,
        // contactPerson,
        // contactPersonPhone,
        // email,
        // name,
        // notes,
        // phone,
        // physicalAddress,
        // terms,
        // profileImageUrl,
        // isActive
        const farmerData = await request.json();
        
        const newFarmerProfile = await db.farmerProfile.create({
            data:{
                userId: farmerData.userId,
                code: farmerData.code,
                contactPerson: farmerData.contactPerson,
                contactPersonPhone: farmerData.contactPersonPhone,
                email: farmerData.email,
                name: farmerData.name,
                notes: farmerData.notes,
                phone: farmerData.phone,
                physicalAddress: farmerData.physicalAddress,
                terms: farmerData.terms,
                profileImageUrl: farmerData.profileImageUrl,
                isActive: farmerData.isActive,
            }
        })
        console.log(newFarmerProfile)
        return NextResponse.json(newFarmerProfile)

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create Farmer",
            error
        },{status:500})

    }
}
export async function GET(request){
    try{
       const farmerProfile = await db.farmerProfile.findMany({
        orderBy:{
            createdAt:"desc",
        }
       });
        return NextResponse.json(farmerProfile)

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to fetch farmer profile",
            error
        },{status:500})

    }
}