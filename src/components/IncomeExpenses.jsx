import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
    '$ ' +
    p[0]
    .split('')
    .reverse()
    .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
    }, '') +
    '.' +
    p[1]
);
}

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

    const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
);

    return (
    <div className="mt-4 grid grid-flow-col divide-x rounded-lg shadow-sm shadow-gray-400">
        <div className='rounded-l-lg bg-gray-50 py-4 text-center'>
            <h4 className='text-xs font-semibold'>Income</h4>
    <p className="text-lg font-bold text-green-400">{moneyFormatter(income)}</p>
        </div>
        <div className='rounded-r-lg bg-gray-50 py-4 text-center'>
            <h4 className='text-xs font-semibold'>Expense</h4>
    <p className="text-lg font-bold text-red-500">{moneyFormatter(expense)}</p>
        </div>
        </div>
    );
}


export default IncomeExpenses;