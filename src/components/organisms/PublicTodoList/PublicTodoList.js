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
    const modifiedTasks = tasks.map(task => ({ ...task, done: false }));
    this.setState({
      modifiedTasks
    });
  };

  render = () => {
    const { modifiedTasks } = this.state;
    return (
      <section>
        <h2>Public Tasks</h2>
        <TodoList tasks={modifiedTasks} />
      </section>
    );
  };
}

export default PublicTodoList;
