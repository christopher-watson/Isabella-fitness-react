import React, { Component } from 'react';
import './Info.css';
import '../../fonts.css';

export default class Info2 extends Component {
  render() {
    return (
      <div className="info2">
        <div className="row row2 right-row">
          <div className="right-row-a-area">
            <div className="right-row-a-container">
              <div className="right-row-a-text right-row-a-top">
                <div className="right-icon icon">
                  <i className="row-item fas fa-weight"></i>
                </div>
                <div className="right-row-inner">
                  <p className="right-row-inner-text">Maintain a Healthy Weight!</p>
                </div>
              </div>
              <div className="right-row-a-text">
                <div className="right-icon icon">
                  <i className="row-item fas fa-weight"></i>
                </div>
                <div className="inner">
                  <p className="right-row-inner-text">Maintain a Healthy Weight!</p>
                </div>
              </div>
              <div className="right-row-a-text">
                <div className="right-icon icon">
                  <i className="row-item fas fa-weight"></i>
                </div>
                <div className="inner">
                  <p className="right-row-inner-text">Maintain a Healthy Weight!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-row-b-area">
            <div className="right-row-b-container">
              <div className="right-row-b-text">
                <div className="right-row-b-h1">
                  Nutrition
                </div>
                <div className="right-b-area-highlight">
                  <p className="green-text">Standard Meal Plan</p>
                </div>
                <div className="right-row-b-inner-text">
                  Sagittis dignissim ridiculus himenaeos tempus pellentesque tempor nisi netus nulla pretium gravida mauris morbi malesuada
                  duis dictum aliquam arcu molestie
                </div>
                <div className="right-row-b-button">
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
