import React, { Component } from 'react';

class AboutUs extends Component {

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<h1>About Us</h1>
				<div>We are the world's premiere company for procrastinating.</div>
				<div>More info to come later. . .</div>
			</div>
		);
	}
}

export default AboutUs;
