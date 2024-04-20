import {prisma} from "@/db/prisma";

export async function getUserFromDb(email: string): Promise<any | null> {
    try {
        return await prisma.user.findUnique({
            where: {
                email: email
            }
        });
    } catch (error) {
        console.error('Error retrieving user from DB:', error);
        throw error;
    }
}