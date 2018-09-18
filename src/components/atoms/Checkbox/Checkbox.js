import React from "react";

const Checkbox = ({ onChange, value }) => {
  return <input type="checkbox" checked={value} onChange={onChange} />;
};

export default Checkbox;
