import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/counter';
import CounterControl from '../../components/Counter/CounterControl';
import CounterOutput from '../../components/Counter/CounterOutput';
import ToDoList from '../../components/ToDo/ToDoList';

export class Counter extends Component {


	render () {

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
				<ToDoList></ToDoList>
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
