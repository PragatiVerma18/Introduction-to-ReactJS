import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalHookCounter from './Components/IntervalHookCounter';

function App() {
	return (
		<div className='App'>
			<IntervalHookCounter />
		</div>
	);
}

export default App;
