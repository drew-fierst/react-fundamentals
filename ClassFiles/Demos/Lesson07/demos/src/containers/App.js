import React, { Component } from 'react';
import Board from './Board/Board';
import styles from './App.module.css';

class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Board />
      </div>
    );
  }
}

export default App;
