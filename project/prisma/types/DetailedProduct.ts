import { Product, ProductAvaliation, ProductSpecification } from "@prisma/client";

type DetailedProduct = Product & {
    specifications: ProductSpecification[]
    avaliations: ProductAvaliation[]
}

export default DetailedProduct