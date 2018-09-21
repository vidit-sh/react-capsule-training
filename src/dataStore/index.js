import React from "react";

const { Provider, Consumer } = React.createContext();

export class DataProvider extends React.Component {
  state = {};

  componentWillMount() {
    const { state } = this.props;
    this.setState({ ...state });
  }

  getStoreState = () => {
    return this.state;
  };

  setStoreState = newState => {
    this.setState({ ...newState });
  };

  render() {
    // Fill here
    return (
      <Provider
        value={
          // Fill here
        }
      >
        {children}
      </Provider>
    );
  }
}

export const withTasks = Component => {
  const WithStoreComponent = props => {
    return (
      // Fill here
    );
  };
  return WithStoreComponent;
};
