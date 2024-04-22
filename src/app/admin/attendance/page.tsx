"use client"
import {
    Card,
    Select,
    SelectItem,
    Table,
    TableBody, TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    TextInput
} from "@tremor/react";
import { RiSearchLine} from "@remixicon/react";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {useEffect, useState} from "react";
import {DateTime} from "next-auth/providers/kakao";
import moment from "moment";

//
// const data = [
//     {
//         name: 'Emmanuella Osei',
//         date: "21/03/2024",
//         time: "08:45 am",
//         profile: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         status: 'Late',
//     },
//     {
//         name: 'Prince Blenyi',
//         date: "21/03/2024",
//         time: "07:45 am",
//         profile: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//
//         status: 'On-time',
//     },
//     {
//         name: 'Jefferey Owuraku Andoh',
//         date: "21/03/2024",
//         time: "07:45 am",
//         profile: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         status: 'Early',
//     },
//     {
//         name: 'Michael Owusu',
//         date: "21/03/2024",
//         time: "07:45 am",
//         profile: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         status: 'Early',
//     },
//     {
//         name: 'Philip Addo',
//         date: "21/03/2024",
//         time: "07:45 am",
//         profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         status: 'Early',
//     },
//     {
//         name: 'Addo Danquah',
//         date: "21/03/2024",
//         time: "07:45 am",
//         profile: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         status: 'On-time',
//     },
//     {
//         name: 'Donald Trump',
//         date: "21/03/2024",
//         time: "08:45 am",
//         profile: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         status: 'Late',
//     },
// ];

export interface Attendance {
    id :          string
    date  :       DateTime
    name:         string
    profile:      string
    status:        string
    timeReported:  DateTime

}

export default function Attendance() {

    const [attendance, setAttendance] = useState<Attendance[]>([]);


    useEffect(() => {
        loadAttendance().then()
    }, []);
    const loadAttendance = async () => {
        const aiURL = "http://127.0.0.1:8000/predictions";
        const att = await fetch('/api/attendance', {
            method: "GET",

        })
        const response = await att.json()
        setAttendance(response)

        console.log(attendance);
    }




    return <div className='p-10'>
       <h1 className='font-bold text-2xl'>
           Attendance Monitoring
       </h1>
        <p className='text-gray-500 text-sm mt-3'> Effective attendance monitoring is essential for creating a productive and motivated workforce. By adopting best practices, leveraging technology, and promoting a culture of accountability, organizations can optimize attendance management, enhance productivity, and achieve their business goals effectively.</p>

        <div>
            <div className='mt-10'>
                <Card>

                        <Table className="mt-5">
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell>Name</TableHeaderCell>
                                    <TableHeaderCell>Date</TableHeaderCell>
                                    <TableHeaderCell>Time</TableHeaderCell>
                                    <TableHeaderCell>Status</TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {attendance.map((item) => (
                                    <TableRow key={item.name}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>
                                            {moment(item.date).format('YYYY-MM-DD')}
                                        </TableCell>
                                        <TableCell>
                                            {  moment(item.timeReported).format('HH:mm:ss') }
                                        </TableCell>

                                        <TableCell>
                                            <div className={`w-20 rounded text-center flex items-center justify-center text-white h-10 ${item.status === 'Early' && 'bg-green-600'}  ${item.status === 'Late' && 'bg-red-500'} ${item.status === 'On-time' && 'bg-yellow-500'}`}>
                                                {item.status}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>

            </div>

        </div>

    </div>
}