import "./App.css";
import { useState } from "react";
import TerminalBox from "./components/terminal/terminalBox";
import DeveloperToggle from "./components/developerToggle";
import HiringManagerView from "./components/hiringManagerView";

function App() {
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);

  const handleToggleMode = () => {
    setIsDeveloperMode(!isDeveloperMode);
  };

  return (
    <main className="container-fluid min-vh-100 d-flex flex-column p-2 p-md-0">
      <div className="d-flex justify-content-center pt-3">
        <DeveloperToggle isDeveloperMode={isDeveloperMode} onToggle={handleToggleMode} />
      </div>
      <div className="d-flex flex-grow-1 align-items-center justify-content-center">
        {isDeveloperMode ? (
          <TerminalBox isDeveloperMode={isDeveloperMode} />
        ) : (
          <HiringManagerView />
        )}
      </div>
    </main>
  );
}

export default App;
