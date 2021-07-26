import React, { useContext } from 'react';
import styles from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, NavLink } from 'react-router-dom';
import ContentContainer from './ContentContainer';
import { TermsContext } from '../context/termsContext';
import SiteTerms from '../components/UI/SiteTerms';

const App = () => {

	const termsContext = useContext(TermsContext);

	let content = <SiteTerms></SiteTerms>
	if (termsContext.accepted) {
		content = <div className={styles.app}>
		<BrowserRouter>
			<header>
				<nav>
					<ul>
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink to="/counter">Counter</NavLink></li>
						<li><NavLink to="/talent">Talent</NavLink></li>
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
			<ContentContainer />
			
		</BrowserRouter>
		<ToastContainer />
	</div>
	}

	return (content);
  
}

export default App;
