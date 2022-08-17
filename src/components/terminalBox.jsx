import React, { Component, Fragment } from "react";

import TerminalMenuBar from "./terminalMenuBar";
import TerminalText from "./terminalText";
import TerminalInput from "./terminalInput";

const printouts = require("../data/printouts.json");
const allowedCommands = Object.keys(printouts);

class TerminalBox extends Component {
  state = { lines: [] };

  handlePrintoutClick = (enteredCommand) => {
    if (enteredCommand === "clear") {
      this.setState({ lines: [] });
      return;
    }

    let lines = this.state.lines;

    const split = printouts[enteredCommand].split("\n");

    for (let key in split) {
      lines.push("$ " + split[key]);
      lines.push(<br key={lines.length} />);
    }

    this.setState({ lines });
  };

  render() {
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
            <TerminalText lines={this.state.lines} />
            <TerminalInput
              buttonValues={allowedCommands}
              onPrintoutClick={this.handlePrintoutClick}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TerminalBox;
