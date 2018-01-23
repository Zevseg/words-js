

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
//import Answers from './pages/answers';
import Answers from './pages/test';
import Rules from './pages/rules';
import About from './pages/about';
import NotFound from './pages/notfound';



const App = () => (
  <Router>
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/game">Игра</Link></li>
        <li><Link to="/answers">Поиск слов</Link></li>
        <li><Link to="/rules">Правила</Link></li>
        <li><Link to="/about">Об игре</Link></li>
      </ul>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/game" component={Game}/>
        <Route path="/answers" component={Answers}/>
        <Redirect from="/answer" to="/answers"/>
        <Route path="/rules" component={Rules}/>
        <Route path="/about" component={About}/>
        <Route component={NotFound} value={24243} />
      </Switch>
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
