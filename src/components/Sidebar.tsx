"use client"
import {usePathname} from "next/navigation";
import { GoOrganization } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineDocumentReport } from "react-icons/hi";

import Link from "next/link";
import React, {ReactNode} from "react";


interface LinkProps {
    title: string;
    link: string;
    isActive: boolean;
    icon: ReactNode
}

export default function Sidebar() {
    const route = usePathname();
    const link: LinkProps[] = [
        {
            title: "Dashboard",
            link: '/admin',
            isActive: route === "/admin",
            icon: <MdOutlineDashboard/>
        },
        {
            title: "Attendance",
            link: '/admin/attendance',
            isActive: route === "/admin/attendance",
            icon: <GoOrganization/>
        },
        {
            title: "Members",
            link: '/admin/members',
            isActive: route === "/admin/members",
            icon: <SlPeople/>
        },
        // {
        //     title: "Schedule",
        //     link: '/admin/schedule',
        //     isActive: route === "/admin/schedule",
        //     icon: <CiCalendarDate/>
        // },
        {
            title: "Report",
            link: '/admin/report',
            isActive: route === "/admin/report",
            icon: <HiOutlineDocumentReport/>
        },


    ]
    return (
        <div className='h-screen p-5 flex flex-col w-64'>
            <div className={`flex flex-col gap-10 text-sm text-center`}>
                {link.map((item) => {
                    return <div
                        key={item.title}
                        className={`flex items-center text-black dark:text-white px-5 
                         ${item.isActive && 'bg-black py-3 rounded-lg  dark:text-white text-white'}`}
                       >
                        <Link className='flex items-center gap-5' href={item.link}>
                           {item.icon}
                            {item.title}
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}