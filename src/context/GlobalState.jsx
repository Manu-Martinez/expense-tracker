import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [
    { id: 1, text: "Beer", amount: -100 },
    { id: 2, text: "Meat", amount: -500 },
    { id: 3, text: "Salary", amount: +10250 },
    { id: 4, text: "Shirt", amount: -1000 },
],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);  // eslint-disable-line

    return (
    <GlobalContext.Provider
    value={{
        transactions: state.transactions,
    }}
    >
    {children}
    </GlobalContext.Provider>
);
};