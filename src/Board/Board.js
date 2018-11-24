import React, { Component } from 'react';
import logo from '../logo.svg';
import './board.css';
import Note from './Note';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <header className="App-header">
          <Note/>
        </header>
      </div>
    );
  }
}

export default Board;
