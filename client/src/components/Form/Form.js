import React from 'react';
import Modal from 'react-responsive-modal';
import API from "../../utils/API";

export default class Form extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  submit = (e) => {
    e.preventDefault();
    API
      .sendEmail({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      })
      .catch(err => console.log(err.response.data))
    API
      .responseSubmit({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message,
      })
      .catch(err => console.log(err.response.data))
    API
      .responseBackup({
        name: this.state.name,
        email:this.state.email,
        phone: this.state.phone,
        message: this.state.message,
      })
      .catch(err => console.log(err.response.data));
    this.onOpenModal();
  };

  clearResponse = () =>{
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
      open: false
    })
  }

  render( ) {
    const { open } = this.state;
    return (
      <div className="container">
        <h3>Submit a Form</h3>
        <form>
          <div className="form-row">
            <div className="col-md-7 mb-3">
              <label htmlFor="nameInput">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                placeholder="Name"
                required />
              <div className="invalid-feedback">
                Please provide your name
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-7 mb-3">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
                placeholder="555-555-5555"
                required />
              <div className="invalid-feedback">
                Please provide your phone number
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-7 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Email"
                required />
              <div className="invalid-feedback">
                Please provide your email address
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-7 mb-3">
              <label htmlFor="message">Message</label>
              <textarea 
                type="text"
                className="form-control" 
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange}
                rows="3"
                required>
              </textarea>
            </div>
          </div>
          
          <button
            className="btn btn-primary mt-2"
            id="contactInfoSubmit"
            type="button"
            onClick={this.submit}
          >Submit</button>
        </form>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h4>Submitted!</h4>
          <p>Your response has been recorded</p>
          <button 
            className="btn btn-success offset-7" 
            onClick={this.clearResponse} 
            center="true">Ok</button>
        </Modal>
      </div>
    );
  }
}