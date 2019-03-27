import { combineReducers } from "redux";

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import UIReducer from "./UIReducer";
import notificationReducer from "./notificationReducer";
export default combineReducers({
	auth: authReducer,
	project: projectReducer,
	loading: UIReducer,
	notification: notificationReducer
});
