import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
const npsKey = './assets/keys/npsAPIKey.npsKey';


class API1 extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoaded : false,
      images : [],
    }
  }

  componentDidMount() {
    let url = 'https://api.nps.gov/api/v1/parks?fields=images&parkCode=yose&api_key=' + npsKey;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        let jsonImages = json.data[0].images;
        this.setState({
          isLoaded: true,
          images: jsonImages,
        })
      })
  }

  render() {
    let {isLoaded, images} = this.state;

    if(!isLoaded){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">API DEMO 1</h1>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">API DEMO 1</h1>
        </header>
        <div>
          <ul>
            {images.map( image => (
                <img key={image.id} src={image.url} width="500px" height = "300px"/>
            ))}
          </ul>
        </div>
        </div>
      );
    }
  }
}

export default API1;
