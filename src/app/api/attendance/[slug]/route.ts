import {prisma} from "@/db/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest){
    const param = await req.json()
    try{
        const attendance =  await prisma.attendance.findMany();
        return NextResponse.json(attendance)
    }catch (e) {
        return NextResponse.json(e);
    }

}

