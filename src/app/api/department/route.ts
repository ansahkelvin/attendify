import {prisma} from "@/db/prisma";
import {NextApiRequest, NextApiResponse} from "next";
import {NextRequest, NextResponse} from "next/server";



export async function POST(req: NextRequest, res: NextApiResponse) {
    try {
        const body = await req.json()
        const { name, director } = body;

        const newDepartment = await prisma.department.create({
            data: {
                name,
                director
            }
        });

        return NextResponse.json(newDepartment);
    } catch (e: any) {
        console.error(e);
        return new NextResponse(e.toString(), {status: 500})
    }
}


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try{
        const departments = await prisma.department.findMany();


        console.log(departments);

        return NextResponse.json(departments);

    } catch (e) {
        console.error(e);
    }
}


