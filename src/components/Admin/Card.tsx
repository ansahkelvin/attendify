'use client'
import { BadgeDelta, Card } from '@tremor/react';

interface CardProps {
    title: string;
    number: string;
    increase: boolean;

}

export function CustomCard(props: CardProps) {
    return (
        <>
        <Card className="mx-auto max-w-sm">
            <div className="flex items-center justify-between">
                <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{props.title}</h4>
                <BadgeDelta
                    deltaType="moderateIncrease"
                    isIncreasePositive={props.increase}
                    size="xs"
                >
                    +9.3%
                </BadgeDelta>
            </div>
            <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{props.number}</p>
        </Card>
        </>
    );
}