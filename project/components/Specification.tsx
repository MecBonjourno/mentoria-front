import { ProductSpecification } from "@prisma/client";
import React from "react";

type Props = {
    specification: ProductSpecification
}

function Specification({ specification }: Props) {
    return (
        <div className="flex justify-between border-b-[1px] pb-1 border-gray-3">
            <div>{specification.name}</div>
            <div className="font-bold">{specification.value}</div>
        </div>
    )
}

export default Specification