import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://www.kazoopromotions.com/api'
});

export default instance;
