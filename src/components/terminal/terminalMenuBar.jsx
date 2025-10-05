import React from "react";
import { getMenuBarComponent, MenuBarType } from "./menuBars/menuBarFactory";


const TerminalMenuBar = ({ menuBarType = MenuBarType.MACOS, onButtonClick }) => {
  const MenuBarComponent = getMenuBarComponent(menuBarType);
  return <MenuBarComponent onButtonClick={onButtonClick} />;
};

export default TerminalMenuBar;
