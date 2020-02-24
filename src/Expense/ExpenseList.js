import React, { useContext } from 'react';
import '../Expense/expense.css';
import { GlobalContext } from '../context/store';

export default function ExpenseList(props) {
	const dig = props.exp < 0 ? '-' : '+';

	const { deleteExp } = useContext(GlobalContext);
	return (
		<div
			className={'row expenseList' + ' ' + (props.exp < 0 ? 'spend' : 'add')}>
			<div className='col'>
				{dig} ${Math.abs(props.exp)}
			</div>
			<div className='col'>{props.Dec} </div>
			<div className='col'>
				<i className='fas fa-trash-alt' onClick={() => deleteExp(props.id)}></i>
			</div>
		</div>
	);
}
