import React, { Component } from 'react';
import styles from './App.module.css';
import Product from './Product';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

	state = {
		showProducts: false,
		products: [
			{ id: 1, name: 'Pocket Knife', price: 12.98, unitQuantity: 1, inscription: '' },
			{ id: 2, name: 'Golf Balls', price: 22.50, unitQuantity: 5, inscription: '' },
			{ id: 3, name: 'Wine Glass', price: 11.49, unitQuantity: 2, inscription: '', description: 'Beautiful crystal wine glasses' }
		]
	}

	toggleProductsHandler = () => {
		this.setState({ showProducts: !this.state.showProducts });
	};

	removeProductHandler = (idx) => {
		const prods = this.state.products.slice();
		prods.splice(idx, 1);
		this.setState({products: prods });
	}

	inscriptionChangedHandler= (evt, id) => {
		const productIndex = this.state.products.findIndex(p => p.id === id);
		const product = { ...this.state.products[productIndex] };
		product.inscription = evt.target.value;

		const products = [ ...this.state.products ];
		products[productIndex] = product;

		this.setState({ products: products });
	}

  render() {
		let productContent = null;
		let buttonClass = styles.off;

		if (this.state.showProducts) {
			buttonClass = styles.on;
			
			productContent = (
					<div>
						{this.state.products.map((product, idx) => 
							(<ErrorBoundary key={product.id}><Product
											name={product.name} 
											price={product.price} 
											unitQuantity={product.unitQuantity}
											inscription={product.inscription}
											removeClicked={() => this.removeProductHandler(idx)}
											inscriptionChanged={(evt) => this.inscriptionChangedHandler(evt, product.id)}
											>{product.description}</Product></ErrorBoundary>
							))}
					</div> 
			);
		}

    return (<>
			<div className={styles.App} key="item1">
				<h1>React Fundamentals</h1>
				<button className={buttonClass} onClick={this.toggleProductsHandler}>Toggle Products</button>
				{productContent}
      </div>
		</>)
  }
}

export default App;
