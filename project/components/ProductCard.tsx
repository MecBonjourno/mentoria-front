import { Product } from "@prisma/client"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import currency from "../lib/currency"
import CounterInput from "./CounterInput"

type Props = {
    product: Product
}

const cardStyle = "text-contrast p-4 w-96 flex flex-col rounded-lg gap-2 items-center text-center font-primary"

function ProductCard({ product }: Props) {
    const [quantity, setQuantity] = useState(0)

    const setChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(e.target.checked ? 1 : 0)
    }

    return (
        <div className={`${cardStyle} ${(quantity > 0 ? "bg-gray-6" : "bg-gray-7")}`}>
            <input className="w-6 h-6 ml-auto" type="checkbox" checked={quantity > 0} onChange={setChecked}/>
            <Image width={208} height={208} src={product.photo}/>
            <span>
                <div className="font-bold text-xl">{product.name}</div>
                <div className="text-sm">{product.description}</div>
            </span>
            <CounterInput quantity={quantity} setQuantity={setQuantity}/>
            <div className="font-bold text-xl">{currency(product.price)}</div>
        </div>
    )
}

export default ProductCard