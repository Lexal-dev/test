import { NextApiRequest, NextApiResponse } from 'next';


export default async function test(req: NextApiRequest, res: NextApiResponse) {
    try {
        res.status(200).json({ message: 'Success loading'});
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}