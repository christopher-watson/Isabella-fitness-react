import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import logo from '../Images/Logo/logo1.png'
import Radium, { StyleRoot } from 'radium';
import { fadeIn } from 'react-animations';

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
    logoHide: true
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clients">Clients</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}



export default Navbar;

