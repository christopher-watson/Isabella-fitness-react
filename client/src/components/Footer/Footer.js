import React, { Component } from 'react';
import './Footer.css';
import logo from '../Images/Logo/logo1.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <ul>
            <li>Programs</li>
            <li>Daily Workout</li>
            <li>Schedule</li>
            <li>Pricing</li>
            <li>Team</li>
            <li>Location</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <img src={logo} alt="Isabella Fitness Logo" className="footer-logo"/>
        </div>
      </div>
    )
  }
}
