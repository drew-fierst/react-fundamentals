import React, { Component } from 'react';

class ErrorBoundary extends Component {

	state = {
		hasError: false,
		errorMessage: ''
	}

	componentDidCatch = (err, info) => {
		this.setState({
			hasError: true,
			errorMessage: err.message
		})
	};

	render() {
		if (this.state.hasError) {
			return <h2>{this.state.errorMessage}</h2>
		} else {
			return this.props.children;
		}
	}

}

export default ErrorBoundary;
