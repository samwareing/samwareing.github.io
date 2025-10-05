import React from "react";

function DeveloperToggle({ isDeveloperMode, onToggle }) {
  return (
    <div className="developer-toggle-container d-flex align-items-center gap-2 mb-3">
      <span className={`developer-label ${!isDeveloperMode ? 'active' : ''}`}>
        Hiring-Manager
      </span>
      <div className="toggle-switch" onClick={onToggle}>
        <div className={`toggle-slider ${isDeveloperMode ? 'active' : ''}`}></div>
      </div>
      <span className={`developer-label ${isDeveloperMode ? 'active' : ''}`}>
        Developer
      </span>
    </div>
  );
}

export default DeveloperToggle;

