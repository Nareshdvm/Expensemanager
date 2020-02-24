import React, { useContext, useState } from 'react';
import ExpenseList from './ExpenseList';
import axios from '../axios-orders';
import { GlobalContext } from '../context/store';
import { Link } from 'react-router-dom';
import { ExpenseForm } from './ExpenseForm';
import { Nav } from './nav';

// import React from 'react';

export const ExpenseView = () => {
	const { expenses } = useContext(GlobalContext);
	const amounts = expenses.map(exp => exp.amount);

	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
	const income = amounts
		.filter(item => item > 0)
		.reduce((Axp, item) => (Axp += item), 0)
		.toFixed(2);

	const expense = (
		amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
		-1
	).toFixed(2);
	return (
		<div className='container-fluid p-0 m-0 mb-5'>
			<div className='col-md-12 bg-success'>
				<h5 className='p-2 text-white'>Balance : Rs. {total}</h5>
				<div className='pb-1'>
					<span className='text-white mr-5'>Income :{income}</span>
					<span className='text-danger'> Expense :{expense}</span>
				</div>
			</div>
			<div className='col-md-12'>
				{expenses.map(exp => {
					return (
						<ExpenseList
							key={exp.id}
							id={exp.id}
							exp={exp.amount}
							Dec={exp.text}
						/>
					);
				})}
			</div>
			<div className='col-md-12 mt-5'>
				<Nav />
			</div>
		</div>
	);
};
