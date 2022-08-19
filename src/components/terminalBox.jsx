import React, { useState, Fragment } from "react";

import TerminalMenuBar from "./terminalMenuBar";
import TerminalText from "./terminalText";
import TerminalInput from "./terminalInput";

const commandActions = require("../data/commandActions.json");
let allowedCommands = Object.keys(commandActions);

function TerminalBox() {
  const [lines, setLinesArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addEnteredCommandString = (enteredCommand) => {
    setLinesArray((lines) => [
      ...lines,
      "$ ",
      enteredCommand,
      <br key={lines.length} />,
    ]);
  };

  const addAllowedCommandValue = (enteredCommand) => {
    const split = commandActions[enteredCommand].split("\n");

    for (let key in split) {
      setLinesArray((lines) => [
        ...lines,
        split[key],
        <br key={lines.length} />,
      ]);
    }
  };

  const addErrorString = (enteredCommand) => {
    const errorMessage =
      'Error - "' +
      enteredCommand +
      '" is not a recognised command. Try entering "help" instead.';

    setLinesArray((lines) => [
      ...lines,
      errorMessage,
      <br key={lines.length} />,
    ]);
  };

  const addToLines = (enteredCommand) => {
    if (enteredCommand === "clear") {
      setLinesArray([]);
      return;
    }

    addEnteredCommandString(enteredCommand);

    if (enteredCommand === "") {
      return;
    }

    if (allowedCommands.includes(enteredCommand)) {
      addAllowedCommandValue(enteredCommand);
    } else {
      addErrorString(enteredCommand);
    }
  };

  const handleKeyPress = (event) => {
    // keyCode 13 is the enter key
    if (event.keyCode === 13) {
      const command = event.target.value.trim();
      addToLines(command);
      setInputValue("");
    }
  };

  return (
    <Fragment>
      <div
        className="d-flex bg-dark rounded overflow-auto"
        style={{
          height: "75vh",
          width: "75vw",
          flexDirection: "column-reverse",
        }}
      >
        <div className="m-2">
          <TerminalMenuBar />
          <TerminalText lines={lines} />
          <TerminalInput
            onChange={handleChange}
            value={inputValue}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default TerminalBox;
