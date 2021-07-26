import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.interceptors.request.use(req => {
	console.log('(request interceptor)', req);
	return req;
}, err => {
	console.log('(request handler)', err);
	return Promise.reject(err);
});

axios.interceptors.response.use(resp => {
	console.log('(response interceptor)', resp);
	return resp;
}, err => {
	console.log('(response handler)', err);
	return Promise.reject(err);
});

axios.defaults.baseURL = 'https://www.kazoopromotions.com/api';
axios.defaults.headers.common['Authorization'] = 'MY AUTH TOKEN';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
