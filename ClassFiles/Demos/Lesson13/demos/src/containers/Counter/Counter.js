import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/counter';
import styles from './Counter.module.css';

import CounterControl from '../../components/Counter/CounterControl';
import CounterOutput from '../../components/Counter/CounterOutput';

export class Counter extends Component {

	state = {
		items: [
			{ id: 1, text: 'Buy groceries'}, 
			{ id: 2, text: 'Wash the car'}, 
			{ id: 3, text: 'Clean the house'}
		],
		nextId: 4
	}

	addItemHandler = () => {
		const text = prompt('Enter a to-do item');
		if (text) {
			this.setState((prevState) => {
				return {
					items: prevState.items.concat({ id: prevState.nextId, text: text }),
					nextId: prevState.nextId + 1
				};
			});
		}
	}

	removeItemHandler = (id) => {
	  this.setState((prevState) => {
	    return {
	      items: prevState.items.filter((item) => item.id !== id)
	    };
	  });
	}

	render () {
		const listItems = this.state.items.map( (item) => (
            <li 
                key={item.id}
                className={styles.listItem} 
                onClick={() => this.removeItemHandler(item.id)}>{item.text}</li>
        ) );

		return (
			<div>
				<div>
					<CounterOutput value={this.props.counter} />
					<CounterControl label="Increment" clicked={this.props.onIncrement} />
					<CounterControl label="Decrement" clicked={this.props.onDecrement}  />
					<CounterControl label="Add 5" clicked={() => this.props.onAdd(5)}  />
					<CounterControl label="Delay Add 7" clicked={() => this.props.onDelayAdd(7)}  />
					<CounterControl label="Subtract 5" clicked={() => this.props.onSubtract(5)}  />
				</div>
				<div>
					<p><button className={styles.button} onClick={this.addItemHandler}>Add Item</button></p>
					<p>Click a To-Do Item to Remove.</p>
					<ul className={styles.list}>
							{listItems}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		counter: state.counter.counter
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrement: () => dispatch(actions.increment()),
		onAdd: (amount) => dispatch(actions.add(amount)),
		onDecrement: () => dispatch(actions.decrement()),
		onSubtract: (amount) => dispatch(actions.subtract(amount)),
		onDelayAdd: (amount) => dispatch(actions.delayAdd(amount))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
