import React from "react";

import TodoList from "../../molecules/TodoList/TodoList";
import { withTasks } from "../../../dataStore";

class PublicTodoList extends React.Component {
  onChange = index => {
    const { store } = this.props;
    const { tasks } = store.getStoreState();
    tasks[index].done = !tasks[index].done;
    store.setStoreState({
      tasks: [...tasks]
    });
  };

  render = () => {
    const { store } = this.props;
    const { tasks } = store.getStoreState();
    return (
      <section>
        <h2>Public Tasks</h2>
        <TodoList tasks={tasks} onChange={this.onChange} />
      </section>
    );
  };
}

export default withTasks(PublicTodoList);
