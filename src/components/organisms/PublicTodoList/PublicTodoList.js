import React from "react";

import TodoList from "../../molecules/TodoList/TodoList";

const tasks = [
  {
    id: 1234,
    label: "I am a public task",
    done: false
  },
  {
    id: 4567,
    label: "I am another public task",
    done: true
  }
];

class PublicTodoList extends React.Component {
  state = {
    modifiedTasks: []
  };

  componentWillMount = () => {
    const modifiedTasks = tasks.map(task => ({ ...task, done: true }));
    this.setState({
      modifiedTasks
    });
  };

  onChange = index => {
    const tasks = [...this.state.modifiedTasks];
    tasks[index].done = !tasks[index].done;
    this.setState({
      modifiedTasks: tasks
    });
  };

  render = () => {
    const { modifiedTasks } = this.state;
    return (
      <section>
        <h2>Public Tasks</h2>
        <TodoList tasks={modifiedTasks} onChange={this.onChange} />
      </section>
    );
  };
}

export default PublicTodoList;
