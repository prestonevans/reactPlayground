import Expense from "./components/Expense";

export default function App() {
  const expenses = [
    {
      title: 'Car',
      amount: '$45',
      date: new Date()
    },
    {
      title: 'Gas',
      amount: '$22',
      date: new Date()
    },
    {
      title: 'Stuff',
      amount: '$200',
      date: new Date()
    },
  ]
  return (
    <Expense expenses={expenses}/>
  );
}