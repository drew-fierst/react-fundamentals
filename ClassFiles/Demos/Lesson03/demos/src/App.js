import React, { Component } from 'react';
import './App.css';
import Product from './Product';

class App extends Component {

state = {
		products: [
			{ id: 1, name: 'Pocket Knife', price: 12.98, unitQuantity: 1, inscription: '' },
			{ id: 2, name: 'Golf Balls', price: 22.50, unitQuantity: 5, inscription: '' },
			{ id: 3, name: 'Wine Glass', price: 11.49, unitQuantity: 2, inscription: '', description: 'Beautiful crystal wine glasses' }
		]
	}

  render() {
    return (<>
			<div className="App" key="item1">
        <h1>React Fundamentals</h1>
				<Product name="Pocket Knife" price="12.98" unitQuantity="1"></Product>
				<Product name="Golf Balls" price="22.50" unitQuantity="5"></Product>
				<Product name="Wine Glass" price="11.49" unitQuantity="2">Beautiful crystal wine glasses</Product>
      </div>
		</>)
  }
}

export default App;
