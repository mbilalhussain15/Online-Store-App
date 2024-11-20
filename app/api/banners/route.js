import {NextResponse} from "next/server"
import db from "../../../lib/db";
import { data } from "autoprefixer";

export async function POST(request){
    try{
        const {title, link, imageUrl,isActive} = await request.json();
        
        const newBanner = await db.banner.create({
            data:{
                title, link, imageUrl,isActive
            }
        })
        console.log(newBanner)
        return NextResponse.json(newBanner)

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create Banner",
            error
        },{status:500})

    }
}

export async function GET(request){
    try{
       const banner = await db.banner.findMany({
        orderBy:{
            createdAt:"desc",
        }
       });
        return NextResponse.json(banner)

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to fetch Banner",
            error
        },{status:500})

    }
}