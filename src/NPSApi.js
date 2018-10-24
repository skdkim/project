import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
const npsKey = './assets/keys/npsAPIKey.npsKey';


class NPSApi extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoaded : false,
      parkChosen : false,
      images : [],
      queries: [],
      park: ""
    }

    this.inputSubmit = this.inputSubmit.bind(this);
    this.choosePark = this.choosePark.bind(this);
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

  choosePark(pCode){
    return function(){
        let url = 'https://api.nps.gov/api/v1/parks?fields=images&parkCode=' + pCode + '&api_key=' + npsKey;
        fetch(url)
          .then(res => res.json())
          .then(json => {
            let jsonImages = json.data[0].images;
            this.setState({
              isLoaded: true,
              images: jsonImages,
            })
          })
    }.bind(this)
  }

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
    let body;

    if(!isLoaded){
      body = (
        <div>
          <br/>
          Search a national park name to see photos.
        </div>
      );
    } else {
      body = (
        <div>
          <ul >
            {queries.map( query =>
              <li key = {query.id} onClick={this.choosePark(query.parkCode)}>
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
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NPS API DEMO</h1>
        </header>
        <input type="text" onChange={this.inputSubmit} placeholder="National Park"></input>
        {body}
      </div>
    );
  }
}

export default NPSApi;
