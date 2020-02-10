import React, { FC, useState, useEffect } from "react";
import TodoListEntry from "../todo-list-entry";
import { useSelector, useDispatch } from "react-redux";
import { updateItemAction } from "../../state/actions";
import { GlobalState } from "../../state/createStore";
import getEntriesFromAPi from "../../services/api";

const TodoList: FC = () => {
  const [counter, setCounter] = useState(0);
  const entries = useSelector((state: GlobalState) => state.todolist);
  const dispatch = useDispatch();
  const todosLeft = entries.filter(entry => !entry.isDone);

  useEffect(() => {
    console.log("hook");
    getEntriesFromAPi().then(entries => {
      // TODO: put entries into redux store
      console.log("use effect dsasf", entries);
    });
  });

  return (
    <div>
      <div>{`Todos: ${todosLeft.length}`}</div>
      <ul>
        {entries.map((entry, idx) => (
          <TodoListEntry
            {...entry}
            key={entry.id}
            onClick={() => dispatch(updateItemAction(idx))}
          />
        ))}
      </ul>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div>{counter}</div>
    </div>
  );
};

export default TodoList;
