import { combineReducers } from "redux";
import blogReducer from "./blog.reducer";
import authReducer from "./auth.reducer";

export default combineReducers({
  blog: blogReducer,
  auth: authReducer,
});
