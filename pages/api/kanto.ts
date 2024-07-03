import { NextApiRequest, NextApiResponse } from 'next';
import Kanto from '@/lib/models/kanto'; // Assurez-vous que le chemin vers votre modèle est correct
import sequelizeInstance from '../../lib/sequelize'; // Assurez-vous que le chemin vers votre instance Sequelize est correct

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await sequelizeInstance.authenticate();
        const pokemons = await Kanto.findAll(); 
        res.status(200).json({ message: 'Success', data: pokemons });
    } catch (error: any) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}