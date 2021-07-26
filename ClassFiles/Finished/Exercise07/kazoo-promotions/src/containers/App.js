import React, { Component } from 'react';
import './App.css';
import BoardMembers from './BoardMembers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardMembers></BoardMembers>
				<ToastContainer />
      </div>
    );
  }
}

export default App;
