import { combineReducers } from "redux";
import details from "./detailsReducers";
import users from "./usersReducers";

const rootReducer = combineReducers({
    details,
    users
});

export default rootReducer;