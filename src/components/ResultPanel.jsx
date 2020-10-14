import React from "react";

const ResultPanel = ({
  firstNumber,
  secondNumber,
  addCommas,
  operator,
  result,
}) => {
  return (
    <div className="col-lg-6">
      <div className="card">
        <h3 className="card-header">Result</h3>
        <div className="card-body">
          <h1 id="first-number">{addCommas(firstNumber)}</h1>
          <h1 id="operator">{operator}</h1>
          <h1 id="second-number">{addCommas(secondNumber)}</h1>
          <hr />
          <h1 id="result">{addCommas(result)}</h1>
        </div>
      </div>
    </div>
  );
};

export default ResultPanel;
