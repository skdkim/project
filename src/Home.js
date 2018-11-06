import React, { Component } from 'react';
import logo from './logo.svg';
import david from './assets/images/david.gif';
import './Home.css';
import './App.css';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';


class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App" id="home">
        <img id="davidGif" src={david} alt="logo" />
        <h1 className="App-title">David's Future Portfolio</h1>
        <p className="App-intro">
          Welcome to my future portfolio project. <br/>
          I'm hand rolling this as a fun react project. <br/>
          This probably won't look good on mobile for a while. <br/>
        <br/>
        <a href="http://davidkim.tech">Official Portfolio for now</a><br/>
          <br/>
          Click on a link below or in the side menu.
        </p>
        <h3>Projects</h3>
        <div class="projects-container">
          <div class="project">
            <Link class="link" to={'/project/npsapi'}>NPS API DEMO</Link>
          </div>
          <div class="project">
            <a href="http://www.hikergram.com" target="_blank">HikerGram</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
