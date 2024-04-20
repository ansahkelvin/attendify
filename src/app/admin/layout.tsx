import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import React from "react";
import Header from "@/components/Header";
import {SessionProvider} from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Facial Recognition Attendance Application",
    description: "Attendance taking application with facial recognition",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <div className="fixed w-full h-[26px] z-[50]">
                <Header/>
            </div>

            <div className="grid grid-cols-6 h-screen w-full  dark:bg-dark-tremor-background dark:text-white' ">
                <div className='col-span-1 fixed left-0 top-24  bg-white border-r border-grey-200 border-opacity-15'>
                    <Sidebar/>
                </div>
                <div className='col-span-6 mt-24 pl-64 w-full'>
                    {children}
                </div>

            </div>


        </body>
        </html>
    );
}
