import React, { Fragment } from "react";

const TerminalText = (props) => {
  return (
    <Fragment>
      <p
        className="text-monospace text-white"
        style={{ fontFamily: "monospace", whiteSpace: "pre-wrap" }}
      >
        {props.message}
      </p>
    </Fragment>
  );
};

export default TerminalText;
