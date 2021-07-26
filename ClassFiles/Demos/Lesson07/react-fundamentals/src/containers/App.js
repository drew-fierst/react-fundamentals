import React, { Component } from 'react';
import Board from './Board/Board';
import styles from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Board />
				<ToastContainer />
      </div>
    );
  }
}

export default App;
