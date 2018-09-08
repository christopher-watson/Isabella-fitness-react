import React, { Component } from 'react';
import './Slide.css';
import '../../fonts.css';

export default class Slide extends Component {
  state = {
    slide1: true,
    slide2: false,
    slide3: false,
  }

  handleSlides = (event) => {
    // console.log(event.target.attributes.name.value);
    const name = event.target.attributes.name.value;
    switch(name){
      case 'slide1':
        this.setState({
          slide1: true,
          slide2: false,
          slide3: false
        })
        break;
      case 'slide2':
        this.setState({
          slide1: false,
          slide2: true,
          slide3: false
        })
        break;
      case 'slide3':
        this.setState({
          slide1: false,
          slide2: false,
          slide3: true
        })
        break;
      default:
      this.setState({
        slide1: true,
        slide2: false,
        slide3: false
      })
    }

  }

  render() {
    return (
      <div className="slide">
        <div className="sliders">
          <div className="slider slider1 button" name='slide1' onClick={this.handleSlides}>SLIDE 1</div>
          <div className="slider slider2 button" name='slide2' onClick={this.handleSlides}>SLIDE 2</div>
          <div className="slider slider3 button" name='slide3' onClick={this.handleSlides}>SLIDE 3</div>
        </div>
        <div 
          className="slide1" 
          state={this.state.slide1 ? 'active' : 'hidden'}>
          <div className="slide1-container">
            <div className="top-row">
              <div className="box box1">
                <div className="heading-text green-text">Monthly Membership</div>
                <div className="info-text">
                  <ul>
                    <li>Unlimited Access to All Classes</li>
                    <li>Automatic Monthly Renewal</li>
                    <li>Rate Guaranteed for One Year</li>
                    <li>Cancellation Requires 30 Days Notice</li>
                  </ul>
                </div>
                <div className="background-text">$199</div>
              </div>
              <div className="box box2">
                <div className="heading-text green-text">Monthly Membership</div>
                <div className="info-text">
                  <ul>
                    <li>Unlimited Access to All Classes</li>
                    <li>Automatic Monthly Renewal</li>
                    <li>Rate Guaranteed for One Year</li>
                    <li>Cancellation Requires 30 Days Notice</li>
                  </ul>
                </div>
                <div className="background-text">$199</div>
              </div>
              <div className="box box3">
                <div className="heading-text green-text">Monthly Membership</div>
                <div className="info-text">
                  <ul>
                    <li>Unlimited Access to All Classes</li>
                    <li>Automatic Monthly Renewal</li>
                    <li>Rate Guaranteed for One Year</li>
                    <li>Cancellation Requires 30 Days Notice</li>
                  </ul>
                </div>
                <div className="background-text">$199</div>
              </div>
            </div>
            <div className="bottom-row">
              <div className="bottom-box bottom-box-left">
                <div className="underline-text">
                  Single Class & Multi-Day
                </div>
                <div className="slide-text-left">
                <ul>
                    <li>1</li>
                    <li>5</li>
                    <li>10</li>
                    <li>15</li>
                    <li>20</li>
                    <li>30</li>
                  </ul>
                </div>
                <div className="slide-text-right">
                  <ul>
                    <li>$25</li>
                    <li>$95</li>
                    <li>$180</li>
                    <li>$225</li>
                    <li>$320</li>
                    <li>$750</li>
                  </ul>
                </div>
              </div>
              <div className="bottom-box bottom-box-right">
                <div className="underline-text">
                  Single Class & Multi-Day
                </div>
                <div className="slide-text-left">
                  <ul>
                    <li>1</li>
                    <li>5</li>
                    <li>10</li>
                    <li>15</li>
                    <li>20</li>
                    <li>30</li>
                  </ul>
                </div>
                <div className="slide-text-right">
                  <ul>
                    <li>$25</li>
                    <li>$95</li>
                    <li>$180</li>
                    <li>$225</li>
                    <li>$320</li>
                    <li>$750</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div 
          className="slide2" 
          state={this.state.slide2 ? 'active' : 'hidden'}>
          Himenaeos nostra tortor felis nec porttitor phasellus tristique egestas auctor arcu sapien nam massa montes aliquam molestie etiam eleifend velit
        </div>
        <div 
          className="slide3" 
          state={this.state.slide3 ? 'active' : 'hidden'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam eaque dolores obcaecati odit optio nemo! Cupiditate, reprehenderit voluptatibus harum odit tenetur autem dolorem doloribus quod facere rerum aperiam perspiciatis?
        </div>
      </div>
    )
  }
}
