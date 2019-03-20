import { LOADING_STARTED, LOADING_FINISHED } from "../actions/types";
const initialState = {
	loading: false
};
export default function(state = initialState, action) {
	switch (action.type) {
		case LOADING_STARTED:
			return {
				...state,
				loading: true
			};
		case LOADING_FINISHED:
			console.log("here");
			return {
				...state,
				loading: false
			};

		default:
			return state;
	}
}
