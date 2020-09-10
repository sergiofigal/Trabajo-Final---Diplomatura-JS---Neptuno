import React from "react";
import * as ReactBootstrap from "react-bootstrap";

export default function Footer() {
  return (
    <React.Fragment>
      <ReactBootstrap.Navbar
        bg="dark"
        variant="dark"
        sticky="bottom"
        fixed="bottom"
      >
        <div >
          © 2020 Copyright:
          <a href="https://github.com/nicocastillo95/Trabajo-Final---Diplomatura-JS---Neptuno">
            {" "}
            Github.com{" "}
          </a>
        </div>
      </ReactBootstrap.Navbar>
    </React.Fragment>
  );
}
