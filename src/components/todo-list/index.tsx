import React, { FC } from "react";
import TodoListEntry, { TodoListEntryProps } from "../todo-list-entry";
import { connect, ConnectedProps } from "react-redux";
import { updateItemAction } from "../../state/actions";
import { GlobalState } from "../../state/createStore";

interface TodoListProps {
  entries: TodoListEntryProps[];
  // onClickEntry: (idx: number) => void;
}

const mapStateToProps = (state: GlobalState) => {
  return {
    entries: state.todolist
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onClickEntry: (idx: number) => dispatch(updateItemAction(idx))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & TodoListProps;

const TodoList: FC<Props> = props => {
  const entries = props.entries;
  const todosLeft = props.entries.filter(entry => !entry.isDone);
  return (
    <div>
      <div>{`Todos: ${todosLeft.length}`}</div>
      <ul>
        {entries.map((entry, idx) => (
          <TodoListEntry
            key={entry.id}
            {...entry}
            onClick={() => props.onClickEntry(idx)}
          />
        ))}
      </ul>
    </div>
  );
};

export default connector(TodoList);
