"use client"
import CustomTab from "@/components/Tabs";
import {Button, Card, DatePicker, Select, SelectItem, TextInput} from "@tremor/react";
import {RiAddLine} from "@remixicon/react";
import {Popover,PopoverContent, PopoverTrigger} from "@nextui-org/react";


export default function Members() {

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
                            <Card className="w-96">
                                <label htmlFor="name"
                                       className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-4 ">
                                    Name
                                </label>
                                <TextInput className="mt-4" placeholder='Add name'/>

                                <div className='mt-4'>
                                    <label htmlFor="Title"
                                           className="text-tremor-default  text-tremor-content dark:text-dark-tremor-content mb-4 ">
                                        Role
                                    </label>
                                    <TextInput className="mt-4" placeholder='Add Role'/>

                                </div>


                                <div className='mt-4'>
                                    <label htmlFor="Profile"
                                           className="text-tremor-default  text-tremor-content dark:text-dark-tremor-content mb-4 ">
                                        Profile
                                    </label>
                                    <TextInput className="mt-4" placeholder='Profile'/>

                                </div>

                                <div className='mt-4'>
                                    <label htmlFor="StartDate"
                                           className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-4 ">
                                        Start Date
                                    </label>
                                    <DatePicker className='mt-4 ' placeholder='Start Date'/>
                                </div>

                                <div className='mt-4'>
                                    <label htmlFor="salary"
                                           className="text-tremor-default  text-tremor-content dark:text-dark-tremor-content mb-4 ">
                                        Salary
                                    </label>
                                    <TextInput className="mt-4" placeholder='GHC 10000'/>

                                </div>


                                <div className='mt-4'>
                                    <label htmlFor=""
                                           className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                        Department
                                    </label>
                                    <Select className='mt-4' defaultValue="1">
                                        <SelectItem value="1">Department</SelectItem>
                                        <SelectItem value="2">IT Department</SelectItem>
                                        <SelectItem value="3">Human Resource</SelectItem>
                                        <SelectItem value="3">Finance Department</SelectItem>
                                        <SelectItem value="3">Inventory Department</SelectItem>
                                    </Select>
                                </div>


                                <Button className="mt-8 w-full">
                                    Save
                                </Button>
                            </Card>
                        </PopoverContent>
                    </Popover>
                </div>

            </div>

            <p className='mt-5 text-gray-500 font-sm-'>
                Employee management is the cornerstone of a successful organization. It encompasses various aspects of overseeing and supporting employees throughout their journey within the company.
            </p>

            <div className='mt-12'>
                <CustomTab/>
            </div>
        </div>
    )
}