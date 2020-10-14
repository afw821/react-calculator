import React from "react";

const Operator = ({ value, operator, handleSetOperator, isClear }) => {
  return (
    <button
      id={`button-${value}`}
      className={`btn btn-danger ${isClear ? "" : "btn-width"} operator`}
      value={value}
      onClick={(e) => handleSetOperator(e)}
    >
      <h1>{operator}</h1>
    </button>
  );
};

export default Operator;
