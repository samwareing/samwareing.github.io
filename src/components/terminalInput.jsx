import React, { Fragment } from "react";

const TerminalInput = ({ onChange, value, onKeyPress }) => {
  return (
    <Fragment>
      <input
        className="form-control"
        type="text"
        onChange={(event) => onChange(event)}
        value={value}
        onKeyUp={(event) => onKeyPress(event)}
      />
    </Fragment>
  );
};

export default TerminalInput;
