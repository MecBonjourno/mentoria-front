import PageTitle from "../components/PageTitle"
import ProductCard from "../components/ProductCard"
import { Product } from "@prisma/client"
import { get } from "../lib/api"

type Props = { 
  products: Product[]
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const products = await get<Product[]>('/products')
  return {
    props: { products } // props will be passed to the page
  }
}

function Home({ products }: Props) {
  return (
    <>
      {/* using this fragment (<></>) because we want to return a head and a body as siblings but react only accepts 1 child */}
      <PageTitle title="Home Page"/>
      <main>
        {products.map(x => <ProductCard key={x.id} product={x} />)}
      </main>
    </>
  )
}

export default Home