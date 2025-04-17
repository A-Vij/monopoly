import React from "react";

import { Rows } from "./Rows";

function Board({ children }) {
    return (
        <div 
            className="aspect-square grid [grid-template-rows:repeat(13,_7.6923%)] [grid-template-columns:repeat(13,_7.6923%)] shadow-2xl"
            style={{ maxHeight: "100vh", height: "100%" }}
        >
            {children}
        </div>
    );
}


export function MonopolyBoard({boardData, children}) {
    return (
    <div className="bg-[#f5f5dc] flex justify-center">
        <Board>
            <Rows spaces={boardData} />
            {children}
        </Board>
    </div>
    );
}
