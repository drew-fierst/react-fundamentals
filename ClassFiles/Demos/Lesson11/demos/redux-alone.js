const redux = require('redux');

const initialState = {
	counter: 0
};

//Reducer
const reducer = (state = initialState, action) => {
	if (action.type === 'INCREMENT') {
		return { ...state, counter: state.counter + 1 };
	}
	if (action.type === 'ADD') {
		return { ...state, counter: state.counter + action.payload };
	}
	return state;
}

//Store
const store = redux.createStore(reducer);
// console.log(store.getState());

store.subscribe(() => {
	console.log('(subscription)', store.getState());
});

//Actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type:'ADD', payload: 5 });
store.dispatch({ type: 'FOO' });
// console.log(store.getState());
