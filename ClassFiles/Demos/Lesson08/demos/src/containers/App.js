import React, { Component } from 'react';
import styles from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Board from './Board/Board';

class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <header>
					<nav>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/board">Board of Directors</a></li>
							<li><a href="/about-us">About Us</a></li>
							<li><a href="/contact-us">Contact Us</a></li>
						</ul>
					</nav>
				</header>
				<Board />
				<ToastContainer />
      </div>
    );
  }
}

export default App;
