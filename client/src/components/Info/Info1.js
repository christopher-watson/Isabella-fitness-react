import React, { Component } from 'react';
import './Info.css';
import '../../fonts.css';

export default class Info1 extends Component {
  render() {
    return (
      <div className="info info1">
        <div className="row row1 left-row">
          <div className="left-row-a-area">
            <div className="left-row-a-container">
              <div className="left-row-a-text left-row-a-top">
                <div className="left-icon icon">
                  <i className="row-item fas fa-weight"></i>
                </div>
                <div className="left-row-inner">
                  <p className="left-row-inner-text">Maintain a Healthy Weight!</p>
                </div>
              </div>
              <div className="left-row-a-text">
                <div className="left-icon icon">
                  <i className="row-item fas fa-weight"></i>
                </div>
                <div className="inner">
                  <p className="left-row-inner-text">Maintain a Healthy Weight!</p>
                </div>
              </div>
              <div className="left-row-a-text">
                <div className="left-icon icon">
                  <i className="row-item fas fa-weight"></i>
                </div>
                <div className="inner">
                  <p className="left-row-inner-text">Maintain a Healthy Weight!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="left-row-b-area">
            <div className="left-row-b-container">
              <div className="left-row-b-text">
                <div className="left-row-b-h1">
                  Nutrition
                </div>
                <div className="left-b-area-highlight">
                  <p className="green-text">Standard Meal Plan</p>
                </div>
                <div className="left-row-b-inner-text">
                  Sagittis dignissim ridiculus himenaeos tempus pellentesque tempor nisi netus nulla pretium gravida mauris morbi malesuada
                  duis dictum aliquam arcu molestie
                </div>
                <div className="left-row-b-button">
                  <a className="button info-button">Button</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
