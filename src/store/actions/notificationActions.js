import { UNSET_NOTIFICATION_MESSAGE, SET_NOTIFICATION_MESSAGE } from "./types";
export const setNotification = message => dispatch => {
	dispatch({
		type: SET_NOTIFICATION_MESSAGE,
		message
	});
};
export const clearNotification = () => dispatch => {
	dispatch({
		type: UNSET_NOTIFICATION_MESSAGE
	});
};
