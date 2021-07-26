import React, { Component } from 'react';

class Product extends Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 0
		};
		//this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<>
				<p>Each {this.props.name} costs ${this.props.price}</p>
				<p>{this.props.children}</p>
				<div>Quantity Desired: {this.state.quantity}</div>
				<div><input type="text" value={this.state.quantity} onChange={this.handleQuantityChange} /></div>
				<button onClick={this.handleClick}>Buy Now</button>
				<hr/>
			</>
		)
	}

	handleClick = () => {
		//console.log(this.props.name);

		//do not directly mutate state - component will not re-render
		//this.state.quantity = 1;

		// this.setState({
		// 	quantity: 1
		// });

		this.setState((state, props) => ({
			quantity: state.quantity + parseInt(props.unitQuantity)
		}))
	};

	handleQuantityChange = (evt) => {
		this.setState({
			quantity: +evt.target.value
		});
	}
}

export default Product;
