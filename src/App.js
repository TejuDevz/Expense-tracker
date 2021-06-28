import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Book on Einstein's relativity",
    amount: 206,
    date: new Date(2020, 2, 12),
  },
  {
    id: "e2",
    title: "Disney+ Premium",
    amount: 306,
    date: new Date(2021, 6, 13),
  },
  {
    id: "e3",
    title: "Quantum Mechanincs",
    amount: 399,
    date: new Date(2021, 5, 13),
  },
  {
    id: "e4",
    title: "MERN stack Guide",
    amount: 299,
    date: new Date(2022, 5, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
