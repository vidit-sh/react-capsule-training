import React from "react";
import Todo from "../../components/Todo.js/Todo";

const tasks = {
  1234: {
    id: 1234,
    label: "I am a task",
    done: false
  },
  4567: {
    id: 4567,
    label: "I am another task",
    done: true
  }
};

const AnotherTodoList = () => (
  <ul>
    {Object.keys(tasks).map(key => (
      <Todo key={key} task={tasks[key]} />
    ))}
  </ul>
);

export default AnotherTodoList;
