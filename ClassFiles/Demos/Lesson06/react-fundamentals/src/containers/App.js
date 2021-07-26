import React, { Component } from 'react';
import styles from './App.module.css';
import Products from '../components/Products/Products';
import DiscountContext from '../context/discountContext';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('(App.js) in constructor');
		this.state = {
			showTitle: true,
			showProducts: false,
			products: [
				{ id: 1, name: 'Pocket Knife', price: 12.98, unitQuantity: 1, inscription: '', quantity: 0 },
				{ id: 2, name: 'Golf Balls', price: 22.50, unitQuantity: 5, inscription: '', quantity: 0 },
				{ id: 3, name: 'Wine Glass', price: 11.49, unitQuantity: 2, inscription: '', quantity: 0, description: 'Beautiful crystal wine glasses' }
			],
			discountEnabled: false
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log('(App.js) in getDerivedStateFromProps()');
		return null;
	}

	componentDidMount() {
		console.log('(App.js) in componentDidMount()');
	}

	toggleDiscountHandler = () => {
		this.setState((prevState, props) => {
			return {
				discountEnabled: !prevState.discountEnabled
			}
		});
	};

	applyDiscount = (amount) => this.state.discountEnabled ? amount * 0.8 : amount;

	toggleProductsHandler = () => {
		this.setState({ showProducts: !this.state.showProducts });
	};

	hideTitleHandler = () => {
		if (this.state.showTitle) this.setState({ showTitle: false });
	}

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

	buyClickedHandler = (id) => {
		const productIndex = this.state.products.findIndex(p => p.id === id);
		const product = { ...this.state.products[productIndex] };
		product.quantity += product.unitQuantity;
		
		const products = [ ...this.state.products ];
		products[productIndex] = product;

		this.setState({ products: products });
	}

  render() {
		console.log('(App.js) in render()')
		let buttonClass = styles.off;
		let productContent = null;

		let titleContent = null;
		if (this.state.showTitle) {
			titleContent = (<h1>React Fundamentals</h1>);
		}

		if (this.state.showProducts) {
			buttonClass = styles.on;

			productContent = (
				<Products
					products={this.state.products}
					productRemoved={this.removeProductHandler}
					inscriptionChanged={this.inscriptionChangedHandler}
					buyClicked={this.buyClickedHandler}
				></Products>
			);
		}

    return (<>
			<div className={styles.App} key="item1">
				{titleContent}
				<button className={buttonClass} onClick={this.toggleProductsHandler}>Toggle Products</button>
				<button onClick={this.hideTitleHandler}>Hide Title</button>
				<DiscountContext.Provider value={{
					enabled: false,
					applyDiscount: this.applyDiscount
				}}>
					<button onClick={this.toggleDiscountHandler}>Toggle Discount</button>
					{productContent}
				</DiscountContext.Provider>
      </div>
		</>)
  }
}

export default App;
