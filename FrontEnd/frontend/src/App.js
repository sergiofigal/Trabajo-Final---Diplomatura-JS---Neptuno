import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MemeContainer from "./components/AllMemes/MemeContainer";
import LeftColumn from "./components/LeftColumn/LeftColumn";
import RightColumn from "./components/RightColumn/RightColumn";
import Navbar from "./components/Navbar/Navbar";
import * as ReactBootstrap from "react-bootstrap";
import Login from "./components/Login/Login";

function App() {
	return (
		<Router>
			<Navbar />
			<ReactBootstrap.Container fluid="md">
				<ReactBootstrap.Row>
					<ReactBootstrap.Col xs={2} className="left-column rounded">
						<LeftColumn />
					</ReactBootstrap.Col>
					<ReactBootstrap.Col xs={8} className="center-column rounded">
						<Switch>
							<Route path="/newMeme" exact></Route>
							<Route path="/login" exact>
								<Login />
							</Route>
							<Route path="/">
								<MemeContainer />
							</Route>
						</Switch>
					</ReactBootstrap.Col>
					<ReactBootstrap.Col xs={2} className="right-column rounded">
						<RightColumn />
					</ReactBootstrap.Col>
				</ReactBootstrap.Row>
			</ReactBootstrap.Container>
		</Router>
	);
}

export default App;
