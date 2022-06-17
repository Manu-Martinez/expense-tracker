import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button from './Button';

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

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><Button className='pl-4' buttonStyle="dlt" text="Delete" onClick={() => deleteTransaction(transaction.id)} >Delete</Button>
        </li>
    )
}

export default Transaction;