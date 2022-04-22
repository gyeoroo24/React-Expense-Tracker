import React,{useState} from 'react';
import ExpenseList from '../ExpenseList';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter';
import ExpenseChart from './ExpenseChart';


function ExpensesComp(props)
{
  const[enteredYear,setEnteredYear] = useState('2020');

    const yearChange = (enteredNewYear) => {
      setEnteredYear(enteredNewYear);
    };

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString()===enteredYear;
    })
    return(
      <div>
        <li>
      <Card className="expenses">
      <ExpensesFilter onYearChange={yearChange}/>
      <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
      </li>
    </div>
  );
}

export default ExpensesComp;