import React, { useState, Fragment } from "react";

import TerminalMenuBar from "./terminalMenuBar";
import TerminalText from "./terminalText";
import TerminalInput from "./terminalInput";

const stringCommands = require("../data/stringCommands.json");
const allowedStringCommands = Object.keys(stringCommands);

const allowedActionCommands = ["email", "phone"];

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

  const addAllowedStringCommandValue = (enteredCommand) => {
    const split = stringCommands[enteredCommand].split("\n");

    for (let key in split) {
      setLinesArray((lines) => [
        ...lines,
        split[key],
        <br key={lines.length} />,
      ]);
    }
  };

  const addAllowedActionCommandValue = (enteredCommand) => {
    let htmlElements = [];
    if (enteredCommand === "email") {
      htmlElements.push("Email me at: ");
      htmlElements.push(
        <a
          href="mailto:samwareing@outlook.com"
          key={lines.length + htmlElements.length}
        >
          samwareing@outlook.com
        </a>
      );
    } else if (enteredCommand === "phone") {
      htmlElements.push("Phone me at: ");
      htmlElements.push(
        <a href="tel:+447903633897" key={lines.length + htmlElements.length}>
          +44 (0)7903 633897
        </a>
      );
    }

    setLinesArray((lines) => [
      ...lines,
      ...htmlElements,
      <br key={lines.length + htmlElements.length} />,
    ]);
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

    if (allowedStringCommands.includes(enteredCommand)) {
      addAllowedStringCommandValue(enteredCommand);
    } else if (allowedActionCommands.includes(enteredCommand)) {
      addAllowedActionCommandValue(enteredCommand);
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
