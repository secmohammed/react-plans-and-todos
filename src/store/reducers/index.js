import { combineReducers } from "redux";

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import UIReducer from "./UIReducer";
import notificationReducer from "./notificationReducer";
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore' // <- needed if using firestore

export default combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
	auth: authReducer,
	project: projectReducer,
	loading: UIReducer,
	notification: notificationReducer
});
