import Expenses from "./components/Expenses";

function App() {
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

  return (
    <div className="App">
      <h1>Let's Get Started</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
