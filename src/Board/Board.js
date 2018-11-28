import React, { Component } from 'react';
import logo from '../logo.svg';
import './board.css';
import Note from './Note';
import { FaPlus } from 'react-icons/fa';


class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
      ]
    }
    this.eachNote = this.eachNote.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
    this.nextId = this.nextId.bind(this);
  }

  update(newText, i){
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !== i ? note : {...note, note: newText})
      )
    }))
  }

  remove(id){
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }))
  }

  nextId(){
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  }

  add(text){
    alert('adding new note' + text)
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          id: this.nextId(),
          note: text
        }
      ]
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
          {this.state.notes.map(this.eachNote)}
          <button id="add" onClick={this.add.bind(null, "new note")}><FaPlus /></button>
      </div>
    );
  }
}

export default Board;
