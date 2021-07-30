import { createStore } from "redux";
import rootReducer from "redux/reducers/index.js";

const store = createStore(rootReducer);

export default store;