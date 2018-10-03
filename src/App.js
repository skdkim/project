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

  toggleMenu(e){
    e.preventDefault();
    if(this.state.linkDisp === "none"){
      this.setState({linkDisp: "flex"});
    } else {
      this.setState({linkDisp:"none"});
    }
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <img class="menu" src={hamburger} onClick={this.toggleMenu.bind(this)} alt=""></img>
          </div>
          <div class="sidebar" style={{display: this.state.linkDisp}}>
            <div class="placeholder"></div>
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
