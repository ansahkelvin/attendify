import bcrypt from "bcrypt";
import {prisma} from "@/db/prisma";
import {NextRequest, NextResponse} from "next/server";


export async function POST(request: NextRequest){
    try{
        const body = await request.json()
        const {name, email, password} = body;

        if(!email || !name|| !password){
            return new NextResponse("Missing Name, email or password", {status: 400})
        }

        const exist = prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(!exist){
            return new NextResponse("Email is already in use", {status: 400})
        }

        const hashed_password = await  bcrypt.hash(password, 10);
        console.log(password, 'Actual password')
        console.log(hashed_password, 'this is hashed')

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashed_password
            }
        });
        return NextResponse.json(user);

    }catch (e) {
        console.log(e)
    }

}