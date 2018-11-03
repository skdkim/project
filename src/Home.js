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
        <h1 className="App-title">David's Random Project</h1>
        <p className="App-intro">
          Welcome to my random project. <br/>
          This might take over as my new portfolio but it hasn't just yet. <br/>
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
