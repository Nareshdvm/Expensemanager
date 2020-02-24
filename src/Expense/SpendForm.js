import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/store';
import { useHistory } from 'react-router-dom';

export const SpendForm = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	let history = useHistory();
	function goback() {
		history.push('/');
	}
	const { addExp } = useContext(GlobalContext);

	const onSubmit = e => {
		e.preventDefault();
		if ({ text } === '') {
			alert('tet');
		} else {
			const newExp = {
				id: Math.floor(Math.random() * 10),
				text,
				amount: -amount
			};

			addExp(newExp);

			goback();
		}
	};

	return (
		<div className='container mb-5'>
			<form onSubmit={onSubmit}>
				<h3 className='mt-5 mb-1'>Enter Your Details</h3>
				<div className='row m-1 p-5'>
					<div className='col-md-12 mb-4'>
						<input
							type='text'
							className='form-control'
							value={text}
							onChange={e => setText(e.target.value)}
							placeholder='Enter text...'
							required
						/>
					</div>
					<div className='col-md-12 mb-4'>
						<input
							type='number'
							className='form-control'
							value={amount}
							onChange={e => setAmount(e.target.value)}
							placeholder='Enter amount...'
							required
						/>
					</div>
					<div className='col-md-12 mb-4'>
						<button className='btn btn-success' type='submit' onClick={goback}>
							back
						</button>
						<button className='btn  btn-success' type='submit'>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
