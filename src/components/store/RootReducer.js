import { applyMiddleware, combineReducers, createStore } from "redux";
import { FetchaApiReducer } from "./reducers/FetchApi.reducer";
import { searchReducer } from "./reducers/search.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  apiReducer: FetchaApiReducer,
  serarchData: searchReducer,
});

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, composeEnhancers);
// const store = createStore(
//   rootReducer,composeWithDevTools(applyMiddleware(thunk))
//  window.__REDUX_DEVTOOLS_EXTENSION__?.(),
// );

export default store;
