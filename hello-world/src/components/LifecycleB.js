import React, { Component } from 'react';

class LifecycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Vishwas',
		};
		console.log('LifeCycleB constructor');
	}

	componentDidMount() {
		console.log('LifecycleB componentDidMount');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleB getDerivedStateFromProps');
		return null;
	}

	shouldComponentUpdate() {
		console.log('LifecycleB shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevstate) {
		console.log('LifecycleB getSnapshotBeforeUpdate');
		return null;
	}

	componentDidUpdate() {
		console.log('LifecycleB componentDidUpdate');
	}

	render() {
		console.log('LifecycleB render');
		return <div>Lifecycle B</div>;
	}
}

export default LifecycleA;
