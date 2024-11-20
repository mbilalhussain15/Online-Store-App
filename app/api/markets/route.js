import {NextResponse} from "next/server"
import db from "../../../lib/db";

export async function POST(request){
    try{
        const {
            title,       
            slug ,      
            domainName, 
            imageUrl,     
            description, 
            isActive,
            categoryId
        } = await request.json();
        

        const existingMarket = await db.market.findUnique({
            where: {
                slug,
            },
        });

        if (existingMarket) {
            return NextResponse.json({
                data: null,
                message: "Market is already exists."
            }, {
                status: 409
            });
        }


        const newMarket = await db.market.create({
            data:{
                title,       
                slug,      
                domainName, 
                imageUrl,     
                description, 
                isActive,
                categoryId
            }
        })
        console.log(newMarket)
        return NextResponse.json(newMarket)

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create Market",
            error
        },{status:500})

    }
}


export async function GET(request){
    try{
       const getMarket = await db.market.findMany({
        orderBy:{
            createdAt:"desc",
        }
       });
        return NextResponse.json(getMarket)

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to fetch Market",
            error
        },{status:500})

    }
}