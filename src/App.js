import React from 'react';
import {Header} from './Components/Header.js';
import {Balance} from './Components/Balance.js';
import {IncomeExpense} from './Components/IncomeExpense.js';
import {TransactionList} from './Components/TransactionList.js';
import {AddTransaction} from './Components/AddTransaction.js';
import {GlobalProvider} from './Context/GlobalState.js';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
      </div>
      <div className = 'inc-exp-container'>
        <IncomeExpense />
      </div>
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
