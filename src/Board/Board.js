import React, { Component } from 'react';
import logo from '../logo.svg';
import './board.css';
import Note from './Note';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
        {id: 0, note: "gym"},
        {id: 1, note: "visit bank"},
        {id: 2, note: "study React"}
      ]
    }
    this.eachNote = this.eachNote.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  update(newText, i){
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !== i ? note : {...note, note: newText})
      )
    }))
  }

  remove(id){
    alert('removing item ' + id);
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }))
  }

  eachNote(msg, i){
    return(
      <Note key={i}
            index ={i}
            onChange={this.update}
            onRemove={this.remove}>
            {msg.note}
      </Note>
    )
  }

  render() {
    return (
      <div className="board">
        <header className="App-header">
          {this.state.notes.map(this.eachNote)}
        </header>
      </div>
    );
  }
}

export default Board;
