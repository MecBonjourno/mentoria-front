import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  let product
  product = await prisma.product.create({
    data: {
      description: "Não roda nem prato de microondas, Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, magni. Voluptates saepe, et beatae ipsum quo eligendi facilis vero odio voluptatum quasi alias eos mollitia voluptas soluta optio neque perferendis.",
      name: "PC Gamer da positivo",
      photo: "/products/1.png",
      price: 999.99
    }
  })

  await prisma.productAvaliation.create({
    data: {
      coment: 'Odiei',
      date: '12:31 12/08/2022',
      score: 5,
      userName: 'Leonardo Scholler',
      productId: product.id
    }
  })
  await prisma.productAvaliation.create({
    data: {
      coment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellat amet soluta vitae ullam exercitationem architecto earum aspernatur dolor ipsam, ratione similique? Suscipit iure repellat quod! Laboriosam nemo iure cupiditate!',
      date: '16:54 05/08/2022',
      score: 2,
      userName: 'Leonardo Mollmann',
      productId: product.id
    }
  })

  await prisma.productSpecification.create({
    data: {
      name: 'Potência',
      value: '500W',
      productId: product.id
    }
  })
  await prisma.productSpecification.create({
    data: {
      name: 'RAM',
      value: '2MB',
      productId: product.id
    }
  })
  await prisma.productSpecification.create({
    data: {
      name: 'Processador',
      value: 'Pentium 2',
      productId: product.id
    }
  })

  product = await prisma.product.create({
    data: {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda veniam mollitia natus aperiam nihil voluptas, reprehenderit dicta vitae nemo doloribus, facilis rem ipsa libero. Deserunt numquam suscipit consectetur nostrum.",
      name: "Martelo",
      photo: "/products/1.png",
      price: 21.99
    }
  })
  
  await prisma.productAvaliation.create({
    data: {
      coment: 'É um martelo, o que tu esperava?',
      date: '12:31 12/08/2022',
      score: 5,
      userName: 'Leonardo Scholler',
      productId: product.id
    }
  })
  await prisma.productSpecification.create({
    data: {
      name: 'Peso',
      value: '2Kg',
      productId: product.id
    }
  })

  product = await prisma.product.create({
    data: {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda veniam mollitia natus aperiam nihil voluptas, reprehenderit dicta vitae nemo doloribus, facilis rem ipsa libero. Deserunt numquam suscipit consectetur nostrum.",
      name: "Serra",
      photo: "/products/1.png",
      price: 50.00
    }
  })
  await prisma.productAvaliation.create({
    data: {
      coment: 'Uma serra comum',
      date: '12:31 12/08/2022',
      score: 3,
      userName: 'Leonardo Scholler',
      productId: product.id
    }
  })
  await prisma.productSpecification.create({
    data: {
      name: 'Peso',
      value: '1.5Kg',
      productId: product.id
    }
  })
  await prisma.productSpecification.create({
    data: {
      name: 'Tamanho do corte',
      value: '50cm',
      productId: product.id
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })