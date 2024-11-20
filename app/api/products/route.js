import {NextResponse} from "next/server"
import db from "../../../lib/db";
import { Console } from "console";
export async function POST(request){
    try{
        // const {
        //     barcode,
        //     description,
        //     farmerId,
        //     imageUrl,
        //     isActive,
        //     isWholesale,
        //     productCode,
        //     productPrice,
        //     productSalePrice,
        //     tags,
        //     productStock,
        //     quantity,
        //     sku,
        //     slug,
        //     title,
        //     unit,
        //     wholesalePrice,
        //     wholesaleQty,
        //     categoryId,
            
        // } = await request.json();
        const {
            barcode,
            description,
            farmerId,
            imageUrl,
            isActive,
            isWholesale,
            productCode,
            productPrice,
            productSalePrice,
            tags,
            productStock,
            quantity,
            sku,
            slug,
            title,
            unit,
            wholesalePrice,
            wholesaleQty,
            categoryId,
           
            
        } = await request.json();

        const existingProduct = await db.product.findUnique({
            where: {
                slug,
            },
        });

        if (existingProduct) {
            return NextResponse.json({
                data: null,
                message: "Prodyct is already exists."
            }, {
                status: 409
            });
        }
       
        const newProduct = await db.product.create({
            data: {
                barcode,
                description,
                farmerId,
                imageUrl,
                isActive,
                isWholesale,
                productCode,
                productPrice:parseFloat(productPrice),
                productSalePrice:parseFloat(productSalePrice),
                tags,
                productStock:parseInt(productStock),
                quantity:parseInt(quantity),
                sku,
                slug,
                title,
                unit,
                wholesalePrice:parseFloat(wholesalePrice),
                wholesaleQty:parseInt(wholesaleQty),
                categoryId,
               
                
            }
        });
        console.log(newProduct)
        return NextResponse.json(newProduct)

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create Product",
            error
        },{status:500})

    }
}

export async function GET(request){
    try{
       const getproduct = await db.product.findMany({
        orderBy:{
            createdAt:"desc",
        }
       });
        return NextResponse.json(getproduct)

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to fetch Product",
            error
        },{status:500})

    }
}