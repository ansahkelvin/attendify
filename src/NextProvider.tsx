"use client"
import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import type {ReactNode} from "react";

interface NextProviderType {
    children: ReactNode
}

export default  function NextProvider({ children} : NextProviderType) {
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}