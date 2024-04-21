import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/db/prisma";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const {name, email, profile_url, salary, department, role, startDate} = body;

    try {
        const findDepartment = await prisma.department.findFirst({
            where: {
                name: department
            }
        })
        if (!findDepartment) {
            return NextResponse.json({message: "Error finding department"})
        }
        const user = await prisma.employee.create({
            data: {
                email,
                name,
                profile_image: profile_url,
                salary,
                departmentId: findDepartment.id,
                role,
                date: startDate
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