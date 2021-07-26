import React from 'react';
import { Transition } from 'react-transition-group';
import useToggle from '../hooks/toggle';
import ShoppingList from '../components/ShoppingList';

const Home = props => {

	const [display, toggleDisplay] = useToggle();

	const block = <Transition in={display} timeout={400} mountOnEnter unmountOnExit>
		{state => <div style={{
			width: '200px', 
			height: '200px', 
			backgroundColor: '#33F',
			transition: 'all 0.4s ease-out',
			opacity: state ==='exiting' || state === 'entering' ? 0 : 1
			}}></div>}
	</Transition>;
	

	return (
		<div>
			<h1>Welcome to Kazoo Promotions</h1>
			<p>All the best in entertainment available for you!</p>
			<button style={{marginBottom:'1em'}} onClick={toggleDisplay}>Toggle</button>
			{ block }
			<ShoppingList></ShoppingList>
		</div>
	);
	
};

export default Home;
