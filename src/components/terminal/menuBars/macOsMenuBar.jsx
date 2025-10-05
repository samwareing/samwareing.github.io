import React from "react";

const MacOsMenuBar = ({ onButtonClick }) => {
  return (
    <div className="macos-menu-bar d-flex align-items-center justify-content-between px-2 py-1 mb-2">
      <div className="d-flex align-items-center gap-2">
        <div className="macos-button macos-button-close" title="Close" onClick={onButtonClick}>
          <svg className="macos-button-icon" width="6" height="6" viewBox="0 0 6 6">
            <line x1="1" y1="1" x2="5" y2="5" stroke="#4d0000" strokeWidth="1" strokeLinecap="round" />
            <line x1="5" y1="1" x2="1" y2="5" stroke="#4d0000" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
        <div className="macos-button macos-button-minimize" title="Minimize" onClick={onButtonClick}>
          <svg className="macos-button-icon" width="6" height="6" viewBox="0 0 6 6">
            <line x1="1" y1="3" x2="5" y2="3" stroke="#975500" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
        <div className="macos-button macos-button-maximize" title="Maximize" onClick={onButtonClick}>
          <svg className="macos-button-icon" width="8" height="8" viewBox="0 0 8 8">
            <line x1="1" y1="2.5" x2="4" y2="0.5" stroke="#006400" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="4" y1="0.5" x2="7" y2="2.5" stroke="#006400" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="1" y1="5.5" x2="4" y2="7.5" stroke="#006400" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="4" y1="7.5" x2="7" y2="5.5" stroke="#006400" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="macos-title text-center flex-grow-1">
        samwareing@githubio-terminal: ~
      </div>
      <div style={{ width: "54px" }}></div> {}
    </div>
  );
};

export default MacOsMenuBar;

