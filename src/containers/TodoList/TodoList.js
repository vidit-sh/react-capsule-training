import React from "react";
import Todo from "../../components/Todo.js/Todo";

const tasks = [
  {
    id: 1234,
    label: "I am a task",
    done: false
  },
  {
    id: 4567,
    label: "I am another task",
    done: true
  }
];

const TodoList = () => (
  <ul>
    {tasks.map(task => (
      <Todo key={task.id} task={task} />
    ))}
  </ul>
);

export default TodoList;
