import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const clickHandler = () => {
    setShowForm(true);
  };

  let content = <button onClick={clickHandler}>Add New Expense</button>;
  if (showForm) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onShowForm={setShowForm}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
