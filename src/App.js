import "./App.css";
import { useState, useEffect } from "react";
import TerminalBox from "./components/terminal/terminalBox";
import DeveloperToggle from "./components/developerToggle";
import HiringManagerView from "./components/hiringManagerView";

function App() {
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);

  const handleToggleMode = () => {
    setIsDeveloperMode(!isDeveloperMode);
  };

  useEffect(() => {
    if (!isDeveloperMode) {
      document.body.classList.add('allow-scrolling');
      document.documentElement.classList.add('allow-scrolling');
    } else {
      document.body.classList.remove('allow-scrolling');
      document.documentElement.classList.remove('allow-scrolling');
    }

    return () => {
      document.body.classList.remove('allow-scrolling');
      document.documentElement.classList.remove('allow-scrolling');
    };
  }, [isDeveloperMode]);

  return (
    <main className={`container-fluid min-vh-100 d-flex flex-column p-2 p-md-0 ${!isDeveloperMode ? 'allow-scrolling' : ''}`}>
      <div className="d-flex justify-content-center pt-2">
        <DeveloperToggle isDeveloperMode={isDeveloperMode} onToggle={handleToggleMode} />
      </div>
      <div className="d-flex flex-grow-1 align-items-start justify-content-center">
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
