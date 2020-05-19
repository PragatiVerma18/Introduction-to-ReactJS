import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import FragmentDemo from './components/FragementDemo';
import Table from './components/Table';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Table />
				{/* <FragmentDemo /> */}
			</div>
		);
	}
}
export default App;
