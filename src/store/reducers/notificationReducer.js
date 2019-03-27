import { SET_NOTIFICATION_MESSAGE, UNSET_NOTIFICATION_MESSAGE } from "../actions/types";
const initialState = {
	message: null,
	type: 'info'
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_NOTIFICATION_MESSAGE:
			return {
				...state,
				message: action.payload.message,
				type: action.payload.type || state.type
			};
		case UNSET_NOTIFICATION_MESSAGE:
			return {
				...state,
				message: null,
				type: 'info'
			};
		default:
			return state;
	}
}
