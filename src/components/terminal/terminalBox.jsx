import React, { useState, useRef, Fragment, useEffect } from "react";

import TerminalMenuBar from "./terminalMenuBar";
import TerminalText from "./terminalText";
import TerminalInput from "./terminalInput";
import { getMenuBarTypeFromOS } from "../../utils/detectOS";

import { commands } from "./commands";

const allowedCommands = Object.keys(commands);

const enterKeyCode = 13;

function TerminalBox({ isDeveloperMode }) {
  const focusRef = useRef(null);
  const [lines, setLinesArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [menuBarType] = useState(() => getMenuBarTypeFromOS());
  const [isShaking, setIsShaking] = useState(false);

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
    let htmlElements = commands[enteredCommand](lines.length, isDeveloperMode);
    setLinesArray((lines) => [
      ...lines,
      ...htmlElements,
      <br key={lines.length + htmlElements.length} />,
      <span
        key={lines.length + htmlElements.length + 1}
        className="d-block mb-2"
      ></span>,
    ]);
  };

  const addErrorString = (enteredCommand) => {
    const errorMessage =
      "sam-shell: command not found: " + enteredCommand + ' Try typing "help".';

    setLinesArray((lines) => [
      ...lines,
      errorMessage,
      <br key={lines.length} />,
      <span key={lines.length + 1} className="d-block mb-2"></span>,
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
    if (event.ctrlKey && event.key === "c") {
      event.preventDefault();
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 250);
      return;
    }

    // keyCode 13 is the enter key
    if (event.keyCode === enterKeyCode) {
      const command = event.target.value.trim();
      addToLines(command);
      setInputValue("");
    }
  };

  const handleClick = () => {
    focusRef.current.focus();
  };

  const handleMenuButtonClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 250);
  };

  return (
    <Fragment>
      <div
        className={`d-flex flex-column bg-dark rounded overflow-hidden terminal-box ${
          isShaking ? "shake" : ""
        }`}
      >
        <TerminalMenuBar
          menuBarType={menuBarType}
          onButtonClick={handleMenuButtonClick}
        />
        <div
          className="d-flex flex-grow-1 overflow-auto terminal-content"
          onClick={handleClick}
          style={{
            flexDirection: "column-reverse",
          }}
        >
          <div className="m-2 mb-0 pb-0">
            <TerminalText lines={lines} />
          </div>
        </div>
        <div className="terminal-input-container" onClick={handleClick}>
          <TerminalInput
            focusRef={focusRef}
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
