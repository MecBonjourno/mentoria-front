import { StarFilled, StarOutlined } from "@ant-design/icons"
import React from "react"

type Props = {
    score: number
}

const SCORES = [1,2,3,4,5]

function Score({ score }: Props) {
    return (
        <div className="text-yellow flex gap-[2px]">
            {SCORES.map(x => x <= score ? <StarFilled key={x}/> : <StarOutlined key={x}/>)}
        </div>
    )
}

export default Score