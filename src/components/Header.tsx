"use client"
import Image from "next/image";
import {Button} from '@tremor/react'
import {CiMenuBurger} from "react-icons/ci";
import {signOut, useSession} from "next-auth/react";

export default function Header(){
    const session = useSession()
    const handleLogout = async () => {
        // Call the signOut method
        await signOut({
            redirect: false,
            callbackUrl: `${window.location.origin}/auth/signin`
        });
    };
    return <div className="flex flex-col z-[50]">
        <div className=' flex flex-row border-b pb-2 items-center bg-white justify-between pt-5 px-10'>
            <div className='flex items-center gap-5'>
                <CiMenuBurger onClick={() => console.log("menu")}/>
                <h1 className='font-normal dark:text-white'>Attendify</h1>
            </div>

            <div className='flex items-center gap-2'>
                <Image className='rounded-full'
                       src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                       alt='avatar' width={50} height={50}/>
                <div className='pr-5'>
                    <h1 className='text-sm font-normal'>{session.data?.user.name}</h1>
                    <div className='text-gray-500 text-[12px]'>
                        {session.data?.user.email}
                    </div>
                </div>
                <Button onClick={handleLogout}>
                    Logout
                </Button>
            </div>


        </div>
    </div>
}