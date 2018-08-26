import React, { Component } from 'react';
import './Jumbo.css';
import '../../fonts.css';

export default class Jumbo extends Component {
  render() {
    return (
      <div className="jumbo">
        <div className="jumbo-div">
          <div className="jumbo-text">
            <div className="isa">Isabella</div>
            <div className="health">Health</div>
          </div>
          <div className="jumbo-buttons">
            <a className="button left-button">Button</a>
            <a className="button right-button">Button</a>
          </div>
        </div>
      </div>
    )
  }
}
