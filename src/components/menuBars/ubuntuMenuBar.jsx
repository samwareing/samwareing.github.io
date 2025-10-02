import React from "react";

const UbuntuMenuBar = () => {
  return (
    <div className="ubuntu-menu-bar d-flex align-items-center justify-content-between px-2 py-1 mb-2">
      <div className="ubuntu-title flex-grow-1">
        samwareing@githubio-terminal: ~
      </div>
      <div className="d-flex align-items-center gap-2">
        <div className="ubuntu-button ubuntu-button-minimize" title="Minimize">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect x="2" y="5" width="8" height="2" fill="currentColor" />
          </svg>
        </div>
        <div className="ubuntu-button ubuntu-button-maximize" title="Maximize">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect x="2" y="2" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="ubuntu-button ubuntu-button-close" title="Close">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <line x1="3" y1="3" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="9" y1="3" x2="3" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UbuntuMenuBar;

