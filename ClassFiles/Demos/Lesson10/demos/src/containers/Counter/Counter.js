import React, { Component } from 'react';

import CounterControl from '../../components/Counter/CounterControl';
import CounterOutput from '../../components/Counter/CounterOutput';

class Counter extends Component {
	state = {
		counter: 0
	}

	counterChangedHandler = ( action, value ) => {
		// eslint-disable-next-line default-case
		switch ( action ) {
			case 'inc':
				this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
				break;
			case 'dec':
				this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
				break;
			case 'add':
				this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
				break;
			case 'sub':
				this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
				break;
		}
	}

	render () {
		return (
			<div>
				<CounterOutput value={this.state.counter} />
				<CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
				<CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
				<CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
				<CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
			</div>
		);
	}
}

export default Counter;
