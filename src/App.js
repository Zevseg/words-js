
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Answers from './pages/answers';
import Description from './pages/description';
import Rules from './pages/rules';
import About from './pages/about';
import NotFound from './pages/notfound';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Grid, Row, Col} from "react-bootstrap";


class App extends React.Component {
    render() {
        return (    
            <Router>
                <nav>
                    <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link className="navbar-brand" to="/">&#9998; Составь слова</Link>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/answers">Поиск слов</Link></li>
                                    <li><Link to="/rules">Правила</Link></li>
                                    <li><Link to="/about">Об игре</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Grid>
                      <Row>
                      <Col md={12} sm={12}>
                        <Switch>
                          <Route path="/" exact component={Answers}/>
                          <Route path="/answers" component={Answers}/>
                          <Redirect from="/answer" to="/answers"/>
                          <Route path="/description" component={Description}/>
                          <Route path="/rules" component={Rules}/>
                          <Route path="/about" component={About}/>
                          <Route component={NotFound}/>
                        </Switch>
                        </Col>
                      </Row>
                    </Grid>
                </nav>
            </Router>
        );
    }
}

export default App;
