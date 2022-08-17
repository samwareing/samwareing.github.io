import React, { Fragment } from "react";

const TerminalInput = (props) => {
  const buttonClass = "btn btn-primary m-1";
  return (
    <Fragment>
      <input
        className="form-control"
        type="text"
        // onKeyUp={(event) => props.onKeypress(event)}
      />
    </Fragment>
  );
};

export default TerminalInput;
