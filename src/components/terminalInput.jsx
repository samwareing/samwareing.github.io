import React, { Fragment } from "react";

const TerminalInput = ({ focusRef, onChange, value, onKeyPress }) => {
  return (
    <Fragment>
      <div className="row g-0">
        <div className="col g-0">
          <span
            className="bg-dark text-white"
            style={{ fontFamily: "monospace" }}
          >
            ${" "}
          </span>
          <input
            autoFocus
            ref={focusRef}
            className="bg-dark text-white"
            type="text"
            onChange={(event) => onChange(event)}
            value={value}
            onKeyUp={(event) => onKeyPress(event)}
            style={{
              border: "0",
              outline: "none",
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
              width: "90%",
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TerminalInput;
