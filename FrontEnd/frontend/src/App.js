import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MemeContainer from "./components/AllMemes/MemeContainer";
import Navbar from "./components/Navbar/Navbar";
import * as ReactBootstrap from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <ReactBootstrap.Container fluid="md">
        <ReactBootstrap.Row>
          <ReactBootstrap.Col></ReactBootstrap.Col>
          <ReactBootstrap.Col xs={10}>
            <Switch>
              <Route path="/newMeme" exact>
                
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/">
                <MemeContainer />
              </Route>
            </Switch>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col></ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </ReactBootstrap.Container>
      <Footer />
    </Router>
  );
}

export default App;
