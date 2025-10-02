import React from "react";
import { getMenuBarComponent, MenuBarType } from "./menuBars/menuBarFactory";


const TerminalMenuBar = ({ menuBarType = MenuBarType.MACOS }) => {
  const MenuBarComponent = getMenuBarComponent(menuBarType);
  return <MenuBarComponent />;
};

export default TerminalMenuBar;
