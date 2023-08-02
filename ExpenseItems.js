import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItems = (props) => {

const [title,setTitle] =  useState(props.title)
const [amount,setAmount] = useState(props.amount)

  const clickHandler = () => {
    setTitle('Updated!')
    //console.log(title)
  }
 
  const clickAmountHandler = () => {
  setAmount(100)
  }


    return (
      <Card className="expense-item">
<ExpenseDate date={props.date} />
<div className="expense-item__description">
  <h2>{title}</h2>
  <div className="expense-item__price">${amount}</div>
</div>
<button onClick={clickHandler}>Change title</button>
<button onClick={clickAmountHandler}>Change amount</button>
</Card>
    );
  }
  
  export default ExpenseItems;