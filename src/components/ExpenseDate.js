import './ExpenseDate.css'

export default function ExpenseDate(props) {
	const { date } = props;

	const month = date.toLocaleString('default', { month: 'long' });
	const year = date.getFullYear();
	const day = date.getDay();

	return (
		<div className="date">
			<div className="dateBox">
				<div>{month}</div>
				<div>{year}</div>
				<div>{day}</div>
			</div>
		</div>
	);
}
