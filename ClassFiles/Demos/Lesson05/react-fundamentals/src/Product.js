import React, { Component } from 'react';
import styles from './Product.module.css';
import appStyles from './App.module.css';

class Product extends Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 0
		};
	}

	render() {
		//simulate a random error in this component
		if (Math.random() < 0.3) throw new Error('Houston, we have a problem');

		const qtyStyles = [];
		if (this.state.quantity !== 0) qtyStyles.push(appStyles.strong);
		if (this.state.quantity < 0) qtyStyles.push(appStyles.danger);

		return (
			<div className={styles.productCard}>
				<div>Each {this.props.name} costs ${this.props.price}</div>
				<div>Inscription: {this.props.inscription}</div>
				<p>{this.props.children}</p>
				<div className={qtyStyles.join(' ')}>Quantity Desired: {this.state.quantity}</div>
				<div>Custom Inscription: <input type="text" value={this.props.inscription} onChange={this.props.inscriptionChanged} /></div>
				<div><input type="text" value={this.state.quantity} onChange={this.handleQuantityChange} /></div>
				<button onClick={this.handleClick}>Buy Now</button>
				<button onClick={this.props.removeClicked}>Remove</button>
			</div>
		)
	}

	handleClick = () => {
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
