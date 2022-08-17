import React, { Component, Fragment } from "react";

import TerminalMenuBar from "./terminalMenuBar";
import TerminalText from "./terminalText";
import TerminalInput from "./terminalInput";

const commandActions = require("../data/commandActions.json");
let allowedCommands = Object.keys(commandActions);

class TerminalBox extends Component {
  state = { lines: [], inputValue: "" };

  render() {
    const { lines, inputValue } = this.state;
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
              onChange={this.handleChange}
              value={inputValue}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        </div>
      </Fragment>
    );
  }

  handleChange = (e) => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  };

  handleKeyPress = (event) => {
    // keyCode 13 is the enter key
    if (event.keyCode === 13) {
      const command = event.target.value.trim();

      this.addToLines(command);

      this.setState({ inputValue: "" });
    }
  };

  addToLines = (enteredCommand) => {
    if (enteredCommand === "clear") {
      this.setState({ lines: [] });
      return;
    }

    let { lines } = this.state;

    lines.push("$ " + enteredCommand);
    lines.push(<br key={lines.length} />);

    if (enteredCommand === "") {
      this.setState({ lines });
      return;
    }

    if (allowedCommands.includes(enteredCommand)) {
      const split = commandActions[enteredCommand].split("\n");

      for (let key in split) {
        lines.push(split[key]);
        lines.push(<br key={lines.length} />);
      }

      this.setState({ lines });
    } else {
      const errorMessage =
        'Error - "' +
        enteredCommand +
        '" is not a recognised command. Try entering "help" instead.';

      lines.push(errorMessage);
      lines.push(<br key={lines.length} />);
      this.setState({ lines });
    }
  };
}

export default TerminalBox;
