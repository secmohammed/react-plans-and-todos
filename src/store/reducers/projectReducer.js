import {
	LOAD_PROJECTS,
	CREATE_PROJECT,
	GET_PROJECT,
	REMOVE_PROJECT
} from "../actions/types";
const initialState = {
	projects: [],
	project: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_PROJECT:
			return {
				...state,
				project: action.payload
			};
		case REMOVE_PROJECT:
			return {};
		case LOAD_PROJECTS:
			return {
				...state,
				projects: action.payload.map(project => {
					return {
						id: project.id,
						...project.data()
					};
				})
			};

		case CREATE_PROJECT:
			return {
				...state,
				projects: state.projects.concat(action.payload)
			};

		default:
			return state;
	}
}
