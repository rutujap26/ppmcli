import { combineReducers } from "redux";
import errorReducer from "./errorReducers";
import ProjectReducer from "./ProjectReducer";

export default combineReducers({
    errors: errorReducer,
    projects: ProjectReducer
});