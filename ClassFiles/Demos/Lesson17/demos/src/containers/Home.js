import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

class Home extends Component {

	state = {
		display: false
	}

	toggleDisplay = () => {
		this.setState((state, props) => {
			return {
				display: !state.display
			}
		})
	}

	render() {
		const block = <Transition in={this.state.display} timeout={400} mountOnEnter unmountOnExit>
			{state => <div style={{
				width: '200px', 
				height: '200px', 
				backgroundColor: '#33F',
				transition: 'all 0.4s ease-out',
				opacity: state ==='exiting' || state === 'entering' ? 0 : 1
				}}></div>}
		</Transition>;
		

		return (
			<div>
				<h1>Welcome to Kazoo Promotions</h1>
				<p>All the best in entertainment available for you!</p>
				<button style={{marginBottom:'1em'}} onClick={this.toggleDisplay}>Toggle</button>
				{ block }
			</div>
		);
	}
};

export default Home;
