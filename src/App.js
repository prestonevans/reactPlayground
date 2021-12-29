import ExpenseItem from "./components/ExpenseItem";


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
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}