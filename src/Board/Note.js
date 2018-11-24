import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { FaBeer } from 'react-icons/fa';

import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';


class Note extends Component {
  constructor(props){
    super(props);

    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
  }

  edit(){
    alert('editing')
  }

  remove(){
    alert('removing')
  }

  render() {
    return (
      <div className="note">
        <p>Hello World</p>

        <span>
          <button id="edit" onClick={this.edit}><FaPencilAlt /> </button>
          <button id="remove" onClick={this.remove}><FaTrash /></button>
        </span>
      </div>
    );
  }
}

export default Note;
