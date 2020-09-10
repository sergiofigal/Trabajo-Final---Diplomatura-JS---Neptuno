import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import NewMeme from "../NewMeme/NewMeme";

export default function Navbar() {
  return (
    <React.Fragment>
      <ReactBootstrap.Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <ReactBootstrap.Navbar.Brand href="#home">
          Neptuno
        </ReactBootstrap.Navbar.Brand>

        <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />

        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <NewMeme/>
            <ReactBootstrap.Nav.Link href="#features">
              Categorías
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#login">
              Logout
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Form inline>
            <ReactBootstrap.FormControl
              type="text"
              placeholder="Meme"
              className="mr-sm-2"
            />
            <ReactBootstrap.Button variant="outline-info">
              Buscar Memes
            </ReactBootstrap.Button>
          </ReactBootstrap.Form>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </React.Fragment>
  );
}
