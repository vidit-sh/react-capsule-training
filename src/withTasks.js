import React from "react";

export const { Provider, Consumer } = React.createContext();

const withTasks = Component => {
  return props => {
    return (
      <Consumer>{tasks => <Component {...props} tasks={tasks} />}</Consumer>
    );
  };
};

export default withTasks;
