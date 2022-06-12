import React, { useContext } from "react";
import Transaction from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

const History = () => {
    const { transactions } = useContext(GlobalContext);
    return (
    <div className="grid grid-flow-row gap-2">
        <h1 className="text-lg font-bold">History</h1>
        <hr className="h-0.5 bg-black" />
        <div className="mt-2 grid grid-flow-row gap-2">
            {transactions.map((transaction) => (
            <Transaction
            key={transaction.id}
            transaction={transaction}
            income={true}
        />
        ))}
        </div>
    </div>
);
};

export default History;