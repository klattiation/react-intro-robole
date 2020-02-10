import { Reducer, AnyAction } from "redux";
import { UPDATE_ITEM_ACTION } from "./actions";
import { TodoListEntryProps } from "../components/todo-list-entry";

export type TodoListState = TodoListEntryProps[];

const initialState: TodoListState = [
  {
    id: "entry1",
    title: "Pizza essen",
    isDone: false
  },
  {
    id: "entry2",
    title: "React Tutorial",
    isDone: false
  },
  {
    id: "entry3",
    title: "Nach Hause gehen",
    isDone: false
  }
];

const TodoListReducer: Reducer<TodoListState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_ITEM_ACTION:
      return state.map((entry, idx) => {
        return idx === action.idx ? { ...entry, isDone: !entry.isDone } : entry;
      });
    default:
      return state;
  }
};

export default TodoListReducer;
