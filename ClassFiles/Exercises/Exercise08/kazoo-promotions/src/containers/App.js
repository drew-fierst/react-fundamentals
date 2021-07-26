import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home';
import Talent from './Talent/Talent';
import Artist from './Talent/Artist';
import Support from './Support';
import BoardMembers from './Board/BoardMembers';
import Contact from './Contact/Contact';

class App extends Component {
  render() {
    return (
			<div>
				<Header />
				<div className="App">
					<Talent />
					<Footer />
					<ToastContainer />
				</div>
			</div>
    );
  }
}

export default App;
