import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src={require("./img/logo.jpg")} alt="logo"/>
        <h2 className="app-title">Bootcamp Slides App</h2>
      </div>
    )
  }



}
