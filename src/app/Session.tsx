"use client"
import React from "react";
import {SessionProvider} from "next-auth/react";
import {Session} from "next-auth";

export default function SessionLayoutProvider({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionProvider>
        {children}
        </SessionProvider>
    );
}
