import React, { useState } from "react";

const NewTransaction = () => {
    const [text, setText] = useState("");
    const [number, setNumber] = useState(0);
    
    return (
    <div className="grid grid-flow-row gap-2">
        <h1 className="text-lg font-bold">Add new transaction</h1>
        <hr className="h-0.5 bg-black" />
        <form className="grid grid-flow-row gap-2 ">
            <div className="grid grid-flow-row">
                <label htmlFor="text" className="mt-2 font-semibold">
                    Text
                </label>
                <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text..."
                className="mt-0.5 rounded p-2 shadow-sm shadow-gray-400 outline-none"
                />
            </div>
            <div className="mt-2 grid grid-flow-row">
                <label htmlFor="number" className="font-semibold">
                Amount
                </label>
                <label htmlFor="number" className="font-semibold">
                    (negative - expense, positive - income)
                </label>
                <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter amount..."
                className="mt-0.5 rounded p-2 shadow-sm shadow-gray-400 outline-none"
                />
            </div>
            <button className="mt-2 rounded bg-purple-500 p-2 font-bold text-white shadow-sm shadow-gray-400">
                Add transaction
            </button>
        </form>
    </div>
);
};

export default NewTransaction;