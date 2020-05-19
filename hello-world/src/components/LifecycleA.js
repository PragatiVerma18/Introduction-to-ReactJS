import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Vishwas',
		};
		console.log('LifeCycleA constructor');
	}

	componentDidMount() {
		console.log('LifecycleA componentDidMount');
	}
	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleB getDerivedStateFromProps');
		return null;
	}

	shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevstate) {
		console.log('LifecycleA getSnapshotBeforeUpdate');
		return null;
	}

	componentDidUpdate() {
		console.log('LifecycleA componentDidUpdate');
	}

	changeState = () => {
		this.setState({
			name: 'Codevolution',
		});
	};

	render() {
		console.log('LifecycleA render');
		return (
			<div>
				<div>Lifecycle A</div>
				<button onClick={this.changeState}>Change State</button>
				<LifecycleB />
			</div>
		);
	}
}

export default LifecycleA;
