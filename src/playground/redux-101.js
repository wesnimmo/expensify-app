import { createStore } from 'redux';

//Action generators -> functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	//we're in arrow function shorthand so these 
	//curlies are becuase we're returning an object
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const resetCount = () => ({
	type: 'RESET'
});

const setCount = ({ count }) => ({
	type: 'SET',
	count
});


const store = createStore((state = {count: 0}, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};

		case 'SET':
			return {
				count: action.count
			};

		case 'RESET':
			return {
				count: state.count = 0
			};

		default:
			return state;
	}
});

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

//Actions - an object that gets sent to the store

//ie: I'd like to increment the count
// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5
// });

//the return value from store.subcribe above
//can be used to unsubscribe- so set above return
//value to const and call it here :)
//unsubscribe();


store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

// store.dispatch({
// 	type: 'INCREMENT'
// });

// Reset count equal to zero
store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));


store.dispatch(setCount({ count: 101 }));







