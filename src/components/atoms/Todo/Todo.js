import React from "react";
import PropTypes from "prop-types";

import "./Todo.css";
import Checkbox from "../Checkbox/Checkbox";

const Todo = ({ task, onChange }) => (
  <li className={task.done ? "task-done" : "task-not-done"}>
    {task.label} <Checkbox onChange={onChange} />
  </li>
);

Todo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired
};

export default Todo;
