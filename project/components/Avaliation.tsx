import { UserOutlined } from "@ant-design/icons";
import { ProductAvaliation } from "@prisma/client";
import React from "react";
import Score from "./Score";

type Props = {
    avaliation: ProductAvaliation
}

function Avaliation({ avaliation }: Props) {
    return (
        <div className="flex gap-3 flex-col bg-gray-5 p-2 rounded-lg">
            <div className="flex gap-2">
                <span className="h-10 w-10 flex justify-center items-center bg-gray-3 rounded-full">
                    <UserOutlined size={32} />
                </span>
                <span className="mr-auto">
                    <div className="text-sm">{avaliation.userName}</div>
                    <div className="text-xs italic">{avaliation.date}</div>
                </span>
                <Score score={avaliation.score}/>
            </div>
            <div>{avaliation.coment}</div>
        </div>
    )
}

export default Avaliation