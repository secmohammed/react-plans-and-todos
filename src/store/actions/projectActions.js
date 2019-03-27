import { projects } from "../../config/firebase";
import {
	LOAD_PROJECTS,
	CREATE_PROJECT,
	GET_PROJECT,
	REMOVE_PROJECT,
	UPDATE_PROJECT,
	LOADING_STARTED,
	LOADING_FINISHED,
	SET_NOTIFICATION_MESSAGE
} from "./types";

export const updateProect = (id, payload) => dispatch => {
	dispatch({
		type: LOADING_STARTED
	});
	projects
		.doc(id)
		.update(payload)
		.then(() => {
			dispatch({
				type: UPDATE_PROJECT,
				payload: {
					...payload,
					id
				}
			});
			dispatch({
				type: LOADING_FINISHED
			});
		});
};

export const getProject = id => async dispatch => {
	dispatch({
		type: LOADING_STARTED
	});
	let document = await projects.doc(id).get();
	if (document.exists) {
		dispatch({
			type: GET_PROJECT,
			payload: {
				id,
				...document.data()
			}
		});
	} else {
		dispatch({
			type: SET_NOTIFICATION_MESSAGE,
			payload: {
				message: "Could not find this document."
			}
		});
	}
	dispatch({
		type: LOADING_FINISHED
	});
};
export const removeProject = id => dispatch => {
	dispatch({
		type: LOADING_STARTED
	});

	projects
		.doc(id)
		.delete()
		.then(() => {
			dispatch({
				type: REMOVE_PROJECT,
				payload: id
			});
			dispatch({
				type: LOADING_FINISHED
			});
		});
};
export const createProject = payload => dispatch => {
	dispatch({
		type: LOADING_STARTED
	});

	projects
		.add(payload)
		.then(project =>
			project.get().then(documentSnapshot => {
				dispatch({
					type: CREATE_PROJECT,
					payload: {
						id: project.id,
						...documentSnapshot.data()
					}
				});
				dispatch({
					type: LOADING_FINISHED
				});
			})
		)
		.catch(err => console.log(err));
};

export const getProjects = () => dispatch => {
	dispatch({
		type: LOADING_STARTED
	});

	projects.get().then(querySnapshot => {
		dispatch({
			type: LOAD_PROJECTS,
			payload: querySnapshot.docs
		});
		dispatch({
			type: LOADING_FINISHED
		});
	});
};
