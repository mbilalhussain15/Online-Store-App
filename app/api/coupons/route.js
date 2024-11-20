import {NextResponse} from "next/server"
import db from "../../../lib/db";
import { data } from "autoprefixer";

export async function POST(request){
    try{
        const {title, couponCode, expiryDate,isActive} = await request.json();
        
        const newCoupon = await db.coupon.create({
            data:{
                title, couponCode, expiryDate,isActive
            }
        })
        console.log(newCoupon)
        return NextResponse.json(newCoupon)

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create Category",
            error
        },{status:500})

    }
}


export async function GET(request){
    try{
       const getCoupons = await db.coupon.findMany({
        orderBy:{
            createdAt:"desc",
        }
       });
        return NextResponse.json(getCoupons)

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to fetch Category",
            error
        },{status:500})

    }
}