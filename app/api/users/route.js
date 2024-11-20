import {NextResponse} from "next/server"
import db from "../../../lib/db";
import bcrypt from "bcrypt";


export async function POST(request){
    try{
        const {name,email,password,role} = await request.json();
        const existingUser = await db.user.findUnique({
            where: {
                email,
            },
        });
        if (existingUser) {
            return NextResponse.json({
                data: null,
                message: "User is already exists."
            }, {
                status: 409
            });
        }
        const hashPassword= await bcrypt.hash(password,10);
        const newUser = await db.user.create({
            data: { name,email,password:hashPassword,role }
        });

        return NextResponse.json(
            {
                data: newUser,
                message: "User Created Successfully"
            }, {
                status: 201
            }
        );

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
           error,
            message: "Server Error: Something went wrong",
           
        },{status:500})

    }
}

export async function GET(request){
    try{
       const getUser = await db.user.findMany({
        orderBy:{
            createdAt:"desc",
        }
       });
        return NextResponse.json(getUser)

    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to fetch User",
            error
        },{status:500})

    }
}