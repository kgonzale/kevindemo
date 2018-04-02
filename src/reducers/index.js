import { combineReducers } from 'redux';
import NavReducer from './reducer_nav';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	nav: NavReducer,
	form: formReducer // <-- redux-form
});

export default rootReducer;