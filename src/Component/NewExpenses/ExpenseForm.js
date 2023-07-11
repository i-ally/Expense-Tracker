import React, { useState } from 'react';
import "./ExpenseForm.css"
import './NewExpense.css'


const ExpenseForm = (props) => {
    const [enteredtitle,setenteredtitle]  = useState("");
    const [enteredamount, setenteredamount] = useState("");
    const [entereddate,setenetereddate] = useState("");

    const title = (event) =>{ setenteredtitle(event.target.value) };
    const amount = (event) =>{setenteredamount(event.target.value)    };
    const date = (event) =>{ setenetereddate(event.target.value)   };

    const submitHandler  = (event) =>{
event.preventDefault();
const expenseData = {
    title:enteredtitle,
    amount:enteredamount,
    date:new Date(entereddate),
}

props.onSaveexpense(expenseData);

setenteredtitle("");
setenteredamount("");
setenetereddate("")

    }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense-controls'>
    <div className='new-expense-control'>
        <label>Title</label>   
        <input type="text" value={enteredtitle} onChange={title}/>
    </div>
    <div className='new-expense-control'>
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" value={enteredamount} onChange={amount} />
    </div>
    <div className='new-expense-control'>
        <label>Date</label>
        <input type="date" value={entereddate} onChange={date} />
    </div>
</div>
<div className='new-expense-action'>
    <button className='new-expense-button'  type ="submit">Add Expenses</button>
</div>

    </form>
  );
};

export default ExpenseForm;