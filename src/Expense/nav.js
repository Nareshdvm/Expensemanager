import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
	return (
		<div className='col-md-12 mt-5'>
			<Link to='/exp'>
				<button className='btn btn-success'>Add Expense</button>
			</Link>
			<Link to='/spend'>
				<button className='btn btn-success'>Add Spend</button>
			</Link>
		</div>
	);
};
