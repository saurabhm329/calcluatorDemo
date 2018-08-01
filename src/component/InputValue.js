import React from "react";
import PropTypes from "prop-types";

import "./InputValue.css";

class InputValue extends React.Component {
  render() {
    return (
      <div className="input-component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
InputValue.propTypes = {
  value: PropTypes.string,
};
export default InputValue;
