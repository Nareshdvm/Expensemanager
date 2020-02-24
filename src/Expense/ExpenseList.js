import React, { useContext } from 'react';
import '../Expense/expense.css';
import { GlobalContext } from '../context/store';

export default function ExpenseList(props) {
	const sign = props.exp < 0 ? '-' : '+';
	console.log(sign);

	const { deleteExp } = useContext(GlobalContext);
	return (
		<div
			className={'row expenseList' + ' ' + (props.exp < 0 ? 'spend' : 'add')}>
			<div className='col'>
				{sign} ${Math.abs(props.exp)}
			</div>
			<div className='col'>{props.Dec} </div>
			<div className='col'>
				<i className='fas fa-trash-alt' onClick={() => deleteExp(props.id)}></i>
			</div>
		</div>
	);
}
