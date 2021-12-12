import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import IndexReducer from "./Reducers/IndexReducer";

const reducers = combineReducers({
    indexStore: IndexReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;