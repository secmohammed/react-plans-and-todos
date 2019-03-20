import { LOADING_FINISHED, LOADING_STARTED } from "./types";

export const finishLoading = () => dispatch => {
	dispatch({
		type: LOADING_FINISHED
	});
};

export const startLoading = () => dispatch => {
	dispatch({
		type: LOADING_STARTED
	});
};
