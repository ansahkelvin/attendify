"use client"

import {Card, LineChart} from '@tremor/react';

const chartdata = [
    {
        date: 'Jan 22',
        IT: 89,
        HR: 78,
    },
    {
        date: 'Feb 22',
        IT: 92,
        HR: 80,
    },
    {
        date: 'Mar 22',
        IT: 95,
        HR: 85,
    },
    {
        date: 'Apr 22',
        IT: 87,
        HR: 76,
    },
    {
        date: 'May 22',
        IT: 91,
        HR: 82,
    },
    {
        date: 'Jun 22',
        IT: 88,
        HR: 79,
    },
    {
        date: 'Jul 22',
        IT: 93,
        HR: 83,
    },
    {
        date: 'Aug 22',
        IT: 90,
        HR: 81,
    },
    {
        date: 'Sep 22',
        IT: 94,
        HR: 84,
    },
    {
        date: 'Oct 22',
        IT: 86,
        HR: 75,
    },
    {
        date: 'Nov 22',
        IT: 89,
        HR: 78,
    },
    {
        date: 'Dec 22',
        IT: 92,
        HR: 80,
    },
];


const valueFormatter = function (number: number) {
    return number.toString(); // Assuming attendance numbers are integers
};

export default function CustomLineChart() {
    return (
        <Card>
            <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Attendance over time</h3>
            <LineChart
                className="mt-4 h-72"
                data={chartdata}
                index="date"
                yAxisWidth={65}
                categories={['IT', 'HR']}
                colors={['green', 'blue']} // Customize colors as needed
                valueFormatter={valueFormatter}
            />
        </Card>
    );
}
