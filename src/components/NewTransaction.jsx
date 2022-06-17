import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Button from './Button';


const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), text, amount: +amount
    }

    addTransaction(newTransaction);
    };

    return (
        <>
    <form className='text-center space-y-5' onSubmit={onSubmit}>
        <div className="text-center space-x-4 space-y-4">
            <label htmlFor="text" className='text-center'>Text</label>
            <input type="text" className='text-center' value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="text-center space-x-4 space-y-4">
            <label htmlFor="amount" className='text-center'
            >Amount 
            (negative - expense, positive - income)</label
            >
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className='text-center space-y-4'>
        <Button className="button text-center" buttonStyle="add" text="Add Transaction"></Button>
        </div>
    </form>
        </>
    );
};

export default NewTransaction;