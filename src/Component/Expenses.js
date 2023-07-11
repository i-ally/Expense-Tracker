import "./Expenses.css"
import React from 'react';
import ExpenseItem from "./ExpenseItem"

const Expenses = (props) => {
  return (
    <div className="expenses">
{
  props.item.map(
    expense => (
      <ExpenseItem 
      date={expense.date}
       title={expense.title}
        price={expense.amount}
      />
    )
  )
}

              
    </div>
  );
};

export default Expenses;
<ExpenseItem />