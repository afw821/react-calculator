import React from "react";

const Number = ({ value, handleSetNumber }) => {
  return (
    <button
      id="button-${value}"
      className="btn btn-primary btn-width number"
      value={value}
      onClick={(e) => handleSetNumber(e)}
    >
      <h1>{value}</h1>
    </button>
  );
};

export default Number;
