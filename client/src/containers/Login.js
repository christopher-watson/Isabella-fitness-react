import React, { Component } from "react";
import API from "../utils/API";

class Login extends Component {
  state = {
    isLoggedIn: true,
    username: "",
    password: "",
    error: false
  }

  componentDidMount() {
    this.loginCheck();
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

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
    if(!this.state.username){
      this.setState({
        error: false
      })
    }
  }

  login = (e) => {
    e.preventDefault();
    API
      .login({username: this.state.username, password: this.state.password})
      .then(res => {
        this.setState({isLoggedIn: res.data})
        if(res.status === 200){
          console.log(`${res.data.username} logged in`);
          setTimeout(() => { window.location="/" }, 500);
        }
      })
      .catch(err => {
        console.log(err.response)
        this.setState({ error: true })
        console.log('error logging in')
      });
  }

  render() { 
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-5">
          <div className="row align-items-center justify-content-center my-5">
            <h1>Admin Login</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-8">
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Username"/>
                  <small id="errorMessage" className="form-text text-danger">
                    {this.state.error ? 'Incorrect username or password' : ''}
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-success" onClick={this.login}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )

  }
}
  
  export default Login;

