import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NPSApi from './NPSApi';
import Home from './Home';
import Board from '../src/Board/Board';
import { FaPencil } from 'react-icons/fa';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {burgerDisp: "none",
                  menuDisp: "none",
                  topBarStyle: {},
                  midBarStyle: {},
                  botBarStyle: {},
                  overMenuButton: false
                };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    if(this.state.menuDisp === "none"){
      this.setState({menuDisp: "flex",
                    topBarStyle: {transform: "rotate(-225deg)", top: ".5em"},
                    midBarStyle: {opacity: "0", transition: "200ms"},
                    botBarStyle: {transform: "rotate(225deg)", top: ".5em"}});
    } else {
      this.setState({menuDisp:"none",
                    topBarStyle: {},
                    midBarStyle: {},
                    botBarStyle: {}});
    }
  }

  render() {
    return (
      <Router>
        <div>
          <div class="menu" style={this.state.menuStyle} onClick={this.toggleMenu}
                                                         onMouseEnter={this.menuMouseEnter}
                                                         onMouseLeave={this.menuMouseLeave}>
            <div id="topBar" style={this.state.topBarStyle}></div>
            <div id="middleBar" style={this.state.midBarStyle}></div>
            <div id="bottomBar" style={this.state.botBarStyle}></div>
          </div>

          <div class="sidebar" style={{display: this.state.menuDisp}}>
            <div class="placeholder"></div>
            <Link class="link" onClick={this.toggleMenu} to={'/project'}>Home</Link>
            <br/>
            <Link class="link" onClick={this.toggleMenu} to={'/project/npsapi'}>NPS API</Link>
            <br/>
            <Link class="link" onClick={this.toggleMenu} to={'/project/board'}>Board</Link>
          </div>

          <Route path="/project/npsapi" component={NPSApi}/>
          <Route path="/project/board" render={(props) => <Board {...props} count={50}/>}/>
          <Route path="/project/home" component={Home}/>
          <Route exact path="/project" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
