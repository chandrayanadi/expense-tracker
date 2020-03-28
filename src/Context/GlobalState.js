import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer.js';

const initialState = {
    transactions: [
        {id:1, text: "Flowers", amount: -20},
        {id:2, text: "Cricket bat", amount: -1200},
        {id:3, text: "Salary", amount: 137000}
    ]
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    function deleteTransaction(id){
        dispatch({
            type: 'Delete_transaction',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'Add_transaction',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value ={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}
