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
		console.log('LifecycleB getDErivedStateFromProps');
		return null;
	}
	render() {
		console.log('LifecycleB render');
		return <div>Lifecycle B</div>;
	}
}

export default LifecycleA;
