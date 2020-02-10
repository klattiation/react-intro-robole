import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todolist, { TodoListState } from "./todolist.reducer";

export interface GlobalState {
  todolist: TodoListState;
}

const reducers = combineReducers<GlobalState>({
  todolist
});

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducers, {}, composeEnhancers());

export default store;
