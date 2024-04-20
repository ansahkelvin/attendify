import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Here you could implement whatever logging logic you need.
    // For demonstration, we'll just log the request body and return a success message.

    console.log('Logging data:', req.body);

    // You might want to save this log to a file or a database instead.

    res.status(200).json({ success: true, message: 'Data logged successfully!' });
}