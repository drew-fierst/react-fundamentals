import { combineReducers } from 'redux'

import bookingReducer from './booking';

export default combineReducers({
	bookingRequest: bookingReducer
})
