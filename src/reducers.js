import { combineReducers } from 'redux';

const userList = (state = [], action) => {
	if (action.type === 'ADD_USERS') {
		return action.userList;
	}
	return state;
}

export default combineReducers({
	userList
});
