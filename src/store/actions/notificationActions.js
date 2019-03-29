import { UNSET_NOTIFICATION_MESSAGE, SET_NOTIFICATION_MESSAGE } from "./types";
export const clearNotification = () => dispatch => {
	dispatch({
		type: UNSET_NOTIFICATION_MESSAGE
	});
};
export const setNotification = payload => dispatch => {
    dispatch({
        type: SET_NOTIFICATION_MESSAGE,
        payload
    })
}