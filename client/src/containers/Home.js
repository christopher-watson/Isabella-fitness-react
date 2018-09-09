import React, { Component } from "react";
import API from "../utils/API";
import Form from '../components/Form';
import Jumbo from '../components/Jumbo';
import Info1 from '../components/Info/Info1';
import Info2 from '../components/Info/Info2';
import Info3 from '../components/Info/Info3';
import Slide from '../components/Slide';
import Bio1 from '../components/Bio/Bio1'
import Bio2 from '../components/Bio/Bio2'

class Home extends Component {
  state = {
    isLoggedIn: true,
    username: ""
  }

  componentDidMount() {
    this.loginCheck();
  }
  
  loginCheck = () => {
    API
      .loginCheck()
      .then(res => {
        this.setState({ isLoggedIn: res.data.isLoggedIn, username: res.data.username })
      })
      .catch(err => {
        console.log(err);
        this.setState({isLoggedIn: false})
      })
  }

  render() {
    return (
      <div className="body">
        <Jumbo />
        <Form />
        <div className="info">
          <Info1 />
          <Info2 />
          <Info3 />
        </div>
        <Slide />
        <div className="bio">
          <Bio1 />
          <Bio2 />
        </div>
      </div>
    )
  }
}

export default Home;