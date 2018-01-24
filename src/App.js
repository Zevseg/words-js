

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Answers from './pages/answers';
import Description from './pages/description';
import Rules from './pages/rules';
import About from './pages/about';
import NotFound from './pages/notfound';

import "bootstrap/dist/css/bootstrap.css";
import {Navbar, NavItem, Nav, Grid, Row, Col} from "react-bootstrap";


const App = () => (
  <Router>
    <nav>
    
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><span>&#9998;</span> Составь слова</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
        <NavItem><Link to="/">qwesdf rwq</Link></NavItem>
        <NavItem><Link to="/">ewerdwqs</Link></NavItem>
        <NavItem><Link to="/">hqwerw fq</Link></NavItem>
    </Nav>
  </Navbar>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
    </ul>
  </div>
</nav>
  <Grid>
    <Row>
    <Col md={12} sm={12}>
      <ul className="menu">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/answers">Поиск слов</Link></li>
        <li><Link to="/rules">Правила</Link></li>
        <li><Link to="/about">Об игре</Link></li>
      </ul>

      <Switch>
        <Route path="/" exact component={Answers}/>
        <Route path="/answers" component={Answers}/>
        <Redirect from="/answer" to="/answers"/>
        <Route path="/description/:word" component={Description}/>
        <Route path="/rules" component={Rules}/>
        <Route path="/about" component={About}/>
        <Route component={NotFound}/>
      </Switch>
      </Col>
    </Row>
  </Grid>
    </nav>
  </Router>
)

export default App;


/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/
