import { ADD_SEARCH_LOCATION } from '../constant/SearchConstant';

export const addSearch = (location) => async (dispatch) => {
	try {
		dispatch({ type: ADD_SEARCH_LOCATION, payload: location });
	} catch (err) {
		console.log(err);
	}
};
