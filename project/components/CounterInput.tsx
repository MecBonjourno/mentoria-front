import { ChangeEvent } from "react"

type Props = {
    quantity: number
    setQuantity(quantity: number): void
}

function CounterInput({ quantity, setQuantity }: Props) { 
    const decrement = () => {
        // added negative number protection
        setQuantity(Math.max(quantity - 1, 0))
    }

    const increment = () => {
        setQuantity(quantity + 1)
    }

    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(e.target.value) || 0)
    }

    return (
        <div className="text-contrast flex text-lg bg-gray-4 rounded cursor-pointer select-none">
            <span className="px-2" onClick={decrement}>-</span>
            <input className="bg-transparent outline-none border-none text-inherit text-center text-base w-12" onChange={setValue} value={quantity}/>
            <span className="px-2" onClick={increment}>+</span>
        </div>
    )
}

export default CounterInput