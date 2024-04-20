'use client'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import {Card} from "@tremor/react";

const localizer = momentLocalizer(moment)

const myEventsList = [
    {
        id: 1,
        title: 'Event 1',
        start: new Date(2024, 3, 10, 10, 0), // Year, Month (0-based), Day, Hour, Minute
        end: new Date(2024, 3, 10, 12, 0),
        allDay: false, // Set to true for all-day events
        resource: 'Room A', // Optional resource field
    },
    {
        id: 2,
        title: 'Event 2',
        start: new Date(2024, 3, 12, 14, 0),
        end: new Date(2024, 3, 12, 16, 0),
        allDay: false,
        resource: 'Room B',
    },
];

const MyCalendar = () => (
    <Card className ='m-5 w-[80%]'>
        <Calendar
            className={'w-full'}
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
        />
    </Card>
)

export default MyCalendar;