import React, { Component } from 'react';
import styles from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Board from './Board/Board';
import NewMember from './Board/NewMember';

class App extends Component {

  render() {
    return (
      <div className={styles.app}>
				<BrowserRouter>
					<header>
						<nav>
							<ul>
								<li><NavLink exact to="/">Home</NavLink></li>
								<li><NavLink to="/board">Board of Directors</NavLink></li>
								<li><NavLink to={{
									pathname: '/about-us',
									hash: '#ceo',
									search:'?q=elvis'
								}}>About Us</NavLink></li>
								<li><NavLink to="/contact-us">Contact Us</NavLink></li>
							</ul>
						</nav>
					</header>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about-us" component={AboutUs} />
						<Route path="/contact-us" component={ContactUs} />
						<Route path="/board/add" component={NewMember} />
						<Route path="/board" component={Board} />
					</Switch>
				</BrowserRouter>
				<ToastContainer />
      </div>
    );
  }
}

export default App;
