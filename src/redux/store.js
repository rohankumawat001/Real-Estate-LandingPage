import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SearchLocationReducer } from './reducer/searchLocationReducer';
const reducer = combineReducers({
	searchLocation: SearchLocationReducer,
});
const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
