import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import usersReducers from "../reducers/usersReducers";
import thunk from "redux-thunk";
import loginReducers from "../reducers/loginReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    users: usersReducers,
    logined: loginReducers,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
