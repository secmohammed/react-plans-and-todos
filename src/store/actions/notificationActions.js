import { UNSET_NOTIFICATION_MESSAGE } from "./types";
export const clearNotification = () => dispatch => {
	dispatch({
		type: UNSET_NOTIFICATION_MESSAGE
	});
};
