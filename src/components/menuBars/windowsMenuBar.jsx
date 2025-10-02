import React from "react";

const WindowsMenuBar = () => {
  return (
    <div className="windows-menu-bar d-flex align-items-center justify-content-between px-2 py-1 mb-2">
      <div className="windows-title flex-grow-1">
        samwareing@githubio-terminal: ~
      </div>
      <div className="d-flex align-items-center">
        <div className="windows-button windows-button-minimize" title="Minimize">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect x="0" y="5" width="12" height="2" fill="currentColor" />
          </svg>
        </div>
        <div className="windows-button windows-button-maximize" title="Maximize">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect x="0" y="0" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="windows-button windows-button-close" title="Close">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <line x1="1" y1="1" x2="11" y2="11" stroke="currentColor" strokeWidth="2" />
            <line x1="11" y1="1" x2="1" y2="11" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WindowsMenuBar;

