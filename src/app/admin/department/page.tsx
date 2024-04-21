"use client"
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {
    Button,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    TextInput
} from "@tremor/react";
import {RiAddLine} from "@remixicon/react";
import React, {useEffect, useState} from "react";
import {RiEditLine} from "react-icons/ri";

interface Department {
    id: string;
    name: string;
    director: string;
}

export default function Department() {
    const [department, setDepartment] = useState({name: '', director: ''})
    const [data, setData] = useState<Department[]>([])
    const [loading, setLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);


    const submitDepartment = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent default form submission behavior
        setLoading(true);

        try {
            const response = await fetch('/api/department', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(department)
            });

            if (response.ok) {
                const newDepartment = await response.json();
                setData(prev => [...prev, newDepartment]); // Optimistic UI update
                setDepartment({name: '', director: ''}); // Clear form
                alert('Department added successfully');
            } else {
                throw new Error('Failed to add department');
            }
        } catch (e) {
            console.error(e);
            alert('Failed to add department');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setDataLoading(true)
            try {
                const response = await fetch('/api/department', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);

                setDataLoading(false)
                setData(data)

                // Perform actions based on the response data
            } catch (error) {
                setDataLoading(false)
                console.error("Failed to fetch data:", error);
                // Optionally update the state to show an error message
            } finally {
                setDataLoading(false)
            }
        };

        fetchData();
    }, []);

    if (!data) return <p>Loading...</p>;


    return <div className='p-5'>
        <div className='flex items-center justify-between'>
            <div className='font-bold text-2xl'>
                Departments
            </div>
            <div>
                <Popover placement={"left-start"}>
                    <PopoverTrigger>
                        <Button variant="secondary" icon={RiAddLine}>
                            Add Department
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <form onSubmit={submitDepartment}>
                            <Card className="w-96">
                                <label htmlFor="name"
                                       className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-4 ">
                                    Name
                                </label>
                                <TextInput
                                    value={department.name}
                                    onChange={(e) => {
                                        setDepartment({...department, name: e.target.value})
                                    }}
                                    className="mt-4" placeholder='Add name'/>
                                <div className='mt-4'>
                                    <label htmlFor="Director"
                                           className="text-tremor-default  text-tremor-content dark:text-dark-tremor-content mb-4 ">
                                        Director
                                    </label>

                                    <TextInput
                                        onChange={(e) => {
                                            setDepartment({...department, director: e.target.value})
                                        }}
                                        value={department.director}
                                        className="mt-4" placeholder='Add Director'/>
                                </div>
                                <Button
                                    loading={loading}
                                    type="submit" className="mt-8 w-full">
                                    Save
                                </Button>
                            </Card>
                        </form>
                    </PopoverContent>
                </Popover>
            </div>

        </div>




        <div className='mt-12'>
            {dataLoading ? <div> Loading </div> : <div>
                <Table className="mt-5">
                    <TableHead>
                        <TableRow className='bg-[#f5f5f5] rounded text-[#31363F]'>
                            <TableHeaderCell>ID</TableHeaderCell>

                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Department Director</TableHeaderCell>

                            <TableHeaderCell>Actions</TableHeaderCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.id}>

                                <TableCell>
                                    {item.id}
                                </TableCell>

                                <TableCell>
                                    <div className="text-black">
                                        {item.name}
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div>
                                        {item.director}
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <Button onClick={() => {
                                        console.log(item.id)
                                    }} className='bg-yellow-500 border-none'>
                                        <RiEditLine/>
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>}


        </div>
    </div>
}