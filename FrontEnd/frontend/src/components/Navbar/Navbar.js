import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import NewMeme from "../NewMeme/NewMeme";
import "./Navbar.css";
import NeptunoLogo from "../../assets/img/neptuno-logo-dark.svg";

export default function Navbar() {
	function GetLogo() {
		return (
			<img src={NeptunoLogo} className="logo navBarLogo" alt="Neptuno Logo" />
		);
	}

	return (
		<React.Fragment>
			<ReactBootstrap.Navbar
				className="container rounded m-4 header"
				expand="md"
				sticky="top"
			>
				<ReactBootstrap.Navbar.Brand
					className="neptuno_Logo"
					id="logo"
					href="#home"
				>
					<React.StrictMode>
						<GetLogo />
					</React.StrictMode>
				</ReactBootstrap.Navbar.Brand>

				<ReactBootstrap.Navbar.Collapse
					id="basic-navbar-nav"
					className="col-9 ml-auto navbar-collapse collapse"
				>
					<ReactBootstrap.Form inline>
						<ReactBootstrap.FormControl
							type="text"
							placeholder="Buscar un Meme..."
							className="mr-sm-2 rounded-pill search-input"
						/>
						<ReactBootstrap.Button
							variant="outline-info"
							className=" icon search-icon"
						></ReactBootstrap.Button>
					</ReactBootstrap.Form>

					<ReactBootstrap.Nav className="m-auto">
						<NewMeme />
					</ReactBootstrap.Nav>

					<ReactBootstrap.Nav.Link
						id="userMenu"
						className="icon user-icon"
						href="#login"
					></ReactBootstrap.Nav.Link>
				</ReactBootstrap.Navbar.Collapse>
			</ReactBootstrap.Navbar>
		</React.Fragment>
	);
}
