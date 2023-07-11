import "./ExpenseItem.css"
import React from 'react';
import Card from "./Card"
import ExpanseDate from "./ExpanseDate";
import { useState } from "react";

const ExpenseItem = (props) => {
  //  let[value, newvalue]  = useState("")
   
//    let  [title, newtitle] = useState(props.title);

//  const changeTitle = () =>{
//        newtitle(value)
//   }
//   const changeHandler = (event) => {

// newvalue(event.target.value)
//   }

  return (
    <Card className="Expense-iTEM"> 
    <ExpanseDate date={props.date}/>    
<div className="expense-description">
    <h2>{props.title}</h2>
    </div>
    {/* <input type="text" value={value} onChange={changeHandler} /> */}
    <div className = "expense-price"> INR 30000</div>
    {/* <button onClick={changeTitle}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;