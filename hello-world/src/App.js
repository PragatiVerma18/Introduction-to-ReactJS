import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import Counter from './components/Counter';

class App extends Component {
	render() {
		return (
			<div className='App'>
				{/* <ClickCounter />
				<HoverCounter />
				<User render={(isLoggedIn) => (isLoggedIn ? 'Vishwas' : 'Guest')} /> */}
				<Counter
					render={(count, incrementCount) => (
						<ClickCounter count={count} incrementCount={incrementCount} />
					)}
				/>

				<Counter
					render={(count, incrementCount) => (
						<HoverCounter count={count} incrementCount={incrementCount} />
					)}
				/>
			</div>
		);
	}
}
export default App;
