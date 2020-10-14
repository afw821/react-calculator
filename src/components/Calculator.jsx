import React from "react";
import ResultPanel from "../components/ResultPanel";
import Number from "../components/Number";
import Operator from "../components/Operator";

const Calculator = ({
  handleSetNumber,
  handleClear,
  handleCalculateResult,
  handleSetOperator,
  addCommas,
  firstNumber,
  secondNumber,
  operator,
  result,
}) => {
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
                <Number value="1" handleSetNumber={handleSetNumber} />
                <Number value="2" handleSetNumber={handleSetNumber} />
                <Number value="3" handleSetNumber={handleSetNumber} />
                <Operator
                  value="plus"
                  operator="+"
                  handleSetOperator={handleSetOperator}
                  isClear={false}
                />
                <br />
                <Number value="4" handleSetNumber={handleSetNumber} />
                <Number value="5" handleSetNumber={handleSetNumber} />
                <Number value="6" handleSetNumber={handleSetNumber} />
                <Operator
                  value="minus"
                  operator="-"
                  handleSetOperator={handleSetOperator}
                  isClear={false}
                />
                <br />
                <Number value="7" handleSetNumber={handleSetNumber} />
                <Number value="8" handleSetNumber={handleSetNumber} />
                <Number value="9" handleSetNumber={handleSetNumber} />
                <Operator
                  value="multiply"
                  operator="x"
                  handleSetOperator={handleSetOperator}
                  isClear={false}
                />
                <br />
                <Number value="0" handleSetNumber={handleSetNumber} />
                <Operator
                  value="divide"
                  operator="&divide;"
                  handleSetOperator={handleSetOperator}
                  isClear={false}
                />
                <Operator
                  value="power"
                  operator="^"
                  handleSetOperator={handleSetOperator}
                  isClear={false}
                />
                <Operator
                  value="equal"
                  operator="="
                  handleSetOperator={handleCalculateResult}
                  isClear={false}
                />
                <br />
                <Operator
                  value="clear"
                  operator="clear"
                  handleSetOperator={handleClear}
                  isClear={true}
                />
              </div>
            </div>
          </div>

          <ResultPanel
            firstNumber={firstNumber}
            secondNumber={secondNumber}
            addCommas={addCommas}
            operator={operator}
            result={result}
          />
        </div>
      </div>
    </>
  );
};

export default Calculator;
