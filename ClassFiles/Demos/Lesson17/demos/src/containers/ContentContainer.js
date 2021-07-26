import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';
import styles from './ContentContainer.module.css';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Board from './Board/Board';
import NewMember from './Board/NewMember';
import Counter from './Counter/Counter';
import Talent from './Talent/Talent';


const contentContainer = (props) => {

	return (
		<TransitionGroup component="div" className={styles.transitionWrapper} >
			<CSSTransition timeout={800} classNames={{...styles}} key={props.location.key}>
				<div className={styles.transitionSection}>
					<Switch location={props.location}>
						<Route path="/" exact component={Home} />
						<Route path="/about-us" component={AboutUs} />
						<Route path="/contact-us" component={ContactUs} />
						<Route path="/board/add" component={NewMember} />
						<Route path="/board" component={Board} />
						<Route path="/talent" component={Talent} />
						<Route path="/counter" component={Counter} />
					</Switch>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);

}

export default withRouter(contentContainer);
