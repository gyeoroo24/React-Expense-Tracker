import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React,{useState} from 'react';

const NewExpense = (props) =>{
    const [isEditing,setIsEditing] = useState(false);
    const saveExpenseDataHandler = enteredExpenseData =>
    {
        const expenseData =  {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditting = () =>{
        setIsEditing(true);
    }

    const stopEditting = () =>{
        setIsEditing(false);
    }
    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditting}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditting}/>}
        </div>
        
    );
}

export default NewExpense;