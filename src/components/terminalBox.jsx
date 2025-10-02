import React, { useState, useRef, Fragment, useEffect } from "react";

import TerminalMenuBar from "./terminalMenuBar";
import TerminalText from "./terminalText";
import TerminalInput from "./terminalInput";
import { MenuBarType } from "./menuBars/menuBarFactory";
import { getMenuBarTypeFromOS } from "../utils/detectOS";

import { commands } from "./commands";

const allowedCommands = Object.keys(commands);

function TerminalBox() {
  const focusRef = useRef(null);
  const [lines, setLinesArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [menuBarType] = useState(() => getMenuBarTypeFromOS());

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

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

  const addCommandValue = (enteredCommand) => {
    let htmlElements = commands[enteredCommand](lines.length);
    setLinesArray((lines) => [
      ...lines,
      ...htmlElements,
      <br key={lines.length + htmlElements.length} />,
    ]);
  };

  const addErrorString = (enteredCommand) => {
    const errorMessage =
      "sam-shell: command not found: " +
      enteredCommand +
      ". Try typing \"help\".";

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
    const [command, ...args] = enteredCommand.trim().split(/\s+/);
    const lowercaseCommand = command.toLowerCase();

    if (allowedCommands.includes(lowercaseCommand)) {
      addCommandValue(lowercaseCommand);
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

  const handleClick = () => {
    focusRef.current.focus();
  };

  return (
    <Fragment>
      <div className="d-flex flex-column bg-dark rounded overflow-hidden terminal-box">
        <TerminalMenuBar menuBarType={menuBarType} />
        <div
          className="d-flex flex-grow-1 overflow-auto"
          onClick={handleClick}
          style={{
            flexDirection: "column-reverse",
          }}
        >
          <div className="m-2">
            <TerminalText lines={lines} />
            <TerminalInput
              focusRef={focusRef}
              onChange={handleChange}
              value={inputValue}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TerminalBox;
