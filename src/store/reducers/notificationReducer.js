import { SET_NOTIFICATION_MESSAGE, UNSET_NOTIFICATION_MESSAGE } from "../actions/types";
// change this reducer to be a notification reducer.
const initialState = {
	message: null,
	type: 'info'
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_NOTIFICATION_MESSAGE:
			return {
				...state,
				message: action.payload
			};
		case UNSET_NOTIFICATION_MESSAGE:
			return {
				...state,
				message: null
			};
		default:
			return state;
	}
}
