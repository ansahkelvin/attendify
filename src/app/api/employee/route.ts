import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/db/prisma";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const {name, email, profile_url, department, role} = body;

    try {
        const user = await prisma.employee.create({
            data: {
                email,
                name,
                profile_image: profile_url,
                departmentId: department,
                role,
            }
        })
        console.log(user);
        return NextResponse.json(user, {status: 200})
    } catch (e) {
        console.log(e)
        return NextResponse.json({error: e}, {status: 200})

    }
}

export async function GET() {
    try {
        const employee = await prisma.employee.findMany()
        console.log(employee, 'employee')
        return NextResponse.json(employee, {status: 200})
    } catch (e) {
        return NextResponse.json({error: e}, {status: 200})

    }
}

    export async function DELETE(){
    try{
        const employee = await prisma.employee.deleteMany()
        console.log(employee, 'employee')
        return NextResponse.json(employee, {status: 200})
    }catch (e) {

    }
}