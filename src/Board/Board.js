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
    this.clear = this.clear.bind(this);
  }

  componentWillMount(){
    let self = this;
    if(this.props.count){
      fetch('https://baconipsum.com/api/?type=all-meat&sentences=' + this.props.count)
        .then(response => response.json())
        .then(json => json[0].split(". ").forEach(sentence => self.add(sentence.substring(0, 25))))
    }
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
    return ++this.uniqueId;
  }

  add(text){
    let id = this.nextId()
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          id: id,
          note: text
        }
      ]
    }))
  }

  eachNote(msg, i){
    return(
      <Note key={msg.id}
            index ={msg.id}
            onChange={this.update}
            onRemove={this.remove}>
            {msg.note}
      </Note>
    )
  }

  clear(){
    this.setState({notes: []})
  }

  render() {
    return (
      <div className="board">
          {this.state.notes.map(this.eachNote)}
          <button id="add" onClick={this.add.bind(null, "new note")}><FaPlus /></button>
          <button id="add" onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Board;
