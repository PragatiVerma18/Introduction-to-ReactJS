import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';

function App() {
	return (
		<div className='App'>
			<HookCounterFour />
		</div>
	);
}

export default App;
