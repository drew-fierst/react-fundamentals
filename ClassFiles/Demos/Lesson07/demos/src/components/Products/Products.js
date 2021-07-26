import React, { PureComponent } from 'react';
import Product from './Product';
import Wrapper from '../../hoc/wrapper';
import withGatewayToken from '../../hoc/withGatewayToken';

class Products extends PureComponent {

	render() {
		return (
			<Wrapper>
			<div>Hello world! - token is {this.props.gatewayToken}</div>
			<div>
				{this.props.products.map((product, idx) => 
					(<Product key={product.id}
							name={product.name} 
							price={product.price} 
							quantity={product.quantity}
							unitQuantity={product.unitQuantity}
							inscription={product.inscription}
							removeClicked={() => this.props.productRemoved(idx)}
							inscriptionChanged={(evt) => this.props.inscriptionChanged(evt, product.id)}
							buyClicked={() => this.props.buyClicked(product.id)}
							>{product.description}</Product>
					))}
			</div>
			</Wrapper>
		); 
	}
		
	}


export default withGatewayToken(Products);
