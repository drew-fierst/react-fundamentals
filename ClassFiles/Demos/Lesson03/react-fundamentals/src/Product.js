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
				<div>Each {this.props.name} costs ${this.props.price}</div>
				<div>Inscription: {this.props.inscription}</div>
				<p>{this.props.children}</p>
				<div>Quantity Desired: {this.state.quantity}</div>
				<div>Custom Inscription: <input type="text" value={this.props.inscription} onChange={this.props.inscriptionChanged} /></div>
				<div><input type="text" value={this.state.quantity} onChange={this.handleQuantityChange} /></div>
				<button onClick={this.handleClick}>Buy Now</button>
				<button onClick={this.props.removeClicked}>Remove</button>
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
