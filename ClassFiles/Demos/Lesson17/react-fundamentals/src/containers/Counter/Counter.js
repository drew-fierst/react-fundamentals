import React from 'react';
import CounterControl from '../../components/Counter/CounterControl';
import CounterOutput from '../../components/Counter/CounterOutput';
import ToDoList from '../../components/ToDo/ToDoList';
import useLocalStorage from '../../hooks/localStorage';
import useWhyDidYouUpdate from '../../hooks/whyDidYouUpdate';

const Counter = props => {
	useWhyDidYouUpdate('Counter', props);
	const [counter, setCounter] = useLocalStorage('kazoo-counter', 0);

	return (
		<div>
			<div>
				<CounterOutput value={counter} />
				<CounterControl label="Increment" clicked={() => setCounter(counter + 1)} />
				<CounterControl label="Decrement" clicked={() => setCounter(counter - 1)}  />
				<CounterControl label="Add 5" clicked={() => setCounter(counter + 5)}  />
				<CounterControl label="Delay Add 7" clicked={() => setTimeout(() => setCounter(c => c + 7), 2000)}  />
				<CounterControl label="Subtract 5" clicked={() => setCounter(counter - 5)}  />
			</div>
			<ToDoList></ToDoList>
		</div>
	);
	
}

export default Counter;
