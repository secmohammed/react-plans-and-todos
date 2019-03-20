import { projects } from "../../config/firebase";
import {
	LOAD_PROJECTS,
	CREATE_PROJECT,
	GET_PROJECT,
	REMOVE_PROJECT,
	LOADING_STARTED,
	LOADING_FINISHED
} from "./types";

export const updateProect = (id, payload) => dispatch => {
	projects
		.doc(id)
		.update(payload)
		.then(res => console.log(res));
};

export const getProject = id => async dispatch => {
	dispatch({
		type: LOADING_STARTED
	});
	let document = await projects.doc(id).get();
	dispatch({
		type: GET_PROJECT,
		payload: {
			id,
			...document.data()
		}
	});
	dispatch({
		type: LOADING_FINISHED
	});
};
export const removeProject = id => dispatch => {
	projects
		.doc(id)
		.delete()
		.then(() => console.log("deleted"));
};
export const createProject = payload => dispatch => {
	projects
		.add(payload)
		.then(project =>
			project.get().then(documentSnapshot =>
				dispatch({
					type: CREATE_PROJECT,
					payload: {
						id: project.id,
						...documentSnapshot.data()
					}
				})
			)
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
	});
	dispatch({
		type: LOADING_FINISHED
	});
};
