import React from "react";
import PropTypes from "prop-types";

import Todo from "../../atoms/Todo/Todo";

const TodoList = ({ tasks }) => (
  <ul>
    {tasks.map(task => (
      <Todo key={task.id} task={task} />
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
