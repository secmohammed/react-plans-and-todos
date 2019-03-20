import { combineReducers } from "redux";

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { firebaseReducer } from "react-redux-firebase";
import UIReducer from "./UIReducer";
import { firestoreReducer } from "redux-firestore";
export default combineReducers({
	auth: authReducer,
	project: projectReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	loading: UIReducer
});
