import PageTitle from "../../components/PageTitle"
import { get } from "../../lib/api"
import { GetServerSideProps } from 'next'
import Image from "next/image"
import DetailedProduct from "../../prisma/types/DetailedProduct"
import Specification from "../../components/Specification"
import Avaliation from "../../components/Avaliation"
import { DeleteFilled } from "@ant-design/icons"
import currency from "../../lib/currency"

type Query = {
  id: string
}

type Props = { 
  product: DetailedProduct
}

export const getServerSideProps: GetServerSideProps<Props, Query> = async (context) => {
  const product = await get<DetailedProduct>(`/product?id=${context.query.id}`)

  return {
    props: { product } // props will be passed to the page
  }
}

function Home({ product }: Props) {
  return (
    <>
      <PageTitle title="Product Page"/>
      <main className="flex flex-col gap-4 px-16 py-8">
        <div className="flex flex-row gap-4 p-2 bg-gray-6 rounded-lg w-full">
          <span className="shrink-0">
            <Image width={200} height={200} src={product.photo}/>
          </span>
          <div className="flex flex-col gap-2 w-full">
            <span className="text-lg font-bold text-center">{product.name}</span>
            <span>{product.description}</span>
            <span className="text-2xl font-bold mt-auto text-end">R$ {currency(product.price)}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2 bg-gray-6 rounded-lg w-full">
          <h1 className="text-lg font-bold">Product Specifications</h1>
          {product.specifications.map(x => (
            <Specification
              key={x.name} 
              specification={x} 
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 p-2 bg-gray-6 rounded-lg w-full">
          <h1 className="text-lg font-bold">Users Avaliations</h1>
          {product.avaliations.map(x => (
            <Avaliation
              key={x.id}
              avaliation={x}
            />
          ))}
        </div>
        <div className="flex p-2 bg-gray-6 rounded-lg w-full">
            <span className="text-red flex gap-2 items-center cursor-pointer"><DeleteFilled />Delete Product</span>
        </div>
      </main>
    </>
  )
}

export default Home