import React, { useState } from 'react';
 import Expenses from "./Component/Expenses";
 import NewExpense from "./Component/NewExpenses/NewExpense";
 let DUMMY_EXPANSES = [
    {id:1,
    date : new Date(2023, 7, 11),
    title : "school fee",
    amount : 12000,
},    {id:2,
    date : new Date(2023, 7, 21),
    title : "Tution fee",
    amount : 12000,
},
{id:2,
    date : new Date(2023, 7, 11),
    title : "Football fee",
    amount : 12000,
}
] 

function App() {
   
    const [expenses,setexpenses] = useState(DUMMY_EXPANSES);

    const NewExpenses = (Expensesdata) => {
        setexpenses([...expenses,Expensesdata])
        console.log(expenses);
    }
    return (
        <div>
            <NewExpense DataTrasnfer={NewExpenses} />
            <Expenses item={expenses} />
          </div> 
    );
}

export default App;