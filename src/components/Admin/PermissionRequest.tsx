"use client"
import {Button, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, TextInput} from "@tremor/react";
import {RiSearchLine} from "@remixicon/react";

export default function PermissionRequest() {
    const data = [
        {
            id: "210993",
            employee: {
                name: "Emmanuella Ansah",
                profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                department: "IT Department",
                role: "Web Developer"
            },
            estimationDate: "24-25 July",
            duration: "24 Hours",
            permissionDetails: "Sick Leave",
            status: "pending",
        },
        {
            id: "210993",
            employee: {
                name: "Felix Wiafe",
                profile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                department: "IT Department",
                role: "Software Engineer"
            },
            estimationDate: "1-7 July",
            duration: "1 Week",
            permissionDetails: "Sick Leave",
            status: "approved",
        },
        {
            id: "210993",
            employee: {
                name: "Kwame Krah",
                profile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                department: "IT Department",
                role: "Software Engineer"
            },
            estimationDate: "1-7 July",
            duration: "1 Week",
            permissionDetails: "Headache",
            status: "rejected",
        }
    ]
    return (
        <div className='mt-12'>
            <TextInput className='max-w-sm' icon={RiSearchLine} placeholder="Search..."/>
            <div>

                <Table className="mt-5">
                    <TableHead>
                        <TableRow className='bg-[#f5f5f5] rounded text-[#31363F]'>
                            <TableHeaderCell>ID</TableHeaderCell>
                            <TableHeaderCell>Employee</TableHeaderCell>
                            <TableHeaderCell>Estimation Date</TableHeaderCell>
                            <TableHeaderCell>Duration</TableHeaderCell>
                            <TableHeaderCell>Permission Details</TableHeaderCell>
                            <TableHeaderCell>Status</TableHeaderCell>
                            <TableHeaderCell>Action</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>
                                    <div className='flex gap-2 items-center'>
                                        <div className='w-10 h-10 rounded-full' style={{
                                            backgroundImage: `url(${item.employee.profile})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            transition: "filter 0.3s ease-in-out"
                                        }}>
                                        </div>
                                        <div>
                                            <h1 className='text-black font-medium'>{item.employee.name}</h1>
                                            <p className='text-gray-500 font-normal text-[12px]'>{item.employee.role}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {item.estimationDate}
                                </TableCell>
                                <TableCell>
                                    {item.duration}
                                </TableCell>

                                <TableCell>
                                    <div>{item.permissionDetails}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {item.status === "pending" && <div className='text-yellow-500'> {item.status}</div>}
                                    {item.status === "approved" && <div className='text-green-500'>{item.status}</div>}
                                    {item.status === "rejected" && <div className='text-red-600'>{item.status}</div>}
                                </TableCell>
                                <TableCell>
                                    {item.status === "rejected" && <div className='text-red-400'> Rejected</div>}
                                    {item.status === "approved" && <div className='text-green-500'>Approved</div> }
                                    {item.status === "pending" && <div className='flex items-center gap-2'>
                                        <Button className='bg-green-600 border-none'>Approve</Button>
                                        <Button className='bg-red-700 border-none'>Reject</Button>
                                    </div>}


                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}