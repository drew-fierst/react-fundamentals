import React from 'react';
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
		<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/talent/:id" component={Artist} />
				<Route path="/talent" component={Talent} />
				<Route path="/support" component={Support} />
				<Route path="/board" component={BoardMembers} />
				<Route path="/contact" component={Contact} />
				<Route path="/account" component={Account} />
		</Switch>
	);

}

export default withRouter(contentContainer);
