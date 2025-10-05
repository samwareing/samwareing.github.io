import React, { Fragment } from "react";

const TerminalText = (props) => {
  return (
    <Fragment>
      <span
        className="text-monospace text-white"
        style={{ fontFamily: "monospace", whiteSpace: "pre-wrap" }}
      >
        {props.lines}
      </span>
    </Fragment>
  );
};

export default TerminalText;
