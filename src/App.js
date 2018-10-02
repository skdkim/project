import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import App3 from './App3';
import hamburger from './assets/images/hamburger.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {linkDisp: "none",
                  homeDisp: "none"};
  }

  clickLink(){
    this.setState({linkDisp: "none", homeDisp: ""});
  }

  clickHome(){
    this.setState({linkDisp: "", homeDisp: "none"});
  }

  hamburgerMouseEnter(){
    this.setState({linkDisp: "block"});
  }

  hamburgerMouseLeave(){
    this.setState({linkDisp: "none"});
  }

  render() {
    return (
      <Router>
        <div>
          <div class="sidebar" onMouseLeave={this.hamburgerMouseLeave.bind(this)}>
            <div>
              <img class="js" src={hamburger} onMouseEnter={this.hamburgerMouseEnter.bind(this)} alt=""></img>
            </div>
            <Link class="link" style={{display: this.state.linkDisp}} onClick={this.clickHome.bind(this)} to={'/'}>Home</Link>
            <br/>
            <Link class="link" style={{display: this.state.linkDisp}} onClick={this.clickLink.bind(this)} to={'/page2'}>Page2</Link>
            <br/>
            <Link class="link" style={{display: this.state.linkDisp}} onClick={this.clickLink.bind(this)} to={'/page3'}>Page3</Link>
          </div>
          <Route path="/page2" component={App2}/>
          <Route path="/page3" component={App3}/>
          <Route exact="true" path="/" render={()=>(
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">David's Random Projects</h1>
                </header>
                <p className="App-intro">
                  All of my random stuff.
                  <br/> Click on a link.
                </p>
              </div>
            )}/>

        </div>
      </Router>
    );
  }
}

export default App;
