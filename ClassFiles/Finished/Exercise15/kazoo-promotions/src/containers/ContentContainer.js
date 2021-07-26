import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';
import styles from './ContentContainer.module.css';

import Home from './Home';
import Talent from './Talent/Talent';
import Artist from './Talent/Artist';
import Support from './Support';
import BoardMembers from './Board/BoardMembers';
import Contact from './Contact/Contact';
import Account from './User/LogInOut';

const contentContainer = (props) => {

	return (
		<TransitionGroup component="div" className={styles.transitionWrapper} >
			<CSSTransition timeout={800} classNames={{...styles}} key={props.location.key}>
				<div className={styles.transitionSection}>
					<Switch location={props.location}>
							<Route path="/" exact component={Home} />
							<Route path="/talent/:id" component={Artist} />
							<Route path="/talent" component={Talent} />
							<Route path="/support" component={Support} />
							<Route path="/board" component={BoardMembers} />
							<Route path="/contact" component={Contact} />
							<Route path="/account" component={Account} />
					</Switch>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);

}

export default withRouter(contentContainer);
