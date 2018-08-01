import React from "react";
import Display from "./Display";
import CalculatorButton from "./CalculatorButton";
import InputValue from "./InputValue"
import calculate from "../logic/calculate";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      inputValue: []
    };
  }

  handleClick = buttonName => {
    var arr = this.state.inputValue;
    this.setState(calculate(this.state, buttonName) , () => {
      if(this.state.total){
          var calTotal = parseFloat(this.state.total).toFixed(2);
          var data =  calTotal.split('.')
          if(parseInt(data[1])>0){
            this.setState({total : calTotal})          
          }else{
            this.setState({total : data[0]})          
          }
      }
      if(buttonName === "Clear"){
        arr = [];
        this.setState({      
          total: null,
          next: null,
          operation: null,
          inputValue: arr
        })
      }
      else if(buttonName === "="){
        arr = [];
      }else{
      arr.push(buttonName)
      }
      this.setState({inputValue:arr})
    });
  };

  render() {
    return (
      <div className="component-app">
        <InputValue value={this.state.inputValue}/>
        <Display value={this.state.total || "0"} />
        <CalculatorButton clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
