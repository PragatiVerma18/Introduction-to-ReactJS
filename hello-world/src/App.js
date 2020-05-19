import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LifecycleA from './components/LifecycleA';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<LifecycleA />
			</div>
		);
	}
}
export default App;
