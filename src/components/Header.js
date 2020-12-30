import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> TODO </h1>
      </div>
      <nav>
        <a href="/?city=Jakarta"> Jakarta </a>
        <a href="/?city=Rovaniemi"> Rovaniemi </a>
        <a href="/?city=Scotland"> Scotland </a>
        <a href="/?city=Oxford"> Oxford </a>
      </nav>
    </header>
  );
}

export default Header;
