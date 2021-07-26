import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './store/reducers/counter';
import boardReducer from './store/reducers/board';
import { Provider } from 'react-redux';

axios.defaults.baseURL = 'https://www.kazoopromotions.com/api';

const logger = store => {
  return next => {
    return action => {
      console.log(`(middleware): dispatching `, action.type);
      const result = next(action);
      console.log(`(middleware) next state `, store.getState());
      return result;
    }
  }
};

const rootReducer = combineReducers({
	board: boardReducer,
	counter: counterReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
