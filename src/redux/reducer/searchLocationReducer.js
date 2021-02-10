import { ADD_SEARCH_LOCATION } from '../constant/SearchConstant';

const initialState = {
	searchKeyword: '',
};

export const SearchLocationReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_SEARCH_LOCATION:
			return {
				searchKeyword: action.payload,
			};

		default:
			return state;
	}
};
