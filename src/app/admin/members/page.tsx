"use client"
import CustomTab from "@/components/Tabs";
import {Button, Card, DatePicker, DatePickerValue, Select, SelectItem, TextInput} from "@tremor/react";
import {RiAddLine} from "@remixicon/react";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";

import React, {useEffect, useState} from 'react';
import UploadCare from "@/components/Admin/UploadCare";
import {Department, Employee} from "@prisma/client";


export default function Members() {
    const [data, setData] = useState<Department[]>([])
    const [dataLoading, setDataLoading] = useState(false);
    const [image, setImage] = useState('');
    const [userInfo, setUserInfo] = useState({name: '', email: '', role: '', salary: '', department: '', profile_url: image})
    const [value, setValue] = useState<DatePickerValue>();
    const [employee, setEmployee] = useState<Employee[]>([])

    const submitEmployee = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
         const response = await fetch('/api/employee', {
             method: "POST",
             headers: {
                 "Content-Type" : "application/json",
             },
             body: JSON.stringify({
                 email: userInfo.email,
                 name: userInfo.name,
                 role: userInfo.role,
                 profile_url: image,
                 department: data,
                 salary: userInfo.salary,
                 date: value

             })
         })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData);

        } catch (e) {
            console.error('Error submitting employee data:', e);
        }
    }

    useEffect(() => {
        fetchDepartment().then()
        fetchEmployee().then()
    }, []);

    const fetchDepartment = async () => {
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
    }

    const fetchEmployee = async () => {
        setDataLoading(true)
        try {
            const response = await fetch('/api/employee', {
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
            setEmployee(data)

            // Perform actions based on the response data
        } catch (error) {
            setDataLoading(false)
            console.error("Failed to fetch data:", error);
            // Optionally update the state to show an error message
        } finally {
            setDataLoading(false)
        }
    }



    return (
        <div className='p-5'>
            <div className='flex items-center justify-between'>
                <div className='font-bold text-2xl'>
                    Employee Management
                </div>
                <div>
                    <Popover placement={"left-start"}>
                        <PopoverTrigger>
                            <Button variant="secondary" icon={RiAddLine}>
                                Add Employee
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <form onSubmit={submitEmployee}>
                                <Card className="w-96">
                                    <label htmlFor="name"
                                           className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-4 ">
                                        Name
                                    </label>
                                    <TextInput
                                        onChange={({target}) => {
                                            setUserInfo({...userInfo, name: target.value})
                                        }}
                                        value={userInfo.name}
                                        className="mt-4" placeholder='Add name'/>

                                    <div className='mt-4'>
                                        <label htmlFor="name"
                                               className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-4 ">
                                            Email
                                        </label>
                                        <TextInput
                                            onChange={({target}) => {
                                                setUserInfo({...userInfo, email: target.value})
                                            }}
                                            value={userInfo.email}
                                            className="mt-4" placeholder='Add name'/>

                                    </div>
                                        <div className='mt-4'>
                                            <label htmlFor="Role"
                                                   className="text-tremor-default  text-tremor-content dark:text-dark-tremor-content mb-4 ">
                                                Role
                                            </label>
                                            <TextInput
                                                onChange={({target}) => {
                                                    setUserInfo({...userInfo, role: target.value})
                                                }}
                                                value={userInfo.role}
                                                className="mt-4" placeholder='Add Role'/>

                                        </div>


                                        <div className='mt-4'>
                                            <>
                                                {image ?? <div className='pb-2'> {image} </div>}

                                                <UploadCare onUpload={(e) => {
                                                    setImage(e);
                                                    console.log(e);
                                                }}/>
                                            </>


                                        </div>

                                        <div className='mt-4'>
                                            <label htmlFor="StartDate"
                                                   className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-4 ">
                                                Start Date
                                            </label>
                                            <DatePicker
                                                value={value}
                                                onValueChange={(value) => setValue(value)}
                                                className='mt-4 ' placeholder='Start Date'/>
                                        </div>

                                        <div className='mt-4'>
                                            <label htmlFor="salary"
                                                   className="text-tremor-default  text-tremor-content dark:text-dark-tremor-content mb-4 ">
                                                Salary
                                            </label>
                                            <TextInput className="mt-4" placeholder='GHC 10000'/>

                                        </div>


                                        {data ? <div className='mt-4'>
                                                <label htmlFor=""
                                                       className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                                    Department
                                                </label>
                                                <Select className='mt-4'>
                                                    {data.map((department) => {
                                                        return <SelectItem key={department.id}
                                                                           value={department.id}>{department.name}</SelectItem>
                                                    })}

                                                    {/*<SelectItem value="2">IT Department</SelectItem>*/}
                                                    {/*<SelectItem value="3">Human Resource</SelectItem>*/}
                                                    {/*<SelectItem value="3">Finance Department</SelectItem>*/}
                                                    {/*<SelectItem value="3">Inventory Department</SelectItem>*/}
                                                </Select>
                                            </div>
                                            : <div>Loading</div>}

                                        <Button type="submit" className="mt-8 w-full">
                                            Save
                                        </Button>
                                </Card>
                            </form>
                        </PopoverContent>
                    </Popover>
                </div>

            </div>

            <p className='mt-5 text-gray-500 font-sm-'>
                Employee management is the cornerstone of a successful organization. It encompasses various aspects of
                overseeing and supporting employees throughout their journey within the company.
            </p>

            <div className='mt-12'>
                <CustomTab data = {employee}/>
            </div>
        </div>
    )
}