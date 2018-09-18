import React from "react";

class Checkbox extends React.PureComponent {
  render = () => {
    const { onChange } = this.props;
    return <input type="checkbox" onChange={onChange} />;
  };
}

export default Checkbox;
