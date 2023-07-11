import React from 'react';
import "./NewExpense.css"
import Form from "./ExpenseForm";

const NewExpense = (props) => {

    const NewExpenses = (AddExpensedata) => {
        const Expensedata ={...AddExpensedata,id:Math.random().toString()
        };
props.DataTrasnfer(Expensedata)


    }

  return (
    <div className='NewExpense'>
        <Form onSaveexpense={NewExpenses}/>
    {/* <button >New Expense</button> */}


    </div>
  );
};

export default NewExpense;