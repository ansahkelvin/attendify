// pages/api/createFaceList.js
import fetch from 'node-fetch';
import {NextApiRequest, NextApiResponse} from "next";
import {NextRequest, NextResponse} from "next/server";

export async function PUT (req: NextRequest, res: NextApiResponse) {
    const body = await req.json();
    const { faceListId, name, userData } = body

    const url = `${process.env.AZURE_FACE_ENDPOINT}/facelists/${faceListId}`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': process.env.AZURE_FACE_KEY as string
            },
            body: JSON.stringify({
                name,
                userData
            })
        });
        if (!response.ok) throw new Error('Failed to create FaceList');
        return new NextResponse( 'FaceList created successfully', {status: 200} )

    } catch (error) {
        console.error(error);
    }
}

export  async function POST (req: NextRequest, res: NextApiResponse) {

    const body = await req.json();
    const { name, profile_url } = body;

    const url = `${process.env.AZURE_FACE_ENDPOINT}/facelists/${name}/persistedFaces`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': process.env.AZURE_FACE_KEY as string
            },
            body: JSON.stringify({
                url: profile_url
            })
        });

        const data = await response.json();
        console.log(data, 'data')

        if (!response.ok) throw new Error( 'Failed to add face to FaceList');

        return new NextResponse( "Good")
    } catch (error) {
        console.error(error);
        // res.status(500).json({ message: error.message });
    }
}


// export {handler as PUT, handler as POST}