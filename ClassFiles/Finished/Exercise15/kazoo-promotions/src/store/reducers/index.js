import { combineReducers } from 'redux'

import bookingReducer from './booking';
import accountReducer from './account';

export default combineReducers({
	bookingRequest: bookingReducer,
	account: accountReducer
})
