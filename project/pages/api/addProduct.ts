import { PrismaClient, Product } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type Error = {
  message: string;
};

const USERS = [
  "Leonardo Scholler",
  "Guilherme Zago",
  "Carolina de Abreu Pereira",
  "Jeniffer Bittencourt",
  "Deivid Moscon",
  "Filipe Bachini",
];

const COMMENTS = [
  "Sapiente veritatis repellat reiciendis nostrum tempore magni omnis aspernatur in debitis expedita officiis, quisquam quos non excepturi? Veritatis eaque animi voluptatem porro?",
  "Esse obcaecati laboriosam praesentium inventore delectus quo corporis ex! Distinctio iure reprehenderit fuga omnis error beatae earum officiis maiores, at repellendus exercitationem?",
  "Nam quia recusandae dolores magni nobis laboriosam officia, repellendus atque modi ipsum nihil officiis vitae earum, adipisci distinctio dolorem quas, ab vero.",
  "Illo aperiam numquam cupiditate, itaque nulla fugit nostrum distinctio similique, dolores delectus perspiciatis placeat aspernatur blanditiis? Ullam distinctio accusamus delectus eveniet laboriosam.",
  "Officia, at repudiandae aliquam voluptatum officiis placeat rem atque, laboriosam vitae in iste veritatis, commodi quasi dolorum et tenetur! At, animi saepe?",
  "Asperiores culpa nostrum aspernatur similique dolores. Sed eum veniam eius rerum laborum ratione quia accusantium perferendis quasi? Libero perferendis vitae id rerum!",
  "Rem nulla maiores qui, mollitia enim itaque voluptatibus dolore quaerat necessitatibus nihil, quidem quisquam. Magni quas officiis molestiae voluptatem, culpa architecto ullam!",
];

function sample<T>(arr: T[]) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | Error>
) {
  if (req.method === "POST") {
    const toInsert = req.body as Product;
    if (
      typeof toInsert.description === "string" &&
      typeof toInsert.name === "string" &&
      typeof toInsert.price === "number" &&
      typeof toInsert.photo === "string"
    ) {
      try {
        const product = await prisma.product.create({
          data: {
            description: toInsert.description,
            name: toInsert.name,
            photo: toInsert.photo,
            price: toInsert.price,
          },
        });

        await prisma.productSpecification.create({
          data: {
            productId: product.id,
            name: "Potência",
            value: `${Math.round(Math.random() * 1000)}W`,
          },
        });
        await prisma.productSpecification.create({
          data: {
            productId: product.id,
            name: "Peso",
            value: `${(Math.random() * 10).toFixed(2)}Kg`,
          },
        });
        await prisma.productSpecification.create({
          data: {
            productId: product.id,
            name: "Tamanho",
            value: `${Math.round(Math.random() * 100)}cm`,
          },
        });

        const count = Math.round(Math.random() * 10);
        for (let i = 0; i < count; i++) {
          await prisma.productAvaliation.create({
            data: {
              productId: product.id,
              userName: sample(USERS),
              date: new Date().toUTCString(),
              coment: sample(COMMENTS),
              score: Math.round(Math.random() * 5),
            },
          });
        }

        res.status(200).json(product);
      } catch (e) {
        res.status(500).send({ message: "Failed to insert product" });
      }
    } else res.status(400).send({ message: "Invalid Product" });
  } else res.status(404).send({ message: "Unsuported method" });
}
