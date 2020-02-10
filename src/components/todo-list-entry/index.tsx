import React, { FC } from "react";

export interface TodoListEntryProps {
  id: string;
  title: string;
  isDone: boolean;
  onClick?: () => void;
}

const TodoListEntry: FC<TodoListEntryProps> = props => {
  const strikeClassName = props.isDone ? "strike-through" : "";
  return (
    <li className={`TodoListEntry ${strikeClassName}`}>
      <label>
        <input type="checkbox" onChange={props.onClick} />
        <span>{props.title}</span>
      </label>
    </li>
  );
};

export default TodoListEntry;
