import React, { Component } from 'react';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (<>
			<div className="App" key="item1">
        <h1>Hello, world!</h1>
				<Product name="Gear" price="12.98" unitQuantity="1"></Product>
				<Product name="Pulley" price="22.50" unitQuantity="5"></Product>
				<Product name="Sprocket" price="11.49" unitQuantity="2">This is the sprocket description</Product>
      </div>
		</>)
  }
}

export default App;
