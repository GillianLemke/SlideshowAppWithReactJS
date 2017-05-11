import React from 'react';
//import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';

//let store = createStore()
export default class Title extends React.Component {
  constructor(props) {
    super(props);
    // do we need content here?
    this.state = { title:'', type:'title', content:[] };
  }

  getPageInfo() {
    return $.getJSON('google.com/slide')
      .then((data) => {
        // how can we get data for individual variables?
        // use regex to separate string into different variables?
        // assuming format of json is type,title,content
        // separated by an uncommon utf char
        // '^/w*' matches type (should skip over this)
        this.setState({ title:data.results })
      });
  }

  render() {
    return (
      <div className="title-slide">
        <h1>{this.state.title}</h1>
        <button className="Next-Button" onClick={this.props.nextClick}>NEXT</button>
        <button className="Prev-Button" onClick={this.props.prevClick}>PREV</button>
      </div>
    );
  }
}
