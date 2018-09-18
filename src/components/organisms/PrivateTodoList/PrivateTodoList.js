import React from "react";
import TodoList from "../../molecules/TodoList/TodoList";

const tasks = {
  1234: {
    id: 1234,
    label: "I am a private task",
    done: false
  },
  4567: {
    id: 4567,
    label: "I am another private task",
    done: true
  }
};

const PrivateTodoList = () => (
  <section>
    <h2>Private Tasks</h2>
    <TodoList tasks={Object.keys(tasks).map(key => tasks[key])} />
  </section>
);

export default PrivateTodoList;
