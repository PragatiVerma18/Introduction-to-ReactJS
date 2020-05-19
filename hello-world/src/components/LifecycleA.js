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
		console.log('LifecycleA getDErivedStateFromProps');
		return null;
	}
	render() {
		console.log('LifecycleA render');
		return (
			<div>
				<div>Lifecycle A</div>
				<LifecycleB />
			</div>
		);
	}
}

export default LifecycleA;
