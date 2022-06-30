import React from "react";

// Header component that is refactored from 'App.js':
// NOTE: We are using '<>' and '</>' which is shorthand
// for '<ReactComponent></ReactComponent':

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </>
  );
}

export default Header;
