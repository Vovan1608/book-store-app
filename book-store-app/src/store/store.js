import { createStore } from 'redux';
import { getAxios } from "../services/API";

const getAuthors = (state = []) => {

	async function f() {
		await getAxios('/authors').then(res => {
			state = res.data;
		});
	}

	f();
}

// const playList = (state = [], {payload, type}) => {
// 	if (type === 'ADD') {
// 		return [
// 			...state,
// 			payload
// 		];
// 	}
// 	return state;
// };

// const store = createStore(playList);

// store.subscribe(_ => console.log('subscr', store.getState()));

// store.dispatch({type: 'ADD', payload: 'Smells'});
// store.dispatch({type: 'ADD', payload: 'Like'})

const store = createStore(getAuthors);

export default store;