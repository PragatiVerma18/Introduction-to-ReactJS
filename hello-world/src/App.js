import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NameList from './components/NameList';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<NameList></NameList>
			</div>
		);
	}
}
export default App;
