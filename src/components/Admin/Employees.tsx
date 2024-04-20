import {Button, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, TextInput} from "@tremor/react";
import {RiSearchLine} from "@remixicon/react";
import {RiEditLine} from "react-icons/ri";

export default function Employees(){
    const data = [
        {
            id: "2392039",
            name: "Emmanuella Osei Yeboah",
            profile: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            department: "IT Department",
            salary: "GHC 12,000",
            role: "Web Developer",
            startDate: "12th July, 2023",
        },
        {
            id: "2392040",
            name: "Prince Blenyi",
            profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            department: "IT Department",
            salary: "GHC 14,000",
            role: "Software Engineer",
            startDate: "5th September, 2022"
        },
        {
            id: "2392041",
            name: "Jefferey Owuraku Andoh",
            profile: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            department: "Marketing Department",
            salary: "GHC 10,000",
            role: "Marketing Manager",
            startDate: "20th January, 2023"
        },
        {
            id: "2392042",
            name: "Kofi Mensah",
            profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            department: "Finance Department",
            salary: "GHC 15,500",
            role: "Financial Analyst",
            startDate: "10th March, 2021"
        },
        {
            id: "2392043",
            name: "Abena Darko",
            profile: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            department: "Human Resources Department",
            salary: "GHC 11,200",
            role: "HR Coordinator",
            startDate: "3rd November, 2020"
        },
        {
            id: "2392044",
            name: "Yaw Owusu",
            profile: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            department: "Customer Support Department",
            salary: "GHC 9,800",
            role: "Customer Support Specialist",
            startDate: "15th May, 2022"
        }
    ];
    return(
        <div className='mt-12'>
            <TextInput className='max-w-sm' icon={RiSearchLine} placeholder="Search..."/>
            <div>
                <Table className="mt-5">
                    <TableHead>
                        <TableRow className='bg-[#f5f5f5] rounded text-[#31363F]'>
                            <TableHeaderCell>ID</TableHeaderCell>
                            <TableHeaderCell>Profile</TableHeaderCell>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Department</TableHeaderCell>
                            <TableHeaderCell>Role</TableHeaderCell>
                            <TableHeaderCell>Salary</TableHeaderCell>
                            <TableHeaderCell>Start Date</TableHeaderCell>
                            <TableHeaderCell>Actions</TableHeaderCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>
                                        <div className='w-10 h-10 rounded-full' style={{
                                            backgroundImage: `url(${item.profile})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            transition: "filter 0.3s ease-in-out"
                                        }}>
                                        </div>

                                </TableCell>
                                <TableCell>
                                    <div>
                                        {item.name}
                                    </div>

                                </TableCell>
                                <TableCell>
                                    <div>
                                        {item.department}

                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div>{item.role}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div>{item.salary}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div>{item.startDate}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => {console.log(item.id)}} className='bg-yellow-500 border-none'>
                                        <RiEditLine/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}