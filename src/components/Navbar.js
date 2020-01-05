import React from "react";

function NavBar({score, topScore}) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Clicky Game
      </a>
      <span className="text-white" id="scoreCounter">SCORE: {score} | TOP SCORE: {topScore}</span>
    </nav>
  );
}

export default NavBar;
