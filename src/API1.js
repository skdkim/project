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
      queries: [],
      park: ""
    }

    this.inputSubmit = this.inputSubmit.bind(this);
  }

  // componentDidMount() {
  //   let url = 'https://api.nps.gov/api/v1/parks?fields=images&parkCode=yose&api_key=' + npsKey;
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => {
  //       let jsonImages = json.data[0].images;
  //       console.log(jsonImages);
  //       this.setState({
  //         isLoaded: true,
  //         images: jsonImages,
  //       })
  //     })
  // }

  inputSubmit(event){
    // this.setState({park: event.target.value})
    let url = 'https://api.nps.gov/api/v1/parks?limit=4&q='+ event.target.value + '&api_key=' + npsKey;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          queries: json.data,
        })
      })
  }

  render() {
    let {isLoaded, images, queries, park} = this.state;

    if(!isLoaded){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">API DEMO 1</h1>
          </header>
          <input type="text" onChange={this.inputSubmit}></input>
          <div>Loading...</div>
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
          <input type="text" onChange={this.inputSubmit}></input>
          <ul>
            {queries.map( query =>
              <li key = {query.id} width="100%" height="100%">
                {query.fullName}
              </li>
            )}
          </ul>
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