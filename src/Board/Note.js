import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { FaBeer } from 'react-icons/fa';

import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';


class Note extends Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false
    }
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
  }

  edit(){
    this.setState({editing: true});
  }

  remove(){
    alert('removing');
  }

  save(){
    alert('saved');
  }

  renderForm(){
    return (
      <div className="note">
        <form>
          <textarea>
          </textarea>
          <button id="save" onClick={this.save}><FaSave/></button>
        </form>
      </div>
    );
  }

  renderDisplay(){
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

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

export default Note;
