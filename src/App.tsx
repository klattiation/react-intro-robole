import React, { FC } from "react";
import { Provider } from "react-redux";
import "./App.css";
import TodoList from "./components/todo-list/todolist-hooks";
import store from "./state/createStore";

interface HeadlineProps {
  title: string;
}

const Headline: FC<HeadlineProps> = props => {
  return (
    <header className="App-header">
      <h1>{props.title}</h1>
    </header>
  );
};

const App = () => {
  const title = "meine app";
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-body">
          <Headline title={title} />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
