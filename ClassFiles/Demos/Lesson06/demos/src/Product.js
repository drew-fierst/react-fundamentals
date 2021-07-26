import React from 'react';
import styles from './Product.module.css';

const product = (props) => {

	const qtyStyles = [];
	if (props.quantity !== 0) qtyStyles.push('strong');
	if (props.quantity < 0) qtyStyles.push('danger');

	return (
		<div className={styles.productCard}>
			<div>Each {props.name} costs ${props.price}</div>
			<div>Inscription: {props.inscription}</div>
			<p>{props.children}</p>
			<div className={qtyStyles.join(' ')}>Quantity Desired: {props.quantity}</div>
			<div>Custom Inscription: <input type="text" value={props.inscription} onChange={props.inscriptionChanged} /></div>
			<button onClick={props.buyClicked}>Buy Now</button>
			<button onClick={props.removeClicked}>Remove</button>
		</div>
	)
	
}

export default product;
