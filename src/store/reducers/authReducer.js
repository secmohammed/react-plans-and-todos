const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	isLoading: false,
	user: null
};

export default function(state = initialState, action) {
	return state;
}
