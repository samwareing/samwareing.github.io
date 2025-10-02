import MacOsMenuBar from "./macOsMenuBar";
import WindowsMenuBar from "./windowsMenuBar";

export const MenuBarType = {
  MACOS: "macos",
  WINDOWS: "windows",
};

/**
 * Factory function to get the appropriate menu bar component based on type
 * @param {string} type - The type of menu bar (use MenuBarType enum)
 * @returns {React.Component} The menu bar component
 */
export const getMenuBarComponent = (type) => {
  switch (type) {
    case MenuBarType.MACOS:
      return MacOsMenuBar;
    case MenuBarType.WINDOWS:
      return WindowsMenuBar;
    default:
      return MacOsMenuBar; // Default to macOS
  }
};

