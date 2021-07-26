import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './ContentContainer.module.css';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Board from './Board/Board';
import NewMember from './Board/NewMember';
import Counter from './Counter/Counter';


const contentContainer = (props) => {

	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/about-us" component={AboutUs} />
			<Route path="/contact-us" component={ContactUs} />
			<Route path="/board/add" component={NewMember} />
			<Route path="/board" component={Board} />
			<Route path="/counter" component={Counter} />
		</Switch>
	);

}

export default contentContainer;
