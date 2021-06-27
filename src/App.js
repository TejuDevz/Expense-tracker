import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Book on Einstein's relativity",
      amount: 206,
      date: new Date(2021, 2, 12),
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
      date: new Date(2021, 5, 15),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
