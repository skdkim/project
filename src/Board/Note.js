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
      editing: false,
      content: "Hello World"
    }

    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
    this.randomBetween = this.randomBetween.bind(this);
  }

  componentWillMount(){
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, "px"),
      top: this.randomBetween(0, window.innerHeight - 150, "px"),
      transform: "rotate(" + this.randomBetween(-25,25,"deg") + ")"
    }
  }

  componentDidUpdate(){
      let textArea;
      if(this.state.editing){
        textArea = this.newMsg;
        textArea.focus();
        textArea.select();
      }
  }

  shouldComponentUpdate(nextProps, nextState){
    return(
      this.props.children !== nextProps.children || this.state !== nextState
    )
  }

  randomBetween(x,y,s){
    return x + Math.ceil(Math.random() * (y - x)) + s;
  }

  edit(){
    this.setState({editing: true, content: this.newMsg});
  }

  remove(){
    this.props.onRemove(this.props.index)
  }

  save(e){
    e.preventDefault();
    this.props.onChange(this.newMsg.value, this.props.index)
    this.setState({editing: false, content: this.newMsg.value});
  }

  renderForm(){
    return (
      <div className="note" style={this.style}>
        <form onSubmit={this.save}>
          <textarea type="text" ref={content => this.newMsg = content} defaultValue={this.props.children}/>
          <button id="save"><FaSave/></button>
        </form>
      </div>
    );
  }

  renderDisplay(){
    return (
      <div className="note" style={this.style}>
        <p>{this.props.children}</p>
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
