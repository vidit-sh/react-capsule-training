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

const PublicTodoList = () => (
  <section>
    <h2>Public Tasks</h2>
    <TodoList tasks={tasks} />
  </section>
);

export default PublicTodoList;
