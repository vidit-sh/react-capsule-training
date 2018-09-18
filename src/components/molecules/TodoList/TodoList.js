import React from "react";
import PropTypes from "prop-types";

import Todo from "../../atoms/Todo/Todo";

const TodoList = ({ tasks, onChange }) => (
  <ul>
    {tasks.map((task, index) => (
      <Todo key={task.id} task={task} onChange={() => onChange(index)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    }).isRequired
  )
};

export default TodoList;
