import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  // states and variables
  const [editing, setEditing] = useState(false);

  //event Handlers
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  //editing event Handlers
  const startEditingHandler = () => {
    setEditing(true);
  };

  const endEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {editing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={endEditingHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
