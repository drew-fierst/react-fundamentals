import React, { Component } from 'react';

const withUser = (Wrapped) => {
	class HOC extends Component {
		state = {
			user: ''
		};

		componentDidMount() {
			this.setState({ user: 'Elvis'});
		}

		render() {
			return (
				<Wrapped user={this.state.user} {...this.props}></Wrapped>
			);
		}

	}

	return HOC;
}

export default withUser;
