import './ExpenseItem.css'

export default function ExpenseItem() {
	return (
		<div className='expense-item'>
			<div>December 28 2021</div>
			<div className ='expense-item__description'>
				<h2>Car Insurance</h2>
				<div className='expense-item__price'>$400.55</div>
			</div>
		</div>
	);
}
