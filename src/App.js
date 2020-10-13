import React, { Component } from "react";

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

    let firstNumber = this.state.firstNumber;

    firstNumber += value;

    this.setState({ firstNumber });
  };

  handleSetResult = (result) => {
    this.setState({ result });
  };

  handleCalculateResult = () => {
    const { firstNumber, secondNumber, operator } = this.state;
    let result;

    switch (operator) {
      case "plus":
        result = parseInt(firstNumber) + parseInt(secondNumber);
        this.handleSetResult(result);
        break;
      case "minus":
        result = parseInt(firstNumber) - parseInt(secondNumber);
        this.handleSetResult(result);
        break;
      case "divide":
        result = parseInt(firstNumber) / parseInt(secondNumber);
        this.handleSetResult(result);
        break;
      case "power":
        result = parseInt(firstNumber) - parseInt(secondNumber);
        this.handleSetResult(result);
        break;
      case "multiply":
        result = firstNumber - parseInt(secondNumber);
        this.handleSetResult(result);
        break;
    }
  };

  handleSetOperator = ({ currentTarget }) => {
    if (!this.state.firstNumber) return;
    let operator = currentTarget.value;
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
      <>
        <div className="jumbotron">
          <h1 className="text-center">jQuery Calculator</h1>
          <h3 className="text-center">
            Perform basic mathematic operations using the power of React.js!
          </h3>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <h3 className="card-header">Calculator</h3>

                <div className="card-body">
                  <button
                    id="button-1"
                    className="btn btn-primary number"
                    value="1"
                    onClick={(e) => this.handleSetNumber(e)}
                  >
                    <h1>1</h1>
                  </button>
                  <button
                    id="button-2"
                    className="btn btn-primary number"
                    value="2"
                    onClick={(e) => this.handleSetNumber(e)}
                  >
                    <h1>2</h1>
                  </button>
                  <button
                    id="button-3"
                    className="btn btn-primary number"
                    value="3"
                    onClick={(e) => this.handleSetNumber(e)}
                  >
                    <h1>3</h1>
                  </button>
                  <button
                    id="button-plus"
                    className="btn btn-danger operator"
                    value="plus"
                    onClick={(e) => this.handleSetOperator(e)}
                  >
                    <h1>+</h1>
                  </button>
                  <br />
                  <button
                    id="button-4"
                    className="btn btn-primary number"
                    value="4"
                    onClick={(e) => this.handleSetNumber(e)}
                  >
                    <h1>4</h1>
                  </button>
                  <button
                    id="button-5"
                    className="btn btn-primary number"
                    value="5"
                    onClick={(e) => this.handleSetNumber(e)}
                  >
                    <h1>5</h1>
                  </button>
                  <button
                    id="button-6"
                    className="btn btn-primary number"
                    value="6"
                    onClick={(e) => this.handleSetNumber(e)}
                  >
                    <h1>6</h1>
                  </button>
                  <button
                    id="button-minus"
                    className="btn btn-danger operator"
                    value="minus"
                    onClick={(e) => this.handleSetOperator(e)}
                  >
                    <h1>&minus;</h1>
                  </button>
                  <br />
                  <button
                    id="button-7"
                    className="btn btn-primary number"
                    value="7"
                    onClick={(e) => this.handleSetNumber(e)}
                  >
                    <h1>7</h1>
                  </button>
                  <button
                    id="button-8"
                    className="btn btn-primary number"
                    value="8"
                    onClick={(e) => this.handleSetNumber(e)}
                  >
                    <h1>8</h1>
                  </button>
                  <button
                    id="button-9"
                    className="btn btn-primary number"
                    value="9"
                    onClick={(e) => this.handleSetNumber(e)}
                  >
                    <h1>9</h1>
                  </button>
                  <button
                    id="button-multiply"
                    className="btn btn-danger operator"
                    value="times"
                    onClick={(e) => this.handleSetOperator(e)}
                  >
                    <h1>&times;</h1>
                  </button>
                  <br />
                  <button
                    id="button-0"
                    className="btn btn-primary number"
                    value="0"
                    onClick={(e) => this.handleSetNumber(e)}
                  >
                    <h1>0</h1>
                  </button>
                  <button
                    id="button-divide"
                    className="btn btn-danger operator"
                    value="divde"
                    onClick={(e) => this.handleSetOperator(e)}
                  >
                    <h1>&divide;</h1>
                  </button>
                  <button
                    id="button-power"
                    className="btn btn-danger operator"
                    value="power"
                    onClick={(e) => this.handleSetOperator(e)}
                  >
                    <h1>^</h1>
                  </button>
                  <button
                    id="button-equal"
                    className="btn btn-success equal"
                    value="equal"
                    onClick={(e) => this.handleCalculateResult(e)}
                  >
                    <h1>=</h1>
                  </button>
                  <br />
                  <button
                    id="button-clear"
                    className="btn btn-dark clear"
                    value="clear"
                    onClick={(e) => this.handleClear(e)}
                  >
                    <h1>clear</h1>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <h3 className="card-header">Result</h3>
                <div className="card-body">
                  <h1 id="first-number">{firstNumber}</h1>
                  <h1 id="operator">{operator}</h1>
                  <h1 id="second-number">{secondNumber}</h1>
                  <hr />
                  <h1 id="result">{result}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
