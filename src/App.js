import React, { Component } from "react";
import TodoList from "./containers/TodoList/TodoList";
import AnotherTodoList from "./containers/AnotherTodoList/AnotherTodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <AnotherTodoList />
      </div>
    );
  }
}

export default App;
