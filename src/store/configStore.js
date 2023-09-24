import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import usersReducers from "../reducers/usersReducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    users: usersReducers,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
