import React, { Component } from 'react';
import styles from './Product.module.css';
import PropTypes from 'prop-types';
import DiscountContext from '../../context/discountContext';

class Product extends Component {

	static contextType = DiscountContext;

	render() {
		console.log('(Product.js) - in component function');
		const qtyStyles = [];
		if (this.props.quantity !== 0) qtyStyles.push('strong');
		if (this.props.quantity < 0) qtyStyles.push('danger');

		return (
			<div className={styles.productCard}>
				<div>Each {this.props.name} costs ${this.context.applyDiscount(this.props.price)}</div>
				<div>Inscription: {this.props.inscription}</div>
				<p>{this.props.children}</p>
				<div className={qtyStyles.join(' ')}>Quantity Desired: {this.props.quantity}</div>
				<div>Custom Inscription: 
					<input type="text" 
					ref="inscriptionBox" 
					value={this.props.inscription} 
					onChange={this.props.inscriptionChanged} />
				</div>
				<button onClick={() => {
						this.props.buyClicked(); 
						this.refs.inscriptionBox.focus(); 
					}}>Buy Now</button>
				<button onClick={this.props.removeClicked}>Remove</button>
			</div>
		)

	}
}

Product.propTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
	inscription: PropTypes.string,
	quantity: PropTypes.number,
	unitQuantity: PropTypes.number,
	buyClicked: PropTypes.func,
	removeClicked: PropTypes.func,
	inscriptionChanged: PropTypes.func
};

export default Product;
