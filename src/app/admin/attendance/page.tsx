"use client"
import {
    Badge,
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
import {RiFlag2Line, RiSearchLine} from "@remixicon/react";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";

const data = [
    {
        name: 'Emmanuella Osei',
        date: "21/03/2024",
        time: "08:45 am",
        profile: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        status: 'Late',
    },
    {
        name: 'Prince Blenyi',
        date: "21/03/2024",
        time: "07:45 am",
        profile: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        status: 'On-time',
    },
    {
        name: 'Jefferey Owuraku Andoh',
        date: "21/03/2024",
        time: "07:45 am",
        profile: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'Early',
    },
    {
        name: 'Michael Owusu',
        date: "21/03/2024",
        time: "07:45 am",
        profile: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'Early',
    },
    {
        name: 'Philip Addo',
        date: "21/03/2024",
        time: "07:45 am",
        profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'Early',
    },
    {
        name: 'Addo Danquah',
        date: "21/03/2024",
        time: "07:45 am",
        profile: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'On-time',
    },
    {
        name: 'Donald Trump',
        date: "21/03/2024",
        time: "08:45 am",
        profile: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'Late',
    },
];

export default function Attendance() {


    return <div className='p-10'>
       <h1 className='font-bold text-2xl'>
           Attendance Monitoring
       </h1>
        <p className='text-gray-500 text-sm mt-3'> Effective attendance monitoring is essential for creating a productive and motivated workforce. By adopting best practices, leveraging technology, and promoting a culture of accountability, organizations can optimize attendance management, enhance productivity, and achieve their business goals effectively.</p>

        <div>
            <div className='mt-10'>
                <Card>
                    <div className='flex flex-wrap items-center justify-between mb-10'>
                        <div className=' w-96 '>
                            <TextInput icon={RiSearchLine} placeholder="Search..."/>
                        </div>

                        <div className='flex  items-center gap-3'>
                            <Select defaultValue="1">
                                <SelectItem value="1"> Sort by</SelectItem>
                                <SelectItem value="2">Latest</SelectItem>
                                <SelectItem value="3">Older</SelectItem>
                            </Select>


                            <Select defaultValue="1">
                                <SelectItem value="1"> Filter</SelectItem>
                                <SelectItem value="2">Premium</SelectItem>
                                <SelectItem value="3">Free</SelectItem>
                            </Select>
                            <div className='text-sm text-grey-200'>Show</div>
                            <Select style={{width: '24px'}} defaultValue="1">
                                <SelectItem value="1"> 10</SelectItem>
                                <SelectItem value="2">15</SelectItem>
                                <SelectItem value="3">20</SelectItem>
                            </Select>


                            <div
                                className=' border rounded-full w-[20px] h-[20px] text-center text-grey-200 flex items-center '>
                                <BsArrowLeftShort onClick={() => {
                                }}/>
                            </div>
                            <div
                                className='border rounded-full w-[20px] h-[20px] text-center text-grey-200 flex items-center'>
                                <BsArrowRightShort onClick={() => {
                                }}/>
                            </div>
                        </div>
                    </div>


                        <Table className="mt-5">
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell>Profile</TableHeaderCell>
                                    <TableHeaderCell>Name</TableHeaderCell>
                                    <TableHeaderCell>Date</TableHeaderCell>
                                    <TableHeaderCell>Time</TableHeaderCell>
                                    <TableHeaderCell>Status</TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item) => (
                                    <TableRow key={item.name}>
                                        <TableCell>
                                            <div className='w-12 h-12 rounded-full' style={{  backgroundImage: `url(${item.profile})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                transition: "filter 0.3s ease-in-out"}}>

                                            </div>
                                        </TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>
                                            {item.date}
                                        </TableCell>
                                        <TableCell>
                                            {item.time}
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