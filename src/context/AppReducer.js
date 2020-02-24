export default (state, action) => {
	debugger;
	switch (action.type) {
		case 'DELETE_EXP':
			return {
				...state,
				expenses: state.expenses.filter(
					expense => expense.id !== action.payload
				)
			};
		case 'ADD_EXP':
			return {
				...state,
				expenses: [action.payload, ...state.expenses]
			};

		default:
			return state;
	}
};
