import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import {getUserFromDb} from "@/helpers/db";
import bcrypt from "bcrypt";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@/db/prisma";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "email", type: "text", placeholder: "group@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                console.log("Credentials received:", credentials);
                if (!credentials) return null;

                try {
                    const user = await getUserFromDb(credentials.email);
                    if (!user) return null;

                    const isValid = await bcrypt.compare(credentials.password, user.password);
                    if (!isValid) return null;

                    return user;
                } catch (error) {
                    console.error("Error in authorization:", error);
                    return null;
                }
            },

        })
    ],
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV ==='development',
    pages: {
        signIn: '/auth/signin',  // Assuming you have a custom sign-in page at app/auth/signin.tsx
    },
    // callbacks: {
    //     jwt: async ({ token, user }) => {
    //         if (user) {
    //             token.id = user.id;
    //         }
    //         return token;
    //     },
    //     session: async ({ session, token }) => {
    //         if (token) {
    //             session.user!.id = token.id as string;
    //         }
    //         return session;
    //     }
    // }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };