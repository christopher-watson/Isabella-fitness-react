import React, { Component } from "react";
import API from "../utils/API";
import Radium, { StyleRoot } from 'radium';
import { fadeOut } from 'react-animations';

const styles = {
  emojiStyle: {
    fontSize: 150,
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeOut, 'fadeOut'),
  }
}

class Logout extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: "",
    redirect: false
  }

  componentDidMount() {
    this.logout();
  }

  logout = () => {
    API
      .logout({username: this.state.username, password: this.state.password})
      .then(res => {
        this.setState({isLoggedIn: res.data})
      })
      .catch(err => console.log(err.response));
    setTimeout(() => { window.location="/" }, 400);
  }

  render() { 
    return (
      <div>
        <div className="container-fluid py-5">
          <div className="row align-items-center justify-content-center my-5 text-dark">
            <StyleRoot>
              <span style={styles.emojiStyle} role='img' aria-label='peace'>
                ✌️
              </span>
            </StyleRoot>
          </div>
        </div>
      </div>
    ) 
    }
  }
  
  export default Logout;