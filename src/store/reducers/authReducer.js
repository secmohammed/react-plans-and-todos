import { SET_LOGGED_IN_USER, UNSET_LOGGED_IN_USER } from '../actions/types.js'
const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	user: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_LOGGED_IN_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            }
        case UNSET_LOGGED_IN_USER: 
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            }
        default:
            return state;
    }
}
