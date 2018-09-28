import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import App3 from './App3';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome Page 1</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to={'/page2'}>Page2</Link>
          <br/>
          <Link to={'/page3'}>Page3</Link>

          <Route path="/page2" component={App2}/>
          <Route path="/page3" component={App3}/>
        </div>
      </Router>
    );
  }
}

export default App;
