"use client"
import {CustomAreaChart} from "@/components/Admin/AreaGraph";
import {CustomCard} from "@/components/Admin/Card";
import CustomLineChart from "@/components/Admin/LineChart";
import {useSession} from "next-auth/react";
import {useEffect} from "react";
import {useRouter} from "next/navigation";


export default function AdminDashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;  // Do nothing while loading
        if (status === "unauthenticated") {
            router.push('/auth/signin');  // Redirect to sign-in if unauthenticated
        }
    }, [status, router]);  // Include 'router' and 'status' in the dependency array

    if (status === "loading") {
        return <p>Loading...</p>;  // Optionally render a loading indicator
    }


    return <div className='m-10'>
        <div>
            <h1 className='font-bold text-2xl text-black'>Attendance Summary</h1>
            <p className='text-gray-500 text-sm mt-2'>The attendance is being updated on a daily basis</p>
        </div>
        <div className='flex items-center space-x-7 justify-between my-10'>
            <CustomCard title={"Total Present"} number={"200"} increase={false}/>
            <CustomCard title={"Total Absent"} number={"15"} increase={false}/>
            <CustomCard title={"Total Late"} number={"20"} increase={true}/>
        </div>
        <div>
            <div className='mb-10'>
                <CustomLineChart/>
            </div>
        </div>
        <h1 className='font-bold text-2xl text-black mb-5'>Departments </h1>
        <CustomAreaChart/>
    </div>
}