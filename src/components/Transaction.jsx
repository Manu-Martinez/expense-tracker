import React from "react";

const Transaction = ({ transaction, income }) => {
    const sign = transaction.amount < 0 ? "-" : "+";
    const color = transaction.amount < 0 ? "bg-red-500" : "bg-green-400";

    return (
    <div className="grid h-8 grid-flow-col justify-between rounded bg-gray-50 shadow-sm shadow-gray-400">
        <p className="self-center pl-2">{transaction.text}</p>
        <div className="grid grid-flow-col gap-2">
            <p className="self-center">
            {sign}${Math.abs(transaction.amount)}
            </p>
        <div className={`${color} w-2 rounded-r`}></div>
        </div>
    </div>
);
};

export default Transaction;