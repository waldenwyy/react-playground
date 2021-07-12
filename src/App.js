import React, { Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const Game = lazy(() => import('./game/Game'));
  const DataManipulation = lazy(() => import('./review/DataManipulation'));

  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Playground</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/game">game</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <h1>Welcome to React</h1>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/DataManipulation">
              <DataManipulation />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;