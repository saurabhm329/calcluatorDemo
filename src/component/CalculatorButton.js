import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./CalculatorButton.css";

class CalculatorButton extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-calculator-button">
        <div>
          <Button name="Clear" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} gray />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} gray />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} gray />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />           
          <Button name="=" clickHandler={this.handleClick} gray /> 
          <Button name="÷" clickHandler={this.handleClick} gray />
        </div>
      </div>
    );
  }
}
CalculatorButton.propTypes = {
  clickHandler: PropTypes.func,
};
export default CalculatorButton;
