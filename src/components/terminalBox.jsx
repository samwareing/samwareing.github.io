import React, { Component, Fragment } from "react";

import TerminalMenuBar from "./terminalMenuBar";
import TerminalText from "./terminalText";
import TerminalInput from "./terminalInput";

const printouts = require("../data/printouts.json");
const printoutNames = Object.keys(printouts);

class TerminalBox extends Component {
  state = { printout: [] };

  handlePrintoutClick = (printoutName) => {
    if (printoutName === "clear") {
      this.setState({ printout: [] });
      return;
    }

    let printout = this.state.printout;

    const split = printouts[printoutName].split("\n");

    for (let key in split) {
      printout.push("$ " + split[key]);
      printout.push(<br key={printout.length} />);
    }

    this.setState({ printout });
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
            <TerminalText message={this.state.printout} />
            <TerminalInput
              buttonValues={printoutNames}
              onPrintoutClick={this.handlePrintoutClick}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TerminalBox;
