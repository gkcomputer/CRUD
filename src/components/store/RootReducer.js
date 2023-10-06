import { applyMiddleware, combineReducers, createStore } from "redux";
import { FetchaApiReducer } from "./reducers/FetchApi.reducer";
import { searchReducer } from "./reducers/search.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  apiReducer: FetchaApiReducer,
  serarchData: searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
