import React, { createContext, useReducer, useState, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	expenses: [
		{ id: 1, text: 'Flower', amount: -20 },
		{ id: 2, text: 'Salary', amount: 300 },
		{ id: 3, text: 'Book', amount: -10 },
		{ id: 4, text: 'Camera', amount: 150 }
	]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function deleteExp(id) {
		dispatch({
			type: 'DELETE_EXP',
			payload: id
		});
	}

	function addExp(expense) {
		dispatch({
			type: 'ADD_EXP',
			payload: expense
		});
	}

	return (
		<GlobalContext.Provider
			value={{ expenses: state.expenses, deleteExp, addExp }}>
			{children}
		</GlobalContext.Provider>
	);
};
