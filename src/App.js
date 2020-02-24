import React, { Component } from 'react';
import './App.css';
import { ExpenseView } from './Expense/ExpenseView';
import { ExpenseForm } from './Expense/ExpenseForm';
import { GlobalProvider } from './context/store';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import { SpendForm } from './Expense/SpendForm';
import { Nav } from './Expense/nav';

class App extends Component {
	render() {
		return (
			<GlobalProvider>
				<div className='App  mt-5'>
					<Routes>
						<Switch>
							<Route exact path='/'>
								<ExpenseView />
							</Route>
							<Route exact path='/exp'>
								<ExpenseForm />
							</Route>
							<Route exact path='/spend'>
								<SpendForm />
							</Route>
						</Switch>
					</Routes>
				</div>
			</GlobalProvider>
		);
	}
}
export default App;
