import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://www.kazoopromotions.com/api'
});
instance.defaults.headers.common['Authorization'] = 'INSTANCE TOKEN';

export default instance;
