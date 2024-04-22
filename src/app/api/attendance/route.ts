import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/db/prisma";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, date, time, status} = body;

    try {
        const attendance = await prisma.attendance.create({
            data: {
                date: date,
                timeReported: time,
                name,
                status,
            }
        })
        console.log(attendance)

        return NextResponse.json(attendance)
    } catch (e) {
        console.log(e)
        return NextResponse.json(e);

    }

}

export async function GET(){
    try{
        const attendance =  await prisma.attendance.findMany();
        return NextResponse.json(attendance)
    }catch (e) {
        return NextResponse.json(e);
    }

}

