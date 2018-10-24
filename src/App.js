import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import API1 from './API1';
import App3 from './App3';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {linkDisp: "none",
                  homeDisp: "none",
                  topBarStyle: {},
                  midBarStyle: {},
                  botBarStyle: {}
                };
    this.mouseLeave = this.mouseLeave.bind(this);
  }


  clickLink(){
    this.setState({linkDisp: "", homeDisp: ""});
  }

  clickHome(){
    this.setState({linkDisp: "", homeDisp: "none"});
  }

  toggleMenu(e){
    e.preventDefault();
    if(this.state.linkDisp === "none"){
      this.setState({linkDisp: "flex",
                    topBarStyle: {transform: "rotate(-225deg)", top: ".5em"},
                    midBarStyle: {opacity: "0", transition: "200ms"},
                    botBarStyle: {transform: "rotate(225deg)", top: ".5em"}});
    } else {
      this.setState({linkDisp:"none",
                    topBarStyle: {},
                    midBarStyle: {},
                    botBarStyle: {}});
    }
  }

  mouseLeave(e){
    this.toggleMenu(e)
    // this.setState()
  }
  render() {
    return (
      <Router>
        <div>
          <div class="menu" style={this.state.menuStyle} onClick={this.toggleMenu.bind(this)}>
            <div id="topBar" style={this.state.topBarStyle}></div>
            <div id="middleBar" style={this.state.midBarStyle}></div>
            <div id="bottomBar" style={this.state.botBarStyle}></div>
          </div>
          <div class="sidebar" onMouseLeave={this.mouseLeave} style={{display: this.state.linkDisp}}>
            <div class="placeholder"></div>
            <Link class="link" style={{display: this.state.linkDisp}} onClick={this.clickHome.bind(this)} to={'/project'}>Home</Link>
            <br/>
            <Link class="link" style={{display: this.state.linkDisp}} onClick={this.clickLink.bind(this)} to={'/project/api1'}>API1</Link>
            <br/>
            <Link class="link" style={{display: this.state.linkDisp}} onClick={this.clickLink.bind(this)} to={'/project/page3'}>Page3</Link>
          </div>
          <Route path="/project/api1" component={API1}/>
          <Route path="/project/page3" component={App3}/>
          <Route exact="true" path="/project" render={()=>(
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
