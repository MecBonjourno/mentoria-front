import { PrismaClient, Product } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

type Error = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[] | Error>) {
    if(req.method === 'GET') {
        const products = await prisma.product.findMany()
        res.status(200).json(products)
    } else {
        res.status(404).send({ message: 'Unsuported method' })
    }
}