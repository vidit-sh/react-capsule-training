import React from "react";
import PropTypes from "prop-types";

import "./Todo.css";

const Todo = ({ task }) => (
  <li className={task.done ? "task-done" : "task-not-done"}>{task.label}</li>
);

Todo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired
};

export default Todo;
