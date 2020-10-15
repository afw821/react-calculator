import React, { Component } from "react";
import Calculator from "./components/Calculator";
class App extends Component {
  state = {
    firstNumber: "",
    secondNumber: "",
    operator: "",
    isOperatorChosen: false,
    result: "",
  };

  handleClear = () => {
    this.setState({
      firstNumber: "",
      secondNumber: "",
      operator: "",
      isOperatorChosen: false,
      result: "",
    });
  };

  handleSetNumber = ({ currentTarget }) => {
    const value = currentTarget.value;
    if (this.state.result) return;
    if (!this.state.isOperatorChosen) {
      let firstNumber = this.state.firstNumber;
      if (firstNumber.includes(".") && value === ".") return;

      firstNumber += value;

      this.setState({ firstNumber });
    } else {
      let secondNumber = this.state.secondNumber;
      if (secondNumber.includes(".") && value === ".") return;

      secondNumber += value;

      this.setState({ secondNumber });
    }
  };

  handleSetResult = (result) => {
    this.setState({ result });
  };

  handleCalculateResult = () => {
    const { firstNumber, secondNumber, operator } = this.state;
    let result;

    switch (operator) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        this.handleSetResult(result);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        this.handleSetResult(result);
        break;
      case "/":
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        this.handleSetResult(result);
        break;
      case "^":
        result = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
        this.handleSetResult(result);
        break;
      case "X":
        result = firstNumber * parseFloat(secondNumber);
        this.handleSetResult(result);
        break;
      default:
        break;
    }
  };

  addCommas = (num) => {
    let number = num.toString();

    const regExp = /\B(?=(?:\d{3})+(?!\d))/g;

    const iOfPeriod = number.indexOf(".");

    if (number.includes(".") && iOfPeriod <= 3) return number; //45.9999 instead of 45.9,999

    if (iOfPeriod > 3) {
      const numBeforePeriod = number
        .slice(0, iOfPeriod + 1)
        .replace(regExp, ",");
      const numAfterPeriod = number.slice(numBeforePeriod.length - 1);

      const result = numBeforePeriod + numAfterPeriod;
      return result;
    }
    return number.replace(regExp, ",");
  };

  handleSetOperator = ({ currentTarget }) => {
    if (!this.state.firstNumber && !this.state.result) return;
    let operator = currentTarget.value;

    switch (operator) {
      case "plus":
        operator = "+";
        break;
      case "minus":
        operator = "-";
        break;
      case "divide":
        operator = "/";
        break;
      case "power":
        operator = "^";
        break;
      case "times":
        operator = "X";
        break;
    }

    let isOperatorChosen = true;
    this.setState({ operator, isOperatorChosen });
  };
  render() {
    const {
      firstNumber,
      secondNumber,
      operator,
      isOperatorChosen,
      result,
    } = this.state;
    return (
      <Calculator
        handleSetNumber={this.handleSetNumber}
        handleClear={this.handleClear}
        handleCalculateResult={this.handleCalculateResult}
        handleSetOperator={this.handleSetOperator}
        addCommas={this.addCommas}
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        operator={operator}
        result={result}
      />
    );
  }
}

export default App;
