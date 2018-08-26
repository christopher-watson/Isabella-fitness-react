import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import logo from '../Images/Logo/logo1.png'
import Radium, { StyleRoot } from 'radium';
import { fadeIn } from 'react-animations';
import API from '../../utils/API'

const styles = {
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
  },
  hideBackground: {
    background: 'none'
  },
  displayBackground: {
    backgroundColor: `var(--grey)`,
    WebkitTransition: 'background-color 500ms linear',
    msTransition: 'background-color 500ms linear',
    transition: 'background-color 500ms linear'
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
      <nav className="nav-bar"
        style= {this.state.logoHide ? styles.hideBackground : styles.displayBackground}>
        <NavLink className="logo-div" to="/">
          <StyleRoot> 
            <img 
              src={logo}
              id="logo" 
              alt="Isabella"
              style={ this.state.logoHide ? styles.hiddenLogo : styles.displayLogo }/>
          </StyleRoot>
        </NavLink>
        <div className="icon-div" style={styles.navIcons}>
          <ul className="icon-ul">
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/">
              <span title="Home"><i className="fas fa-home" alt="home"></i></span>
              </NavLink>
            </li> */}
            <li className="icon-item">
              <NavLink className="nav-link" to="/clients">
                {
                  this.state.isLoggedIn
                  ? <span title="Responses"><i className="fas fa-envelope" alt="envelope"></i></span>
                  : <span></span>
                }
              </NavLink>
            </li>
            <li className="icon-item">
              <a className="nav-link" href='https://www.facebook.com/IsabellaFitness/' target="_blank" rel="noopener noreferrer">
              <span title="Facebook"><i className="fab fa-facebook" alt="facebook"></i></span>
              </a>
            </li>
            <li className="icon-item">
              <a className="nav-link" href='https://www.instagram.com/isabella_fitness_/' target="_blank" rel="noopener noreferrer">
              <span title="Instagram"><i className="fab fa-instagram" alt="instagram"></i></span>
              </a>
            </li>
            <li className="icon-item">
              <a className="nav-link" href='https://twitter.com/IsabellaFitness' target="_blank" rel="noopener noreferrer">
              <span title="Twitter"><i className="fab fa-twitter" alt="twitter"></i></span>
              </a>
            </li>
            <li className="icon-item">
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
