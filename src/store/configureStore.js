import { createStore, applyMiddleware, compose } from "redux";

import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(authReducer, composeEnhancers());

export default store;
