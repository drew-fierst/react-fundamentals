import React, { Component } from 'react';

const withGatewayToken = (Wrapped) => {

	class HOC extends Component {
		render() {
			return (
				<Wrapped 
					{...this.props}
					gatewayToken = {456456456}
				/>
			);
		}
	}

	return HOC;
}

//OR
// const withGatewayToken = (Wrapped) => {
// 	return props => (
// 		<Wrapped {...props} gatewayToken={523090534693853} />
// 	);
// };

export default withGatewayToken;
