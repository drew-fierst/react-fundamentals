import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountWidget from '../components/User/AccountWidget';

import Home from './Home';
import Talent from './Talent/Talent';
import Artist from './Talent/Artist';
import Support from './Support';
import BoardMembers from './Board/BoardMembers';
import Contact from './Contact/Contact';
import Account from './User/LogInOut';

class App extends Component {
  render() {
    return (
			<div>
				<BrowserRouter>
					<Header />
					<div className="App">
						<AccountWidget />
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/talent/:id" component={Artist} />
							<Route path="/talent" component={Talent} />
							<Route path="/support" component={Support} />
							<Route path="/board" component={BoardMembers} />
							<Route path="/contact" component={Contact} />
							<Route path="/account" component={Account} />
						</Switch>
						<Footer />
						<ToastContainer />
					</div>
				</BrowserRouter>
			</div>
    );
  }
}

export default App;
