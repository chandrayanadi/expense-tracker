import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState.js';

export const Transaction = ({ transaction}) => {  //can also pass props instead of transaction and use props.transaction.text in line 8
    
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext);

    return (
        <div>
            <li class = {transaction.amount < 0 ? 'minus': 'plus'}>
                {transaction.text} <span>{sign} ${Math.abs(transaction.amount)} </span><button onClick={() => deleteTransaction(transaction.id)} className = 'delete-btn'>X</button>
            </li>
        </div>
    )
}
 