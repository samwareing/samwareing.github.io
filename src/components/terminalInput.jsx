import React, { Fragment } from "react";

const TerminalInput = (props) => {
  const buttonClass = "btn btn-primary m-1";
  return (
    <Fragment>
      {props.buttonValues.map((value) => (
        <button
          className={buttonClass}
          key={value}
          onClick={() => props.onPrintoutClick(value)}
        >
          {value}
        </button>
      ))}
    </Fragment>
  );
};

export default TerminalInput;
