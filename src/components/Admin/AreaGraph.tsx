'use client'
import {BarChart, Card} from '@tremor/react';

const chartdata = [
    {
        name: 'IT Department',
        'Number of threatened species': 2488,
    },
    {
        name: 'Human Resource',
        'Number of threatened species': 1445,
    },
    {
        name: 'Finance Department',
        'Number of threatened species': 743,
    },
    {
        name: 'Customer Service',
        'Number of threatened species': 281,
    },
    {
        name: 'Call Center',
        'Number of threatened species': 251,
    },
    {
        name: 'Administration',
        'Number of threatened species': 232,
    },
 
];

const dataFormatter = (number: number) =>
    Intl.NumberFormat('us').format(number).toString();

export const CustomAreaChart = () => (
    <Card>
    <BarChart
        data={chartdata}
        index="name"
        categories={['Number of threatened species']}
        colors={['blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
        onValueChange={(v) => console.log(v)}
    />
    </Card>
);