import { PrismaClient, Product } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

type Error = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Product | Error>) {
    if(req.method === 'GET') {
        if(typeof req.query?.id === 'string') {
            const product = await prisma.product.findFirst({ 
                where: { id: { equals: req.query.id }}, 
                include: { avaliations: true, specifications: true }
            })
            if(product) res.status(200).json(product)
            else res.status(400).send({ message: 'Product not found' }) 
        } else res.status(400).send({ message: 'Invalid ID' }) 
    } else res.status(404).send({ message: 'Unsuported method' })
}