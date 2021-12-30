import ExpenseItem from './ExpenseItem';

export default function Expense(props) {
    const {expenses} = props;
	return (
		<div className='expense'>
			<h2>Let's get started!</h2>
			<ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
			<ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
			<ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
		</div>
	);
}
