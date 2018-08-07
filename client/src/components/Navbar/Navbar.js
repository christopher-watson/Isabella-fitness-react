import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import logo from '../Images/Logo/logo1.png'
import Radium, { StyleRoot } from 'radium';
import { fadeIn } from 'react-animations';
import API from '../../utils/API'

const styles = {
  navStyle: {
    position: 'fixed',
    width: '100%',
    zIndex: 5
  },
  hiddenLogo: {
    width: 200,
    marginLeft: 10,
    opacity: 0
  },
  displayLogo: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    width: 200,
    marginLeft: 10
  }
}

class Navbar extends Component {
  state = {
    logoHide: true,
    isLoggedIn: true,
    username: ""
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    this.loginCheck();
  }

  handleScroll = () => {
    if(window.scrollY < 125){
      this.setState({
        logoHide: true
      })   
    }
    if(window.scrollY > 125){
      this.setState({
        logoHide: false
      })    
    }
  }

  loginCheck = () => {
    API
      .loginCheck()
      .then(res => this.setState({
        isLoggedIn: res.data.isLoggedIn, username: res.data.username
      }))
      .catch(err => {
        console.log(err);
        this.setState({isLoggedIn: false})
      })
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={styles.navStyle}>
        <NavLink className="navbar-brand" to="/">
          <StyleRoot> 
            <img 
              src={logo} 
              alt="Isabella"
              style={ this.state.logoHide ? styles.hiddenLogo : styles.displayLogo }/>
          </StyleRoot>
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav" style={styles.navIcons}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clients">
                {
                  this.state.isLoggedIn
                  ? <span title="Responses"><i className="fas fa-envelope" alt="envelope"></i></span>
                  : <span></span>
                }
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={this.state.isLoggedIn ? "/logout" : "/login"}>
                {
                  this.state.isLoggedIn 
                  ? <span title="Logout"><i className="fas fa-sign-out-alt" alt="logout"></i></span>
                  : <span title="Login"><i className="fas fa-sign-in-alt" alt="login"></i></span>
                }
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
