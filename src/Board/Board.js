import React, { Component } from 'react';
import logo from '../logo.svg';
import './board.css';
import Note from './Note';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
        {id: 3, note: "gym"},
        {id: 4, note: "visit bank"},
        {id: 5, note: "study React"}
      ]
    }
    this.eachNote = this.eachNote.bind(this);
  }

  eachNote(note, i){
    return(
      <Note key={i} index ={i} >{note.note}</Note>
    )
  }

  render() {
    return (
      <div className="board">
        <header className="App-header">
          {this.state.notes.map((note) => this.eachNote(note))}
        </header>
      </div>
    );
  }
}

export default Board;
