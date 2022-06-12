import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    console.log(amounts);

    const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);
    
    return (
    <div>
        <div>
            <p className="text-xs font-semibold">YOUR BALANCE</p>
            <p className="text-2xl font-bold">${total}</p>
        </div>

        <div className=" mt-4 grid grid-flow-col divide-x rounded-lg shadow-sm shadow-gray-400">
            <div className="rounded-l-lg bg-gray-50 py-4 text-center">
            <p className="text-xs font-semibold">INCOME</p>
            <p className="text-lg font-bold text-green-400">${income}</p>
        </div>

        <div className="rounded-r-lg bg-gray-50 py-4 text-center">
            <p className="text-xs font-semibold">EXPENSE</p>
            <p className="text-lg font-bold text-red-500">${expense}</p>
        </div>
    </div>
    </div>
);
};

export default Balance;