import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NPSApi from './NPSApi';
import App3 from './App3';
import Home from './Home';

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
    this.clickLink = this.clickLink.bind(this);
    this.clickHome = this.clickHome.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
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
          <div class="menu" style={this.state.menuStyle} onClick={this.toggleMenu}>
            <div id="topBar" style={this.state.topBarStyle}></div>
            <div id="middleBar" style={this.state.midBarStyle}></div>
            <div id="bottomBar" style={this.state.botBarStyle}></div>
          </div>
          <div class="sidebar" onMouseLeave={this.mouseLeave} style={{display: this.state.linkDisp}}>
            <div class="placeholder"></div>
            <Link class="link" style={{display: this.state.linkDisp}}  onClick={this.clickHome}to={'/project'}>Home</Link>
            <br/>
            <Link class="link" style={{display: this.state.linkDisp}} onClick={this.clickLink} to={'/project/npsapi'}>NPS API</Link>
            <br/>
            <Link class="link" style={{display: this.state.linkDisp}} onClick={this.clickLink} to={'/project/page3'}>Page3</Link>
          </div>
          <Route path="/project/npsapi" component={NPSApi}/>
          <Route path="/project/page3" component={App3}/>
          <Route path="/project/home" component={Home}/>
          <Route exact path="/project" component={Home}/>

        </div>
      </Router>
    );
  }
}

export default App;
