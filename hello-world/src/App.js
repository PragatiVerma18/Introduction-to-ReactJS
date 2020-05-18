import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StyleSheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css';
import styles from './appStyles.module.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				{/* <StyleSheet primary={true} />  */}
				{/* <Inline /> */}
				<h1 className='error'>Error</h1>
				<h1 className={styles.success}>Sucess</h1>
			</div>
		);
	}
}
export default App;
