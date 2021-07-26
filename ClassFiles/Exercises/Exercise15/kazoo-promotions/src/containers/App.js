import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import AccountWidget from '../components/User/AccountWidget';

import ContentContainer from './ContentContainer';	

class App extends Component {
  render() {
    return (
			<div>
				<BrowserRouter>
					<Header />
					<div className="App">
						<AccountWidget />
						<ContentContainer />
						<Footer />
						<ToastContainer />
					</div>
				</BrowserRouter>
			</div>
    );
  }
}

export default App;
