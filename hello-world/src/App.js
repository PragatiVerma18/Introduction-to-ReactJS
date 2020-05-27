import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<FocusInput />
			</div>
		);
	}
}
export default App;
