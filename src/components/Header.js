import React from "react";

const Header = (props) => (
  <header style={{ marginBottom: 10 }}>
    <div>
      <span className="header"> {props.title} </span>
    </div>

    <div className="subheader-body">
      <span className="subheader">
        {" "}
        Source Code{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/savana-s/trailblaze"
        >
          GitHub
        </a>{" "}
        |
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://www.coindesk.com/price/"
        >
          Exchange Rate
        </a>
      </span>
    </div>
  </header>
);

export default Header;
